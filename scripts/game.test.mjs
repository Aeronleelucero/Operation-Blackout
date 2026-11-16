import { test } from 'node:test'
import assert from 'node:assert/strict'
import { Authority, KILL_LIMIT } from '../src/game/authority.js'
import { makePlayer, simulate, wallDistance, boxes, ramps, spawns, navPoints, pickups, PLAYER, DT, WEAPONS, rayWorld, resetLife, capsuleClear } from '../src/game/world.js'
import { SPAWN_OCCUPIED, sanitizeCommand } from '../src/game/authority.js'

const run = (p, cmd, ticks) => { for (let i = 0; i < ticks; i++) simulate(p, cmd, DT) }
const at = (p, x, y, z) => Object.assign(p, { x, y, z, vx: 0, vy: 0, vz: 0, ground: true })
const inside = (x, y, z) => boxes.some(b => Math.abs(x - b.x) < b.w / 2 + PLAYER.radius - 0.05 && Math.abs(z - b.z) < b.d / 2 + PLAYER.radius - 0.05 && y + 0.1 < b.y + b.h / 2 && y + 1.7 > b.y - b.h / 2)

test('map is a real arena: hundreds of solids, ramps, 12 clear spawns, clear nav points', () => {
  assert.ok(boxes.length > 150, `boxes: ${boxes.length}`)
  assert.equal(ramps.length, 2)
  assert.equal(spawns.length, 12)
  for (const s of spawns) assert.ok(!inside(s[0], s[1], s[2]), `spawn ${s} is inside geometry`)
  for (const [x, z] of navPoints) assert.ok(!inside(x, 0, z), `nav point ${x},${z} is inside geometry`)
})

test('capsule collision stops at walls and crates and never tunnels at high speed', () => {
  const p = makePlayer('a', 'A')
  at(p, -28, 0, -24) // south of the NW warehouse south wall (z=-27..-26.4), between stairs and door
  run(p, { w: true, yaw: 0 }, 120)
  assert.ok(p.z > -27 + PLAYER.radius - 0.01, `warehouse wall blocks: z=${p.z}`)
  at(p, -36.6, 0, -2) // walk north into crate at (-36.6,-4.6)
  run(p, { w: true, yaw: 0 }, 90)
  assert.ok(p.z > -4.6 + 0.6 + PLAYER.radius - 0.02, `crate blocks: z=${p.z}`)
  at(p, 0, 0, -20); p.vz = -60 // absurd speed toward the pump house
  run(p, { yaw: 0 }, 60)
  assert.ok(!inside(p.x, p.y, p.z), 'no tunnelling')
})

test('stairs reach the warehouse roof and the ramp reaches the tower roof', () => {
  const p = makePlayer('a', 'A')
  at(p, -40, 0, -25.8)
  for (let i = 0; i < 120 && p.x < -31.1; i++) simulate(p, { d: true, yaw: 0 }, DT) // strafe right (+x) up the stairs
  assert.ok(p.y > 5.5, `stairs climbed: y=${p.y}`)
  run(p, { w: true, yaw: 0 }, 40) // step north onto the roof through the parapet gap
  assert.ok(p.y > 5.5 && p.z < -27, `onto roof: y=${p.y} z=${p.z}`)
  at(p, 31, 0, -9)
  run(p, { w: true, yaw: 0 }, 160)
  assert.ok(p.y > 5.5 && p.z < -27, `ramp climbed: y=${p.y} z=${p.z}`)
})

test('jump, crate climbing, crouch, slide boost and air-strafe momentum', () => {
  const p = makePlayer('a', 'A')
  at(p, -5.1, 0, 5); // south of crate (-5.1, 2.4)
  run(p, { w: true, jump: true, yaw: 0 }, 60)
  assert.ok(p.y >= 1.19, `jumped onto crate: y=${p.y}`)
  at(p, 20, 0, 0)
  simulate(p, { jump: true }, DT); assert.ok(p.vy > 0 && !p.ground)
  run(p, {}, 120); assert.ok(p.ground && Math.abs(p.y) < 1e-6)
  simulate(p, { crouch: true }, DT); assert.equal(p.height, PLAYER.crouch)
  run(p, {}, 2); assert.equal(p.height, PLAYER.height)
  at(p, 20, 0, 10)
  run(p, { w: true, sprint: true, yaw: 0 }, 60)
  const before = Math.hypot(p.vx, p.vz)
  simulate(p, { w: true, crouch: true, yaw: 0 }, DT)
  assert.ok(p.slide > 0 && Math.hypot(p.vx, p.vz) > before + 2, 'slide boosts')
  // Air strafing: holding a strafe key while turning gains speed beyond walk speed.
  at(p, 20, 0, 0); p.vz = -8.6
  for (let i = 0; i < 40; i++) simulate(p, { a: true, jump: true, yaw: Math.atan2(-p.vx, -p.vz) }, DT)
  assert.ok(Math.hypot(p.vx, p.vz) > 8.9, `air strafe gain: ${Math.hypot(p.vx, p.vz)}`)
})

function duel() {
  const a = new Authority()
  a.add('host', 'Host'); a.add('guest', 'Guest')
  a.start()
  for (let i = 0; i < 181; i++) a.tick(DT)
  const p = a.players.get('host'), q = a.players.get('guest')
  Object.assign(p, { x: 0, y: 0, z: -20, yaw: 0, pitch: 0, protect: 0, vx: 0, vz: 0 })
  Object.assign(q, { x: 0, y: 0, z: -26, protect: 0, vx: 0, vz: 0 })
  let seq = 100
  const send = (id, cmd) => { a.queue(id, [{ ...cmd, seq: ++seq }]); a.tick(DT) }
  return { a, p, q, send }
}

test('authoritative fire validates ammo/cooldown, awards kills, respawns with protection', () => {
  const { a, p, q, send } = duel()
  send('host', { yaw: 0, pitch: -0.07, aim: true, fire: true })
  assert.ok(q.hp < 100, 'hit')
  assert.equal(p.ammo[0], 29)
  const first = q.hp
  send('host', { yaw: 0, pitch: -0.07, aim: true, fire: true })
  assert.equal(q.hp, first, 'fire rate cannot be bypassed')
  for (let i = 0; i < 80 && q.hp > 0; i++) send('host', { yaw: 0, pitch: -0.07, aim: true, fire: true })
  assert.equal(q.hp, 0); assert.equal(p.kills, 1); assert.equal(q.deaths, 1); assert.ok(p.score >= 100)
  for (let i = 0; i < 200; i++) send('host', {})
  assert.equal(q.hp, 100); assert.ok(q.protect > 0)
})

test('headshots deal more damage than body shots', () => {
  const { p, q, send } = duel()
  const eyeY = p.y + p.height - PLAYER.eye
  send('host', { yaw: 0, pitch: Math.atan2(q.y + 1.62 - eyeY, 6), aim: true, fire: true })
  const head = 100 - q.hp
  q.hp = 100; q.armor = 50; p.cooldown = 0
  for (let i = 0; i < 8; i++) send('host', {})
  send('host', { yaw: 0, pitch: Math.atan2(q.y + 1.1 - eyeY, 6), aim: true, fire: true })
  const body = 100 - q.hp
  assert.ok(head > body * 2, `head ${head} vs body ${body}`)
})

test('walls and spawn protection block damage', () => {
  const { a, p, q, send } = duel()
  q.protect = 2
  send('host', { yaw: 0, pitch: -0.07, aim: true, fire: true })
  assert.equal(q.hp, 100)
  q.protect = 0
  Object.assign(p, { x: -28, z: -24 }); Object.assign(q, { x: -28, z: -30 })
  for (let i = 0; i < 10; i++) send('host', { yaw: 0, pitch: 0, aim: true, fire: true })
  assert.equal(q.hp, 100, 'warehouse wall stops bullets')
  assert.ok(wallDistance({ x: -28, y: 1.6, z: -24 }, { x: 0, y: 0, z: -1 }) < 3.1)
})

test('lag compensation rewinds to the shooter view time, bounded by measured latency', () => {
  const { a, p, q } = duel()
  a.setRtt('host', 100) // window = RTT 0.1 + max interp 0.2 + margin 0.05 = 0.35 s
  let seq = 500
  const t0 = a.time
  for (let i = 0; i < 15; i++) { a.queue('guest', [{ seq: ++seq, d: true, yaw: 0 }]); a.tick(DT) }
  assert.ok(Math.abs(q.x) > 1.5, 'guest moved')
  const viewTime = t0 + 2 * DT // shooter saw the guest near its old position
  assert.ok(Math.abs(a.rewind(q, viewTime).x) < 0.5)
  a.queue('host', [{ seq: 9000, yaw: 0, pitch: -0.07, aim: true, fire: true, viewTime }])
  a.tick(DT)
  assert.ok(q.hp < 100, 'shot at the rewound position hits')
})

test('a zero-latency shooter cannot claim an old view time (rewind is clamped)', () => {
  const { a, p, q } = duel()
  let seq = 500
  const t0 = a.time
  for (let i = 0; i < 40; i++) { a.queue('guest', [{ seq: ++seq, d: true, yaw: 0 }]); a.tick(DT) }
  assert.ok(Math.abs(a.rewindWindow(p) - 0.25) < 1e-9, 'zero RTT: only the max interpolation delay + margin')
  const pose = a.rewind(q, t0, a.rewindWindow(p))
  assert.ok(Math.abs(pose.x) > 2, `rewind limited to 250 ms: x=${pose.x}`)
  a.queue('host', [{ seq: 9000, yaw: 0, pitch: -0.07, aim: true, fire: true, viewTime: t0 }])
  a.tick(DT)
  assert.equal(q.hp, 100, 'shooting where the target was 0.67 s ago misses')
})

test('client prediction replays to the same state as the host', () => {
  const host = makePlayer('a', 'A'), client = makePlayer('a', 'A')
  const cmds = []
  for (let i = 0; i < 240; i++) cmds.push({ w: i % 90 < 60, d: i % 50 < 20, jump: i % 70 === 10, crouch: i > 150 && i < 170, sprint: i < 100, yaw: i * 0.01, fire: i % 3 === 0 })
  for (const c of cmds) simulate(host, c, DT)
  for (const c of cmds) simulate(client, c, DT)
  for (const k of ['x', 'y', 'z', 'vx', 'vy', 'vz', 'shots', 'reload']) assert.equal(client[k], host[k], k)
})

test('reload, late join, kill limit, match end and restart share canonical state', () => {
  const { a, p, send } = duel()
  p.ammo[0] = 5
  send('host', { reload: true })
  assert.ok(p.reload > 2)
  for (let i = 0; i < 140; i++) send('host', {})
  assert.equal(p.ammo[0], 30); assert.equal(p.reserve[0], 95)
  a.add('late', 'Late')
  const s = a.snapshot()
  assert.equal(s.players.length, 3); assert.equal(s.phase, 'playing')
  assert.ok(a.players.get('late').protect > 0, 'late joiner spawns protected')
  p.kills = KILL_LIMIT - 1
  a.damage(a.players.get('late'), p, 999, 'body')
  assert.equal(a.phase, 'ended')
  assert.ok(a.events.some(e => e.type === 'end' && e.winner === 'Host'))
  a.start(); assert.equal(a.phase, 'countdown'); assert.equal(a.players.get('host').kills, 0)
  a.remove('late'); assert.equal(a.players.size, 2)
})

test('malformed commands cannot inject health, position, ammo, replay seqs or invalid angles', () => {
  const { a, p, send } = duel()
  const x = p.x
  send('host', { x: 999, hp: 999, ammo: 999, yaw: NaN, pitch: Infinity, fire: 'true' })
  assert.equal(p.x, x); assert.equal(p.hp, 100); assert.equal(p.ammo[0], 30); assert.ok(Number.isFinite(p.yaw + p.pitch))
  const ack = p.ack
  a.queue('host', [{ seq: ack, fire: true }, { seq: ack - 5, fire: true }, 'junk', null])
  a.tick(DT)
  assert.equal(p.ammo[0], 30, 'stale sequence numbers are ignored')
  // Flooding commands cannot speed up the simulation beyond the per-tick budget.
  const seq0 = p.ack
  a.queue('host', Array.from({ length: 20 }, (_, i) => ({ seq: seq0 + 1 + i, w: true, yaw: 0 })))
  a.tick(DT)
  assert.ok(p.ack - seq0 <= 10)
})

test('practice bots move, fight and never leave the arena', () => {
  const a = new Authority()
  a.add('local', 'Me')
  for (let i = 0; i < 5; i++) a.add('bot-' + i, 'Bot' + i, true)
  a.start()
  for (let i = 0; i < 60 * 40; i++) a.tick(DT)
  const bots = [...a.players.values()].filter(p => p.bot)
  assert.ok(bots.some(b => b.kills > 0) || bots.some(b => b.deaths > 0), 'bots engage each other')
  for (const b of bots) assert.ok(Math.abs(b.x) < 44 && Math.abs(b.z) < 44 && Number.isFinite(b.y))
})

test('ray casts hit ramps and report surface normals', () => {
  const hit = rayWorld({ x: 31, y: 1, z: 0 }, { x: 0, y: 0, z: -1 })
  assert.ok(hit.t > 10 && hit.t < 30, `ramp hit at ${hit.t}`)
  assert.ok(hit.normal && hit.normal.y > 0.5)
})

// ------------------------------------------------------------------------- Phase 1 regressions
const dist = (p, q) => Math.hypot(p.x - q.x, p.y - q.y, p.z - q.z)

test('BUG 1: a replacement player never spawns inside a remaining player (lobby and in-match)', () => {
  for (const phase of ['lobby', 'playing']) {
    for (let trial = 0; trial < 30; trial++) {
      const a = new Authority()
      a.add('a', 'A'); a.add('b', 'B')
      if (phase === 'playing') { a.start(); for (let i = 0; i < 190; i++) a.tick(DT) }
      a.remove('a')
      const c = a.add('c', 'C')
      const b = a.players.get('b')
      assert.ok(dist(b, c) >= SPAWN_OCCUPIED, `${phase} trial ${trial}: replacement spawned ${dist(b, c).toFixed(2)} m from B`)
      assert.ok(capsuleClear(c.x, c.y, c.z), 'spawn is geometrically clear')
    }
  }
})

test('BUG 1: twelve players (with churn) all get distinct, clear spawns; fallback when all are contested', () => {
  const a = new Authority()
  for (let i = 0; i < 12; i++) a.add('p' + i, 'P' + i)
  for (let round = 0; round < 20; round++) { a.remove('p' + (round % 12)); a.add('p' + (round % 12), 'P') }
  a.start()
  const ps = [...a.players.values()]
  for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) assert.ok(dist(ps[i], ps[j]) >= SPAWN_OCCUPIED, 'start spawns overlap')
  // Occupy every spawn point, then ask for one more: the ring fallback must find a free spot.
  const occupants = spawns.map(s => ({ x: s[0], y: s[1], z: s[2] }))
  const extra = a.chooseSpawn({ id: 'x' }, occupants)
  assert.ok(occupants.every(o => dist(o, extra) >= SPAWN_OCCUPIED), 'fallback avoids occupied spawns')
  assert.ok(capsuleClear(extra.x, extra.y, extra.z))
})

test('BUG 1: respawn prefers spawns the enemy cannot see and that are far away', () => {
  const a = new Authority()
  a.add('a', 'A'); a.add('b', 'B'); a.start(); for (let i = 0; i < 190; i++) a.tick(DT)
  const b = a.players.get('b'), A = a.players.get('a')
  Object.assign(b, { x: spawns[0][0], y: spawns[0][1], z: spawns[0][2] + 2 })
  for (let i = 0; i < 20; i++) { a.respawn(A, false); assert.ok(dist(A, b) > 10, `respawned ${dist(A, b).toFixed(1)} m from the enemy`) }
})

test('BUG 2: ammunition never goes negative and empty guns still leave the knife', () => {
  const p = makePlayer('a', 'A')
  for (let i = 0; i < 9000; i++) simulate(p, { fire: i % 2 === 0, reload: i % 997 === 0, slot: i < 4000 ? 0 : 1 }, DT) // edges for the semi-auto pistol
  for (let k = 0; k < 2; k++) { assert.ok(p.ammo[k] >= 0 && p.reserve[k] >= 0); assert.ok(p.ammo[k] <= WEAPONS[k].mag) }
  assert.equal(p.ammo[0] + p.reserve[0] + p.ammo[1] + p.reserve[1], 0, 'both firearms are dry')
  simulate(p, { slot: 2 }, DT)
  for (let i = 0; i < 30; i++) simulate(p, { slot: 2 }, DT) // swap time
  const ev = simulate(p, { slot: 2, fire: true }, DT)
  assert.ok(ev.fired && ev.melee, 'knife swings with no ammunition')
})

test('BUG 2: knife damages on the authority, respects range, cooldown and walls', () => {
  const { a, p, q, send } = duel()
  Object.assign(q, { x: 0, z: -21.6 }) // 1.6 m in front
  for (let i = 0; i < 30; i++) send('host', { slot: 2, yaw: 0, pitch: -0.2 })
  send('host', { slot: 2, yaw: 0, pitch: -0.2, fire: true })
  const after = q.hp
  assert.ok(after < 100, 'knife hit')
  send('host', { slot: 2, yaw: 0, pitch: -0.2, fire: true })
  assert.equal(q.hp, after, 'swing cooldown enforced')
  Object.assign(q, { z: -26, hp: 100, armor: 50 })
  for (let i = 0; i < 40; i++) send('host', { slot: 2, yaw: 0, pitch: -0.2, fire: true })
  assert.equal(q.hp, 100, 'out of range (6 m)')
})

test('BUG 2: ammo pickups refill reserves on the authority and then cool down', () => {
  const { a, p, send } = duel()
  p.reserve = [0, 0, 0]; p.ammo = [0, 0, 0]
  const pk = pickups[0]
  Object.assign(p, { x: pk.x, y: pk.y, z: pk.z })
  send('host', {})
  assert.equal(p.reserve[0], WEAPONS[0].reserve); assert.equal(p.reserve[1], WEAPONS[1].reserve)
  assert.equal(a.pickupState[0].ready, false)
  assert.ok(a.snapshot().pickups % 2 === 0, 'snapshot marks the pickup as taken')
  p.reserve[0] = 0
  send('host', {})
  assert.equal(p.reserve[0], 0, 'cooling down')
})

test('BUG 3: respawn clears crouch, slide, latches, sprint, recoil and weapon state', () => {
  const { a, p, q, send } = duel()
  Object.assign(q, { height: PLAYER.crouch, crouched: true, slide: 0.5, slideCd: 1, crouchHeld: true, jumpBuffer: 0.1, fireHeld: true, sprinting: true, aiming: true,
    vx: 9, vy: 4, vz: -3, ground: false, reload: 1, swap: 0.3, cooldown: 0.4, recoil: 0.2, recoilYaw: 0.05, weapon: 1 })
  a.damage(q, p, 999, 'head')
  for (let i = 0; i < 200; i++) send('host', {})
  assert.equal(q.hp, 100)
  for (const k of ['slide', 'slideCd', 'jumpBuffer', 'vx', 'vy', 'vz', 'reload', 'swap', 'cooldown', 'recoil', 'recoilYaw', 'weapon']) assert.equal(q[k], 0, k)
  for (const k of ['crouched', 'crouchHeld', 'fireHeld', 'sprinting', 'aiming']) assert.equal(q[k], false, k)
  assert.equal(q.height, PLAYER.height); assert.equal(q.ground, true); assert.ok(q.protect > 0)
})

test('BUG 4: one-tick jump/fire/reload taps are processed even when more commands arrive first', () => {
  const { a, p } = duel()
  p.ammo[0] = 10
  // Five commands arrive in one packet before the host ticks: the taps are in the middle.
  const base = p.ack
  a.queue('host', [{ seq: base + 1 }, { seq: base + 2, jump: true }, { seq: base + 3 }, { seq: base + 4, fire: true, yaw: 0, pitch: 0.5 }, { seq: base + 5 }])
  for (let i = 0; i < 5; i++) a.tick(DT)
  assert.ok(p.y > 0 || p.vy !== 0 || !p.ground, 'jump processed')
  assert.equal(p.ammo[0], 9, 'exactly one shot fired')
  a.queue('host', [{ seq: base + 6, reload: true }, { seq: base + 7 }])
  a.tick(DT); a.tick(DT)
  assert.ok(p.reload > 0, 'reload tap processed')
})

test('BUG 4: redundantly retransmitted commands are applied exactly once', () => {
  const { a, p } = duel()
  p.ammo[0] = 10
  const base = p.ack
  const window = [{ seq: base + 1, fire: true, yaw: 0, pitch: 0.5 }, { seq: base + 2 }]
  a.queue('host', window); a.tick(DT); a.tick(DT)
  a.queue('host', window); a.queue('host', [...window, { seq: base + 3 }]); a.tick(DT); a.tick(DT)
  assert.equal(p.ammo[0], 9)
  assert.equal(p.ack, base + 3)
})

test('jump pressed just before landing is buffered, not lost', () => {
  const p = makePlayer('a', 'A')
  Object.assign(p, { x: 20, y: 0, z: 0, ground: true })
  simulate(p, { jump: true }, DT)
  let ticks = 0
  while (!(p.vy < 0 && p.y < 0.15) && ticks++ < 200) simulate(p, {}, DT)
  simulate(p, { jump: true }, DT) // tap while still airborne
  for (let i = 0; i < 6 && !p.ground; i++) simulate(p, {}, DT)
  for (let i = 0; i < 3; i++) simulate(p, {}, DT)
  assert.ok(p.y > 0.05 && p.vy > 0, 'buffered jump fired on landing')
})

test('recoil is authoritative: the host applies it even if a client never climbs its aim', () => {
  const { a, p, q, send } = duel()
  q.protect = 99
  const ys = []
  for (let i = 0; i < 90; i++) { a.events.length = 0; send('host', { yaw: 0, pitch: 0, fire: true }); const e = a.events.find(e => e.type === 'shot'); if (e) ys.push(e.point.y) }
  assert.ok(p.recoil > 0.05, `recoil accumulated: ${p.recoil}`)
  assert.ok(ys[ys.length - 1] > ys[0] + 0.3, 'later bullets climb although the command pitch never changed')
  for (let i = 0; i < 120; i++) send('host', { yaw: 0, pitch: 0 })
  assert.ok(p.recoil < 0.01, 'recoil recovers when not firing')
})

test('lobby return and rematch keep the room, reset the round', () => {
  const { a, p } = duel()
  p.kills = 5
  a.end(); assert.equal(a.phase, 'ended')
  const sid = a.sessionId, round = a.round
  a.returnToLobby()
  assert.equal(a.phase, 'lobby'); assert.equal(a.players.size, 2); assert.equal(a.sessionId, sid)
  a.start()
  assert.equal(a.round, round + 1); assert.equal(p.kills, 0); assert.equal(a.phase, 'countdown')
  assert.notEqual(new Authority().sessionId, sid, 'every room has its own session id')
})

test('reconnect grace keeps a dropped player but makes them untargetable', () => {
  const { a, p, q, send } = duel()
  a.setConnected('guest', false)
  for (let i = 0; i < 10; i++) send('host', { yaw: 0, pitch: -0.07, aim: true, fire: true })
  assert.equal(q.hp, 100)
  a.add('guest', 'Guest')
  assert.equal(q.connected, true); assert.equal(a.players.size, 2)
})

test('command sanitizer rejects bad slots and stale sequence numbers', () => {
  assert.equal(sanitizeCommand({ seq: 5, slot: 7 }, 0).slot, 0)
  assert.equal(sanitizeCommand({ seq: 5, slot: 2 }, 0).slot, 2)
  assert.equal(sanitizeCommand({ seq: 5 }, 5), null)
  assert.equal(sanitizeCommand({ seq: 1.5 }, 0), null)
})
