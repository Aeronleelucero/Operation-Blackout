// Host-authoritative match state. Runs inside a Web Worker on the hosting peer; designed so the
// same class can later run on a dedicated server (it only consumes commands and emits snapshots).
import {
  DT, WEAPONS, PLAYER, makePlayer, resetLoadout, simulate, spawns, navPoints, clamp,
  rayWorld, rayPlayers, eyePosition, forward,
} from './world.js'

export const MATCH_SECONDS = 300, MAX_PLAYERS = 12, KILL_LIMIT = 30, RESPAWN_SECONDS = 3, PROTECT_SECONDS = 2.5
const MAX_REWIND = 0.35
const BOT_NAMES = ['Viper', 'Rook', 'Ghost', 'Echo', 'Flint', 'Talon', 'Kestrel', 'Onyx', 'Drift', 'Mako', 'Sable']

const r3 = v => Math.round(v * 1000) / 1000

export function sanitizeCommand(raw, last) {
  if (!raw || typeof raw !== 'object') return null
  const seq = Number(raw.seq)
  if (!Number.isInteger(seq) || seq <= last) return null
  const cmd = { seq }
  for (const k of ['w', 's', 'a', 'd', 'sprint', 'crouch', 'jump', 'fire', 'aim', 'reload']) cmd[k] = raw[k] === true
  cmd.yaw = Number.isFinite(raw.yaw) ? raw.yaw % (Math.PI * 2) : undefined
  cmd.pitch = Number.isFinite(raw.pitch) ? clamp(raw.pitch, -1.5, 1.5) : undefined
  cmd.slot = raw.slot === 1 ? 1 : 0
  cmd.viewTime = Number.isFinite(raw.viewTime) ? raw.viewTime : undefined
  return cmd
}

export class Authority {
  constructor() {
    this.players = new Map()
    this.phase = 'lobby'
    this.timer = MATCH_SECONDS
    this.countdown = 0
    this.events = []
    this.eventId = 0
    this.time = 0
    this.round = 0
    this.history = []
    this.colorCursor = 0
  }

  event(type, data = {}) {
    const e = { type, ...data, eventId: ++this.eventId }
    this.events.push(e)
    return e
  }

  add(id, name, bot = false) {
    if (this.players.has(id)) return this.players.get(id)
    if (this.players.size >= MAX_PLAYERS) return null
    const p = makePlayer(id, String(name || 'Operative').trim().slice(0, 18) || 'Operative', this.colorCursor++)
    p.bot = bot
    p.queue = []
    p.budget = 4
    if (bot) p.ai = { target: null, wander: null, seen: 0, strafe: 1, strafeT: 0, lastPos: [p.x, p.z], stuckT: 0, losT: 0, visible: false, skill: 0.55 + Math.random() * 0.3 }
    this.players.set(id, p)
    if (this.phase === 'playing' || this.phase === 'countdown') this.respawn(p, false)
    this.event('join', { id, name: p.name })
    return p
  }

  remove(id) {
    const p = this.players.get(id)
    if (p) this.event('leave', { id, name: p.name })
    this.players.delete(id)
  }

  // Commands from a client (or the host's own input). Out-of-order / duplicate seqs are dropped.
  queue(id, cmds, ping) {
    const p = this.players.get(id)
    if (!p || p.bot || !Array.isArray(cmds)) return
    if (Number.isFinite(ping)) p.ping = clamp(Math.round(ping), 0, 999)
    for (const raw of cmds.slice(0, 20)) {
      const last = p.queue.length ? p.queue[p.queue.length - 1].seq : p.ack
      const cmd = sanitizeCommand(raw, last)
      if (cmd) p.queue.push(cmd)
    }
    if (p.queue.length > 40) p.queue.splice(0, p.queue.length - 40)
  }

  // Back-compat: a single latest input (older clients / tests).
  input(id, raw) {
    const p = this.players.get(id)
    if (!p) return
    this.queue(id, [{ ...raw, seq: (p.queue.length ? p.queue[p.queue.length - 1].seq : p.ack) + 1 }])
  }

  start() {
    if (!this.players.size) return
    this.phase = 'countdown'
    this.countdown = 3
    this.timer = MATCH_SECONDS
    this.round++
    let i = 0
    for (const p of this.players.values()) {
      const s = spawns[i++ % spawns.length]
      Object.assign(p, { x: s[0], y: s[1], z: s[2], yaw: Math.atan2(s[0], s[2]), pitch: 0, kills: 0, deaths: 0, score: 0, streak: 0, respawn: 0, protect: 3 })
      resetLoadout(p)
    }
    this.history.length = 0
    this.event('start', { round: this.round })
  }

  pickSpawn(p) {
    let best = spawns[0], bestScore = -Infinity
    for (const s of spawns) {
      let nearest = 1000
      for (const q of this.players.values()) if (q !== p && q.hp > 0) nearest = Math.min(nearest, Math.hypot(s[0] - q.x, s[1] - q.y, s[2] - q.z))
      const score = nearest + Math.random() * 6
      if (score > bestScore) { bestScore = score; best = s }
    }
    return best
  }

  respawn(p, announce = true) {
    const s = this.pickSpawn(p)
    Object.assign(p, { x: s[0], y: s[1], z: s[2], yaw: Math.atan2(s[0], s[2]), pitch: 0, protect: PROTECT_SECONDS, respawn: 0 })
    resetLoadout(p)
    if (announce) this.event('respawn', { id: p.id, x: r3(p.x), y: r3(p.y), z: r3(p.z) })
  }

  // Position of q as the shooter saw it (interpolated history at the shooter's view time).
  rewind(q, viewTime) {
    const now = { x: q.x, y: q.y, z: q.z, height: q.height, id: q.id, ref: q }
    if (!Number.isFinite(viewTime) || !this.history.length) return now
    const t = clamp(viewTime, this.time - MAX_REWIND, this.time)
    const h = this.history
    for (let i = h.length - 1; i > 0; i--) {
      const a = h[i - 1], b = h[i]
      if (a.t <= t && t <= b.t) {
        const pa = a.pos.get(q.id), pb = b.pos.get(q.id)
        if (!pa || !pb) return now
        const k = (t - a.t) / Math.max(1e-6, b.t - a.t)
        return { x: pa[0] + (pb[0] - pa[0]) * k, y: pa[1] + (pb[1] - pa[1]) * k, z: pa[2] + (pb[2] - pa[2]) * k, height: k < 0.5 ? pa[3] : pb[3], id: q.id, ref: q }
      }
    }
    return now
  }

  resolveShot(p, ev, viewTime) {
    p.protect = 0
    const W = WEAPONS[p.weapon]
    const wall = rayWorld(ev.origin, ev.dir, W.range)
    const poses = []
    for (const q of this.players.values()) if (q !== p && q.hp > 0) poses.push(this.rewind(q, viewTime))
    const hit = rayPlayers(ev.origin, ev.dir, wall.t, poses)
    const t = hit.target ? hit.t : wall.t
    const point = { x: r3(ev.origin.x + ev.dir.x * t), y: r3(ev.origin.y + ev.dir.y * t), z: r3(ev.origin.z + ev.dir.z * t) }
    const target = hit.target?.ref
    const blocked = target && target.protect > 0
    this.event('shot', {
      id: p.id, w: p.weapon, o: { x: r3(ev.origin.x), y: r3(ev.origin.y), z: r3(ev.origin.z) }, point,
      n: !target && wall.normal ? wall.normal : null, hit: target && !blocked ? target.id : null, part: target ? hit.part : null,
    })
    if (!target || blocked) return
    this.damage(target, p, W.damage[hit.part], hit.part)
  }

  damage(target, attacker, amount, part) {
    const absorbed = Math.min(target.armor, amount / 3)
    target.armor = Math.max(0, target.armor - absorbed)
    target.hp = Math.max(0, target.hp - (amount - absorbed))
    this.event('damage', { id: target.id, by: attacker?.id || null, part, hp: Math.ceil(target.hp), from: attacker ? { x: r3(attacker.x), z: r3(attacker.z) } : null })
    if (target.hp > 0) return
    target.deaths++
    target.streak = 0
    target.respawn = RESPAWN_SECONDS
    target.queue.length = 0
    target.vx = target.vz = 0
    if (attacker && attacker !== target) {
      attacker.kills++
      attacker.streak++
      attacker.score += part === 'head' ? 150 : 100
    }
    this.event('kill', {
      id: target.id, by: attacker?.id || null, name: target.name, killer: attacker?.name || 'The Foundry',
      part, w: attacker ? attacker.weapon : -1, streak: attacker?.streak || 0,
    })
    if (attacker && attacker.kills >= KILL_LIMIT) this.end()
  }

  end() {
    if (this.phase === 'ended') return
    this.phase = 'ended'
    const winner = [...this.players.values()].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths)[0]
    this.event('end', { winner: winner?.name || null, id: winner?.id || null })
  }

  apply(p, cmd) {
    if (cmd.seq) p.ack = cmd.seq
    if (this.phase !== 'playing') {
      if (Number.isFinite(cmd.yaw)) p.yaw = cmd.yaw
      if (Number.isFinite(cmd.pitch)) p.pitch = cmd.pitch
      return
    }
    if (p.hp <= 0) return
    const ev = simulate(p, cmd, DT)
    if (ev.fired) this.resolveShot(p, ev, cmd.viewTime)
    if (ev.reloadStart) this.event('reload', { id: p.id, w: p.weapon })
    if (ev.jumped) p.jumps = (p.jumps || 0) + 1
    if (p.y < -12) this.damage(p, null, 999, 'body')
  }

  tick(dt = DT) {
    this.time += dt
    if (this.phase === 'countdown') {
      this.countdown -= dt
      if (this.countdown <= 0) { this.phase = 'playing'; this.event('go') }
    }
    if (this.phase === 'playing') {
      this.timer = Math.max(0, this.timer - dt)
      if (!this.timer) { this.end(); return }
    }
    for (const p of this.players.values()) {
      if (p.bot) {
        if (this.phase === 'playing' && p.hp > 0) this.apply(p, p.bot === 'frozen' ? { yaw: p.yaw, pitch: p.pitch } : this.botCommand(p, dt))
      } else {
        p.budget = Math.min(p.budget + 1, 10)
        while (p.queue.length && p.budget >= 1) { p.budget--; this.apply(p, p.queue.shift()) }
      }
      if (this.phase !== 'playing') continue
      p.protect = Math.max(0, p.protect - dt)
      if (p.hp <= 0) { p.respawn -= dt; if (p.respawn <= 0) this.respawn(p) }
    }
    const pos = new Map()
    for (const p of this.players.values()) pos.set(p.id, [p.x, p.y, p.z, p.height])
    this.history.push({ t: this.time, pos })
    while (this.history.length && this.history[0].t < this.time - 0.6) this.history.shift()
  }

  // ---------------------------------------------------------------------------------------------
  // Practice bots: same movement + weapon code as humans, driven by a small state machine.
  // ---------------------------------------------------------------------------------------------
  botCommand(p, dt) {
    const ai = p.ai
    const eye = eyePosition(p)
    ai.losT -= dt
    if (ai.losT <= 0) {
      ai.losT = 0.15 + Math.random() * 0.1
      let best = null, bestD = 55
      for (const q of this.players.values()) {
        if (q === p || q.hp <= 0) continue
        const dx = q.x - p.x, dy = q.y + q.height * 0.75 - eye.y, dz = q.z - p.z, d = Math.hypot(dx, dy, dz)
        if (d > bestD) continue
        const dir = { x: dx / d, y: dy / d, z: dz / d }
        if (rayWorld(eye, dir, d).t >= d - 0.3) { best = q; bestD = d }
      }
      if (best !== ai.target) ai.seen = 0
      ai.target = best
    }
    const cmd = { yaw: p.yaw, pitch: p.pitch, slot: 0 }
    const turn = (yaw, pitch, rate) => {
      let dy = yaw - p.yaw
      dy = Math.atan2(Math.sin(dy), Math.cos(dy))
      cmd.yaw = p.yaw + clamp(dy, -rate * dt, rate * dt)
      cmd.pitch = p.pitch + clamp(pitch - p.pitch, -rate * dt, rate * dt)
      return Math.abs(dy) + Math.abs(pitch - p.pitch)
    }
    const q = ai.target
    if (q && q.hp > 0) {
      ai.seen += dt
      const wobble = (1 - ai.skill) * 0.09
      const tx = q.x + Math.sin(this.time * 2.3 + p.seed) * wobble * 6, tz = q.z + Math.cos(this.time * 1.7 + p.seed) * wobble * 6
      const ty = q.y + q.height * (ai.skill > 0.75 ? 0.82 : 0.62)
      const dx = tx - p.x, dz = tz - p.z, dist = Math.hypot(dx, dz)
      const error = turn(Math.atan2(-dx, -dz), Math.atan2(ty - eye.y, dist), 4 + ai.skill * 5)
      ai.strafeT -= dt
      if (ai.strafeT <= 0) { ai.strafe = Math.random() < 0.5 ? -1 : 1; ai.strafeT = 0.5 + Math.random() * 0.9 }
      cmd.a = ai.strafe < 0; cmd.d = ai.strafe > 0
      cmd.w = dist > 16; cmd.s = dist < 6
      cmd.jump = Math.random() < 0.006
      cmd.crouch = dist > 20 && ai.skill > 0.7 && Math.sin(this.time + p.seed) > 0.6
      cmd.aim = dist > 14
      cmd.fire = ai.seen > 0.45 - ai.skill * 0.2 && error < 0.08 && Math.sin(this.time * 2.1 + p.seed) > -0.55
      cmd.reload = p.ammo[0] === 0
      return cmd
    }
    // Wander between navigation points.
    if (!ai.wander || Math.hypot(ai.wander[0] - p.x, ai.wander[1] - p.z) < 2.5) ai.wander = navPoints[Math.floor(Math.random() * navPoints.length)]
    const dx = ai.wander[0] - p.x, dz = ai.wander[1] - p.z
    turn(Math.atan2(-dx, -dz), 0, 5)
    const f = forward(p.yaw, 0)
    const ahead = rayWorld({ x: p.x, y: p.y + 0.5, z: p.z }, f, 3).t
    cmd.w = true
    cmd.sprint = Math.hypot(dx, dz) > 10
    cmd.jump = ahead < 1.4 && p.ground
    ai.stuckT += dt
    if (ai.stuckT > 1.5) {
      if (Math.hypot(p.x - ai.lastPos[0], p.z - ai.lastPos[1]) < 1) { ai.wander = navPoints[Math.floor(Math.random() * navPoints.length)]; cmd.jump = true }
      ai.stuckT = 0; ai.lastPos = [p.x, p.z]
    }
    cmd.reload = p.ammo[0] < 15 && p.reserve[0] > 0
    return cmd
  }

  snapshot() {
    const players = []
    for (const p of this.players.values()) {
      players.push({
        id: p.id, name: p.name, bot: !!p.bot, color: p.color,
        x: r3(p.x), y: r3(p.y), z: r3(p.z), vx: r3(p.vx), vy: r3(p.vy), vz: r3(p.vz), yaw: r3(p.yaw), pitch: r3(p.pitch),
        ground: p.ground, height: r3(p.height), crouched: p.crouched, slide: r3(p.slide), slideCd: r3(p.slideCd), crouchHeld: p.crouchHeld,
        sprinting: p.sprinting, aiming: p.aiming,
        hp: Math.ceil(p.hp * 10) / 10, armor: Math.round(p.armor * 10) / 10, weapon: p.weapon, ammo: p.ammo, reserve: p.reserve,
        reload: r3(p.reload), cooldown: r3(p.cooldown), swap: r3(p.swap), bloom: r3(p.bloom), shots: p.shots, fireHeld: p.fireHeld, seed: p.seed,
        kills: p.kills, deaths: p.deaths, score: p.score, streak: p.streak, protect: r3(p.protect), respawn: r3(p.respawn), ack: p.ack, ping: p.ping,
      })
    }
    return {
      t: r3(this.time), phase: this.phase, timer: r3(this.timer), countdown: r3(this.countdown), round: this.round,
      limit: KILL_LIMIT, players, events: this.events.splice(0),
    }
  }
}

export { PLAYER }
