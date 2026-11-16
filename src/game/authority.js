// Host-authoritative match state. Runs inside a Web Worker on the hosting peer; designed so the
// same class can later run on a dedicated server (it only consumes commands and emits snapshots).
import {
  DT, WEAPONS, PLAYER, SLOTS, makePlayer, resetLife, simulate, spawns, navPoints, pickups, PICKUP, clamp,
  rayWorld, rayPlayers, eyePosition, forward, capsuleClear, aimYaw, aimPitch,
} from './world.js'
import { sanitizeName } from './protocol.js'

export const MATCH_SECONDS = 300, MAX_PLAYERS = 12, KILL_LIMIT = 30, RESPAWN_SECONDS = 3, PROTECT_SECONDS = 2.5
export const MAX_REWIND = 0.45         // hard cap on lag-compensation rewind (s) — supports ~200 ms RTT at max interp
export const INTERP_DELAY = 0.1        // base delay at which clients render remote players (s)
export const INTERP_MAX = 0.2          // the client's adaptive delay never exceeds this
export const SPAWN_OCCUPIED = 1.6      // a living player this close makes a spawn unusable (m)
// Input credit: one command per tick accrues; up to 1 s of owed commands may catch up after a
// hiccup (max 8 per tick), so long-run rate can never exceed real time (no speed hacks).
const QUEUE_LIMIT = 40, BUDGET_CAP = 60, MAX_CMDS_PER_TICK = 8

const r3 = v => Math.round(v * 1000) / 1000
const randomId = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4)
const SPAWN_CLEAR = spawns.map(s => capsuleClear(s[0], s[1], s[2]))

export function sanitizeCommand(raw, last) {
  if (!raw || typeof raw !== 'object') return null
  const seq = Number(raw.seq)
  if (!Number.isInteger(seq) || seq <= last) return null
  const cmd = { seq }
  for (const k of ['w', 's', 'a', 'd', 'sprint', 'crouch', 'jump', 'fire', 'aim', 'reload']) cmd[k] = raw[k] === true
  cmd.yaw = Number.isFinite(raw.yaw) ? raw.yaw % (Math.PI * 2) : undefined
  cmd.pitch = Number.isFinite(raw.pitch) ? clamp(raw.pitch, -1.5, 1.5) : undefined
  cmd.slot = Number.isInteger(raw.slot) && raw.slot >= 0 && raw.slot < SLOTS ? raw.slot : 0
  cmd.viewTime = Number.isFinite(raw.viewTime) ? raw.viewTime : undefined
  return cmd
}

export class Authority {
  constructor() {
    this.sessionId = randomId()   // distinguishes rooms/hosts even when round numbers match
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
    this.spawnUsed = spawns.map(() => -100)
    this.pickupState = pickups.map(() => ({ ready: true, t: 0 }))
  }

  event(type, data = {}) {
    const e = { type, ...data, eventId: ++this.eventId }
    this.events.push(e)
    return e
  }

  add(id, name, bot = false) {
    if (this.players.has(id)) { this.setConnected(id, true); return this.players.get(id) }
    if (this.players.size >= MAX_PLAYERS) return null
    const p = makePlayer(id, sanitizeName(name), this.colorCursor++)
    p.bot = bot
    p.queue = []
    p.budget = 4
    p.rtt = 0
    p.connected = true
    if (bot) p.ai = { target: null, wander: null, seen: 0, strafe: 1, strafeT: 0, lastPos: [p.x, p.z], stuckT: 0, losT: 0, visible: false, skill: 0.55 + Math.random() * 0.3 }
    this.players.set(id, p)
    this.place(p, this.chooseSpawn(p))
    if (this.phase === 'playing' || this.phase === 'countdown') p.protect = PROTECT_SECONDS
    this.event('join', { id, name: p.name })
    return p
  }

  remove(id) {
    const p = this.players.get(id)
    if (p) this.event('leave', { id, name: p.name })
    this.players.delete(id)
  }

  // Reconnect grace: a dropped player stays in the match (frozen, untargetable) until removed.
  setConnected(id, connected) {
    const p = this.players.get(id)
    if (!p || p.connected === connected) return
    p.connected = connected
    p.queue.length = 0
    p.vx = p.vz = 0
    this.event(connected ? 'reconnect' : 'dropped', { id, name: p.name })
  }

  setRtt(id, ms) {
    const p = this.players.get(id)
    if (p && Number.isFinite(ms)) p.rtt = clamp(ms, 0, 1000)
  }

  // Commands from a client (or the host's own input). Out-of-order / duplicate seqs are dropped,
  // so redundant retransmissions are processed exactly once.
  queue(id, cmds, ping) {
    const p = this.players.get(id)
    if (!p || p.bot || !Array.isArray(cmds)) return 0
    if (Number.isFinite(ping)) p.ping = clamp(Math.round(ping), 0, 999)
    let accepted = 0
    for (const raw of cmds.slice(0, QUEUE_LIMIT)) {
      const last = p.queue.length ? p.queue[p.queue.length - 1].seq : p.ack
      const cmd = sanitizeCommand(raw, last)
      if (cmd) { p.queue.push(cmd); accepted++ }
    }
    if (p.queue.length > QUEUE_LIMIT) p.queue.splice(0, p.queue.length - QUEUE_LIMIT)
    return accepted
  }

  input(id, raw) {
    const p = this.players.get(id)
    if (!p) return
    this.queue(id, [{ ...raw, seq: (p.queue.length ? p.queue[p.queue.length - 1].seq : p.ack) + 1 }])
  }

  // ------------------------------------------------------------------------------------ spawning
  // Scores every configured spawn: must be geometrically clear and not occupied; prefers distance
  // from living players, spawns no enemy can currently see, and spawns not used a moment ago.
  // Falls back to a ring search around the least-contested spawn when every spawn is taken.
  chooseSpawn(p, occupants = null) {
    if (!occupants) occupants = [...this.players.values()].filter(q => q !== p && q.hp > 0 && q.connected !== false && q.placed !== false)
    let best = -1, bestScore = -Infinity, fallback = 0, fallbackDist = -1
    spawns.forEach((s, i) => {
      if (!SPAWN_CLEAR[i]) return
      let nearest = 1000
      for (const q of occupants) nearest = Math.min(nearest, Math.hypot(s[0] - q.x, s[1] - q.y, s[2] - q.z))
      if (nearest > fallbackDist) { fallbackDist = nearest; fallback = i }
      if (nearest < SPAWN_OCCUPIED) return
      let score = Math.min(nearest, 40)
      const head = { x: s[0], y: s[1] + 1.5, z: s[2] }
      for (const q of occupants) {
        const eye = { x: q.x, y: q.y + (q.height || PLAYER.height) - PLAYER.eye, z: q.z }
        const dx = head.x - eye.x, dy = head.y - eye.y, dz = head.z - eye.z, d = Math.hypot(dx, dy, dz)
        if (d > 55 || d < 0.01) continue
        if (rayWorld(eye, { x: dx / d, y: dy / d, z: dz / d }, d).t >= d - 0.3) score -= 18
      }
      if (this.time - this.spawnUsed[i] < 4) score -= 10
      score += Math.random() * 3
      if (score > bestScore) { bestScore = score; best = i }
    })
    if (best >= 0) {
      const s = spawns[best]
      this.spawnUsed[best] = this.time
      return { x: s[0], y: s[1], z: s[2], yaw: Math.atan2(s[0], s[2]) }
    }
    const base = spawns[fallback]
    for (const r of [1.8, 2.6, 3.4, 4.5, 6]) {
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * Math.PI * 2, x = base[0] + Math.cos(a) * r, z = base[2] + Math.sin(a) * r
        if (!capsuleClear(x, base[1], z)) continue
        if (occupants.some(q => Math.hypot(x - q.x, base[1] - q.y, z - q.z) < SPAWN_OCCUPIED)) continue
        return { x, y: base[1], z, yaw: Math.atan2(x, z) }
      }
    }
    return { x: base[0], y: base[1], z: base[2], yaw: Math.atan2(base[0], base[2]) }
  }

  place(p, s) {
    resetLife(p)
    Object.assign(p, { x: s.x, y: s.y, z: s.z, yaw: s.yaw, pitch: 0 })
  }

  start() {
    if (!this.players.size) return
    this.phase = 'countdown'
    this.countdown = 3
    this.timer = MATCH_SECONDS
    this.round++
    this.spawnUsed.fill(-100)
    this.pickupState.forEach(s => { s.ready = true; s.t = 0 })
    const placed = []
    for (const p of this.players.values()) {
      Object.assign(p, { kills: 0, deaths: 0, score: 0, streak: 0, protect: 3 })
      this.place(p, this.chooseSpawn(p, placed))
      placed.push(p)
    }
    this.history.length = 0
    this.event('start', { round: this.round })
  }

  returnToLobby() {
    this.phase = 'lobby'
    this.countdown = 0
    for (const p of this.players.values()) { p.queue.length = 0; if (p.hp <= 0) this.place(p, this.chooseSpawn(p)) }
    this.event('lobby', { round: this.round })
  }

  respawn(p, announce = true) {
    p.placed = false
    const s = this.chooseSpawn(p)
    p.placed = true
    this.place(p, s)
    p.protect = PROTECT_SECONDS
    if (announce) this.event('respawn', { id: p.id, x: r3(p.x), y: r3(p.y), z: r3(p.z) })
  }

  // ------------------------------------------------------------------------------------ combat
  // How far back a shooter's view time may rewind. A client sees others (down-latency + interp)
  // behind host time and its shot arrives up-latency later, so the legitimate rewind is the
  // host-measured RTT + interpolation delay (+ jitter margin), never more than MAX_REWIND.
  rewindWindow(p) { return clamp((p.rtt || 0) / 1000 + INTERP_MAX + 0.05, 0.05, MAX_REWIND) }

  rewind(q, viewTime, window = MAX_REWIND) {
    const now = { x: q.x, y: q.y, z: q.z, height: q.height, id: q.id, ref: q }
    if (!Number.isFinite(viewTime) || !this.history.length) return now
    const t = clamp(viewTime, this.time - window, this.time)
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

  targets(p, viewTime) {
    const w = this.rewindWindow(p), poses = []
    for (const q of this.players.values()) if (q !== p && q.hp > 0 && q.connected !== false) poses.push(this.rewind(q, viewTime, w))
    return poses
  }

  resolveShot(p, ev, viewTime) {
    p.protect = 0
    const W = WEAPONS[p.weapon]
    const wall = rayWorld(ev.origin, ev.dir, W.range)
    const hit = rayPlayers(ev.origin, ev.dir, wall.t, this.targets(p, viewTime))
    const t = hit.target ? hit.t : wall.t
    const point = { x: r3(ev.origin.x + ev.dir.x * t), y: r3(ev.origin.y + ev.dir.y * t), z: r3(ev.origin.z + ev.dir.z * t) }
    const target = hit.target?.ref
    const blocked = target && target.protect > 0
    this.event('shot', {
      id: p.id, w: p.weapon, o: { x: r3(ev.origin.x), y: r3(ev.origin.y), z: r3(ev.origin.z) }, point,
      n: !target && wall.normal ? wall.normal : null, hit: target && !blocked ? target.id : null, part: target ? hit.part : null,
    })
    if (target && !blocked) this.damage(target, p, W.damage[hit.part], hit.part)
  }

  // Knife: a short fan of rays so a swing that is slightly off-centre still connects.
  resolveMelee(p, ev, viewTime) {
    p.protect = 0
    const W = WEAPONS[2], poses = this.targets(p, viewTime)
    let best = null
    for (const [dy, dp] of [[0, 0], [0.16, 0], [-0.16, 0], [0, -0.2], [0, 0.14]]) {
      const dir = forward(aimYaw(p) + dy, aimPitch(p) + dp)
      const wall = rayWorld(ev.origin, dir, W.range)
      const hit = rayPlayers(ev.origin, dir, wall.t, poses)
      if (hit.target && (!best || hit.t < best.t)) best = hit
    }
    const target = best?.target?.ref
    const blocked = target && target.protect > 0
    this.event('melee', { id: p.id, hit: target && !blocked ? target.id : null, part: best?.part || null })
    if (target && !blocked) this.damage(target, p, W.damage[best.part], best.part)
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
    if (ev.fired) ev.melee ? this.resolveMelee(p, ev, cmd.viewTime) : this.resolveShot(p, ev, cmd.viewTime)
    if (ev.reloadStart) this.event('reload', { id: p.id, w: p.weapon })
    if (p.y < -12) this.damage(p, null, 999, 'body')
  }

  updatePickups(dt) {
    pickups.forEach((pk, i) => {
      const st = this.pickupState[i]
      if (!st.ready) { st.t -= dt; if (st.t <= 0) st.ready = true; return }
      for (const p of this.players.values()) {
        if (p.hp <= 0 || p.connected === false) continue
        if (Math.hypot(p.x - pk.x, p.z - pk.z) > PICKUP.radius || Math.abs(p.y - pk.y) > 1.6) continue
        const needs = WEAPONS.some((w, k) => !w.melee && (p.reserve[k] < w.reserve || p.ammo[k] < w.mag))
        if (!needs) continue
        WEAPONS.forEach((w, k) => { if (!w.melee) p.reserve[k] = Math.max(p.reserve[k], w.reserve) })
        st.ready = false
        st.t = PICKUP.respawn
        this.event('pickup', { id: p.id, pickup: i })
        break
      }
    })
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
        p.budget = Math.min(p.budget + 1, BUDGET_CAP)
        for (let n = 0; n < MAX_CMDS_PER_TICK && p.queue.length && p.budget >= 1; n++) { p.budget--; this.apply(p, p.queue.shift()) }
      }
      if (this.phase !== 'playing') continue
      p.protect = Math.max(0, p.protect - dt)
      if (p.hp <= 0) { p.respawn -= dt; if (p.respawn <= 0) this.respawn(p) }
    }
    if (this.phase === 'playing') this.updatePickups(dt)
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
      // Out of rifle ammo → pistol → knife (rush in and swing).
      cmd.slot = p.ammo[0] + p.reserve[0] > 0 ? 0 : p.ammo[1] + p.reserve[1] > 0 ? 1 : 2
      cmd.aim = dist > 14 && cmd.slot !== 2
      cmd.fire = ai.seen > 0.45 - ai.skill * 0.2 && error < 0.08 && Math.sin(this.time * 2.1 + p.seed) > -0.55
      if (cmd.slot === 2) { cmd.w = true; cmd.s = false; cmd.sprint = dist > 4; cmd.fire = dist < 2 && error < 0.3 }
      cmd.reload = cmd.slot !== 2 && p.ammo[cmd.slot] === 0
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
    cmd.slot = p.ammo[0] + p.reserve[0] > 0 ? 0 : p.ammo[1] + p.reserve[1] > 0 ? 1 : 2
    cmd.reload = cmd.slot === 0 && p.ammo[0] < 15 && p.reserve[0] > 0
    return cmd
  }

  // Full-precision state: the wire encoder rounds other players, but each client receives its own
  // entry exactly so prediction replays are bit-identical to the host simulation.
  snapshot() {
    const players = []
    for (const p of this.players.values()) {
      players.push({
        id: p.id, name: p.name, bot: !!p.bot, color: p.color,
        x: p.x, y: p.y, z: p.z, vx: p.vx, vy: p.vy, vz: p.vz, yaw: p.yaw, pitch: p.pitch,
        ground: p.ground, height: p.height, crouched: p.crouched, slide: p.slide, slideCd: p.slideCd, crouchHeld: p.crouchHeld,
        sprinting: p.sprinting, aiming: p.aiming, jumpBuffer: p.jumpBuffer || 0, recoil: p.recoil || 0, recoilYaw: p.recoilYaw || 0,
        hp: p.hp, armor: p.armor, weapon: p.weapon, ammo: [...p.ammo], reserve: [...p.reserve],
        reload: p.reload, cooldown: p.cooldown, swap: p.swap, bloom: p.bloom, shots: p.shots, fireHeld: p.fireHeld, seed: p.seed,
        kills: p.kills, deaths: p.deaths, score: p.score, streak: p.streak, protect: p.protect, respawn: p.respawn, ack: p.ack,
        ping: p.bot ? 0 : Math.round(p.rtt || p.ping || 0), connected: p.connected !== false,
      })
    }
    let pk = 0
    this.pickupState.forEach((s, i) => { if (s.ready) pk |= 1 << i })
    return {
      sid: this.sessionId, t: r3(this.time), phase: this.phase, timer: r3(this.timer), countdown: r3(this.countdown), round: this.round,
      limit: KILL_LIMIT, pickups: pk, players, events: this.events.splice(0),
    }
  }
}

export { PLAYER }
