// Network-layer tests: wire protocol validation, prediction/interpolation, and a deterministic
// network simulator that runs the real Authority + client Predictor/Interpolator over links with
// latency, jitter, loss, bandwidth limits and outages.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { Authority, MAX_PLAYERS } from '../src/game/authority.js'
import { DT, PLAYER, eyePosition } from '../src/game/world.js'
import { Predictor, Interpolator } from '../src/game/prediction.js'
import {
  encodeCmd, decodeCmd, encodeSnapshot, parseClientMessage, parseHostMessage, RateLimiter, quantizeAngle, sanitizeName, MAX_CMDS_PER_MSG, CMD_REDUNDANCY,
} from '../src/game/protocol.js'

// ------------------------------------------------------------------------------- protocol
test('protocol: command encoding round-trips and malformed client messages are rejected', () => {
  const c = { seq: 42, w: true, d: true, jump: true, fire: true, yaw: quantizeAngle(1.23456), pitch: quantizeAngle(-0.2), slot: 2, viewTime: 12.345 }
  const back = decodeCmd(encodeCmd(c))
  for (const k of ['seq', 'w', 'd', 'jump', 'fire', 'yaw', 'pitch', 'slot', 'viewTime']) assert.equal(back[k], c[k], k)
  assert.equal(back.s, false)
  const bad = [
    null, 'x', 5, [], {}, { type: 'nope' }, { type: 'c' }, { type: 'c', c: [] }, { type: 'c', c: [[1, 2, 3]] },
    { type: 'c', c: [[1, 0, 0, 0, 9, 0]] },                      // slot out of range
    { type: 'c', c: [[0, 0, 0, 0, 0, 0]] },                      // seq 0
    { type: 'c', c: [[1, 99999, 0, 0, 0, 0]] },                  // unknown input bits
    { type: 'c', c: [[1, 0, 1.5, 0, 0, 0]] },                    // non-integer
    { type: 'c', c: Array.from({ length: MAX_CMDS_PER_MSG + 1 }, (_, i) => [i + 1, 0, 0, 0, 0, 0]) }, // too many
    { type: 'chat', text: 5 }, { type: 'chat', text: 'x'.repeat(1000) }, { type: 'ping', at: 'now' }, { type: 'pong' }, { type: 'c', c: 'oops' },
  ]
  for (const m of bad) assert.equal(parseClientMessage(m), null, JSON.stringify(m))
  assert.equal(parseClientMessage({ type: 'c', c: [encodeCmd(c)] }).cmds.length, 1)
  assert.equal(sanitizeName('  <b>Bad\u0000Name</b> that is far too long '), 'bBadName/b that is')
})

test('protocol: snapshots round-trip; malformed host messages are rejected', () => {
  const a = new Authority()
  a.add('h', 'Host'); a.add('g', 'Guest'); a.start()
  const snap = a.snapshot()
  const back = parseHostMessage(JSON.parse(JSON.stringify(encodeSnapshot(snap))))
  assert.equal(back.sid, snap.sid); assert.equal(back.phase, 'countdown'); assert.equal(back.players.length, 2)
  for (const k of ['id', 'name', 'x', 'y', 'z', 'ground', 'crouched', 'hp', 'ack', 'connected']) assert.deepEqual(back.players[0][k], snap.players[0][k], k)
  assert.deepEqual(back.players[0].ammo, snap.players[0].ammo)
  for (const m of [{ type: 's' }, { type: 's', sid: 'a', t: 1, ph: 9, p: [] }, { type: 's', sid: 'a', t: 1, ph: 0, p: [[1, 2]] },
    { type: 'ev', sid: 'a', list: [{ type: 'kill' }] }, { type: 'welcome' }, { type: 'chat', name: 'a', text: 'x'.repeat(500) }, { type: 'zzz' }])
    assert.equal(parseHostMessage(m), null, JSON.stringify(m))
})

test('rate limiter enforces sustained rate with a burst allowance', () => {
  const r = new RateLimiter(10, 5)
  let ok = 0
  for (let i = 0; i < 20; i++) if (r.allow(0)) ok++
  assert.equal(ok, 5)
  assert.ok(r.allow(150))   // 1.5 tokens refilled
  assert.ok(!r.allow(160))
})

// ------------------------------------------------------------------------------- interpolation / prediction units
test('interpolator ignores other sessions, duplicates and out-of-order snapshots', () => {
  const it = new Interpolator(0.1)
  const mk = (sid, t, x) => ({ sid, t, players: [{ id: 'a', x, y: 0, z: 0, vx: 0, vy: 0, vz: 0, yaw: 0, pitch: 0, hp: 100, height: 1.8, ground: true }] })
  assert.ok(it.push(mk('S1', 1.0, 0), 0))
  assert.ok(it.push(mk('S1', 1.1, 1), 0.1))
  assert.ok(!it.push(mk('S1', 1.05, 9), 0.12), 'out-of-order')
  assert.ok(!it.push(mk('S1', 1.1, 9), 0.12), 'duplicate')
  assert.ok(!it.push(mk('S2', 5.0, 9), 0.12), 'other session with a newer clock')
  assert.equal(it.sample('a', 1.05).x, 0.5)
  it.reset()
  assert.ok(it.push(mk('S2', 0.5, 3), 1), 'a reset interpolator accepts the new session')
})

test('interpolator extrapolates only briefly and never slides across a respawn', () => {
  const it = new Interpolator(0.1, 0.15)
  const mk = (t, x, vx) => ({ sid: 'S', t, players: [{ id: 'a', x, y: 0, z: 0, vx, vy: 0, vz: 0, yaw: 0, pitch: 0, hp: 100, height: 1.8, ground: true }] })
  it.push(mk(1, 0, 10), 0)
  assert.ok(Math.abs(it.sample('a', 1.1).x - 1) < 1e-9)
  assert.ok(Math.abs(it.sample('a', 2).x - 1.5) < 1e-9, 'capped at 150 ms of extrapolation')
  it.push(mk(1.2, 30, 0), 0.2) // teleport
  const mid = it.sample('a', 1.15).x
  assert.ok(mid === 0 || mid === 30, `no slide across the map: ${mid}`)
})

test('predictor reset clears pending inputs, stats and sequence state (no stale session data)', () => {
  const p = new Predictor()
  p.nextSeq(); p.nextSeq(); p.pending.push({ seq: 1 }, { seq: 2 }); p.me = { x: 1 }
  p.reset()
  assert.equal(p.seq, 0); assert.equal(p.pending.length, 0); assert.equal(p.me, null); assert.equal(p.stats.maxError, 0)
})

// ------------------------------------------------------------------------------- network simulator
function rng(seed) { return () => ((seed = (seed * 16807) % 2147483647) / 2147483647) }

// A one-way link. Unreliable links drop/reorder; reliable links only delay (in order).
class SimLink {
  constructor({ latency = 0.05, jitter = 0, loss = 0, bandwidth = Infinity, reliable = false, seed = 1, maxQueueBytes = 32 * 1024 }) {
    Object.assign(this, { latency, jitter, loss, bandwidth, reliable, maxQueueBytes })
    this.r = rng(seed); this.queue = []; this.busyUntil = 0; this.down = []; this.bytes = 0; this.dropped = 0; this.lastDeliver = 0
  }
  isDown(t) { return this.down.some(([a, b]) => t >= a && t < b) }
  send(msg, t, disposable = false) {
    const json = JSON.stringify(msg)
    const queued = this.queue.reduce((s, q) => s + q.size, 0)
    if (disposable && queued > this.maxQueueBytes) { this.dropped++; return } // superseded state is dropped, not queued
    this.bytes += json.length
    if (!this.reliable && (this.r() < this.loss || this.isDown(t))) return
    const serialize = json.length / this.bandwidth
    this.busyUntil = Math.max(this.busyUntil, t) + serialize
    let at = this.busyUntil + this.latency + (this.r() * 2 - 1) * this.jitter
    if (this.reliable) { if (this.isDown(t)) at = Math.max(at, this.down.find(([a, b]) => t >= a && t < b)[1] + this.latency); at = Math.max(at, this.lastDeliver); this.lastDeliver = at }
    this.queue.push({ at, json, size: json.length })
  }
  poll(t) {
    const out = [], keep = []
    for (const q of this.queue) (q.at <= t ? out : keep).push(q)
    this.queue = keep
    out.sort((a, b) => a.at - b.at)
    return out.map(q => JSON.parse(q.json))
  }
}

// Scripted, varied input: strafing, jumping, crouch-sliding, turning and firing.
function scriptedInput(r, i, state) {
  if (i % 30 === 0) state.keys = { w: r() < 0.7, s: r() < 0.15, a: r() < 0.35, d: r() < 0.35, sprint: r() < 0.5 }
  state.yaw += (r() - 0.5) * 0.05
  return { ...state.keys, jump: r() < 0.03, crouch: (i % 97) < 12, fire: r() < 0.25, aim: r() < 0.2, yaw: quantizeAngle(state.yaw), pitch: quantizeAngle(-0.05) }
}

function runSim({ clients = 2, seconds = 15, latency = 0.05, jitter = 0, loss = 0, bandwidth = Infinity, outage = null, seed = 7, extraPlayers = 0, aimTest = false, lagComp = true }) {
  const host = new Authority()
  if (!lagComp) host.rewindWindow = () => 0
  let shots = 0, hits = 0
  const cl = []
  for (let c = 0; c < clients; c++) {
    const id = 'c' + c
    host.add(id, 'Client ' + c)
    host.setRtt(id, latency * 2000)
    const mk = (reliable, s) => new SimLink({ latency, jitter, loss, bandwidth, reliable, seed: seed * 31 + c * 7 + s })
    cl.push({ id, up: mk(false, 1), down: mk(false, 2), events: mk(true, 3), pred: new Predictor(), interp: new Interpolator(0.1), r: rng(seed + c * 101), inp: { yaw: c, keys: {} }, steps: [], lastRender: null, maxStep: 0, hits: 0, shots: 0 })
  }
  for (let e = 0; e < extraPlayers; e++) { host.add('x' + e, 'Extra' + e); host.setRtt('x' + e, 100) }
  for (const c of cl) if (outage) c.up.down.push(outage), c.down.down.push(outage), c.events.down.push(outage)
  host.start()
  if (aimTest) {
    // Open ground in the north yard with clear line of sight; the target strafes across x.
    Object.assign(host.players.get('c0'), { x: 0, y: 0, z: -20, yaw: 0 })
    Object.assign(host.players.get('c1'), { x: 0, y: 0, z: -32, yaw: Math.PI })
  }
  const xr = rng(seed + 999)
  const xin = Array.from({ length: extraPlayers }, (_, e) => ({ yaw: e, keys: {}, seq: 0 }))
  let tick = 0, hostTickMs = 0, hostTickMax = 0, snapshotBytes = 0, snapshots = 0
  const total = Math.round(seconds / DT)
  for (; tick < total; tick++) {
    const t = tick * DT
    // Host receives commands, simulates one tick, publishes.
    for (const c of cl) for (const m of c.up.poll(t)) { const pm = parseClientMessage(m); if (pm?.type === 'c') host.queue(c.id, pm.cmds) }
    xin.forEach((s, e) => { const cmd = scriptedInput(xr, tick, s); cmd.seq = ++s.seq; host.queue('x' + e, [cmd]) })
    const t0 = performance.now()
    host.tick(DT)
    const d = performance.now() - t0
    hostTickMs += d; hostTickMax = Math.max(hostTickMax, d)
    if (tick % 2 === 0) {
      if (aimTest) { const tg = host.players.get('c1'); tg.hp = 100; tg.armor = 50; tg.protect = 0 } // keep the target alive and hittable
      const snap = host.snapshot()
      for (const e of snap.events) if (e.type === 'shot' && e.id === 'c0') { shots++; if (e.hit === 'c1') hits++ }
      const wire = encodeSnapshot(snap)
      snapshotBytes += JSON.stringify(wire).length; snapshots++
      for (const c of cl) {
        if (snap.events.length) c.events.send({ type: 'ev', sid: snap.sid, list: snap.events }, t)
        c.down.send(encodeSnapshot(snap, c.id), t, true)
      }
    }
    // Clients receive, reconcile, predict one tick, send their unacked window.
    for (const c of cl) {
      for (const m of c.down.poll(t)) {
        const s = parseHostMessage(m)
        if (!s || !c.interp.push(s, t)) continue
        c.phase = s.phase; c.goAt = s.phase === 'countdown' ? s.t + s.countdown : c.goAt
        const me = s.players.find(p => p.id === c.id)
        if (me) c.pred.reconcile(me, s.phase === 'playing', t * 1000)
      }
      c.events.poll(t)
      if (!c.pred.me) continue
      const cmd = scriptedInput(c.r, tick, c.inp)
      cmd.seq = c.pred.nextSeq(t * 1000)
      cmd.viewTime = Math.round(c.interp.renderTime(t) * 1000) / 1000
      if (aimTest && c.id === 'c1') { cmd.fire = false; cmd.jump = false; cmd.crouch = false; cmd.w = cmd.s = false; cmd.a = (tick % 80) < 40; cmd.d = !cmd.a; cmd.sprint = true } // target strafes
      if (aimTest && c.id === 'c0') {
        // Shooter stands still and aims at the chest of the interpolated target it is seeing.
        const target = c.interp.sample('c1', c.interp.renderTime(t))
        Object.assign(cmd, { w: false, s: false, a: false, d: false, jump: false, crouch: false, sprint: false, aim: true, fire: tick % 12 === 0 })
        if (target && c.pred.me.hp > 0) {
          const eye = eyePosition(c.pred.me), dx = target.x - eye.x, dz = target.z - eye.z
          cmd.yaw = quantizeAngle(Math.atan2(-dx, -dz)); cmd.pitch = quantizeAngle(Math.atan2(target.y + 1.1 - eye.y, Math.hypot(dx, dz)))
        }
      }
      const live = c.phase === 'playing' || (c.phase === 'countdown' && c.interp.hostNow(t) + latency * 2 >= c.goAt)
      c.pred.step(cmd, live)
      // Same policy as Room.sendCommands: 30 Hz, immediate on discrete actions, 12-command redundancy.
      if (tick % 2 === 0 || cmd.fire || cmd.jump || cmd.reload) c.up.send({ type: 'c', c: c.pred.pending.slice(-CMD_REDUNDANCY).map(encodeCmd) }, t, true)
      // Interpolation smoothness: per-frame movement of every other player as rendered.
      for (const o of cl) {
        if (o === c) continue
        const pose = c.interp.sampleSmoothed(o.id, c.interp.renderTime(t)) // what the client actually draws
        if (!pose || pose.hp <= 0) { c.lastRender = null; continue }
        if (c.lastRender && c.lastRender.id === o.id) {
          const step = Math.hypot(pose.x - c.lastRender.x, pose.z - c.lastRender.z)
          if (step < 6) c.maxStep = Math.max(c.maxStep, step) // > 6 m is a respawn teleport
        }
        c.lastRender = { id: o.id, x: pose.x, z: pose.z }
      }
    }
  }
  const shooter = host.players.get('c0'), target = host.players.get('c1')
  const s0 = cl[0].pred.stats
  return {
    host, cl, shooter, target, shots, hits, hitRate: shots ? hits / shots : 0,
    avgCorrectionCm: s0.samples ? (s0.sumError / s0.samples) * 100 : 0, maxCorrectionCm: s0.maxError * 100, snaps: s0.snaps,
    ackDelayMs: s0.ackDelayMs, pending: cl[0].pred.pending.length,
    snapshotBytes: snapshotBytes / snapshots, downKBs: cl[0].down.bytes / seconds / 1024, upKBs: cl[0].up.bytes / seconds / 1024,
    hostTickMs: hostTickMs / tick, hostTickMax, maxRenderStep: cl[0].maxStep, dropped: cl[0].down.dropped, staleRejected: cl[0].interp.stats.rejectedStale,
  }
}

const report = (name, m) => console.log(`  [${name}] correction avg ${m.avgCorrectionCm.toFixed(3)} cm, max ${m.maxCorrectionCm.toFixed(2)} cm, teleports ${m.snaps}; ack delay ${m.ackDelayMs.toFixed(0)} ms; ` +
  `snapshot ${m.snapshotBytes.toFixed(0)} B, down ${m.downKBs.toFixed(1)} KB/s, up ${m.upKBs.toFixed(1)} KB/s; host tick ${m.hostTickMs.toFixed(3)} ms (max ${m.hostTickMax.toFixed(2)}); ` +
  `max remote step ${(m.maxRenderStep * 100).toFixed(1)} cm/frame; stale snapshots rejected ${m.staleRejected}; dropped ${m.dropped}`)

for (const [latency, jitter, loss] of [[0.05, 0.01, 0.01], [0.1, 0.02, 0.02], [0.2, 0.04, 0.03]]) {
  test(`netsim: ${latency * 1000} ms latency, ±${jitter * 1000} ms jitter, ${loss * 100}% loss — prediction stays consistent`, () => {
    const m = runSim({ latency, jitter, loss, seconds: 20 })
    report(`${latency * 1000}ms`, m)
    assert.ok(m.avgCorrectionCm < 1, `average correction ${m.avgCorrectionCm} cm`)
    assert.ok(m.maxCorrectionCm < 60, `max correction ${m.maxCorrectionCm} cm`)
    assert.equal(m.snaps, 0, 'no teleport-level corrections')
    assert.ok(m.ackDelayMs < latency * 2000 + 150, `ack delay ${m.ackDelayMs} ms`)
    assert.ok(m.maxRenderStep < 0.6, `remote interpolation step ${m.maxRenderStep} m/frame`)
    assert.ok(m.staleRejected > 0 || jitter < 0.02, 'reordered snapshots were detected and ignored')
  })
}

test('netsim: 1 s total outage — inputs are bounded, then the client re-syncs without teleporting', () => {
  const m = runSim({ latency: 0.08, jitter: 0.01, loss: 0.01, seconds: 12, outage: [5, 6] })
  report('outage', m)
  assert.ok(m.pending < 40, `pending after recovery ${m.pending}`)
  assert.ok(m.ackDelayMs < 400, 'acks caught up')
  assert.ok(m.avgCorrectionCm < 5)
})

test('netsim: constrained bandwidth drops superseded snapshots instead of queueing them', () => {
  const m = runSim({ latency: 0.05, bandwidth: 12 * 1024, seconds: 10, clients: 2, extraPlayers: 6 })
  report('12 KB/s', m)
  assert.ok(m.dropped > 0, 'state updates were dropped under pressure')
  const c = m.cl[0]
  assert.ok(c.interp.snapshots.length > 0)
  assert.ok(c.down.queue.reduce((s, q) => s + q.size, 0) < 40 * 1024, 'send queue stays bounded')
  assert.ok(m.ackDelayMs < 3000, `ack delay under 12 KB/s: ${m.ackDelayMs} ms`)
})

test('netsim: lag compensation lets a 100 ms client hit a strafing target it sees (and is bounded)', () => {
  const on = runSim({ latency: 0.1, jitter: 0.01, loss: 0, seconds: 12, aimTest: true })
  const off = runSim({ latency: 0.1, jitter: 0.01, loss: 0, seconds: 12, aimTest: true, lagComp: false })
  console.log(`  [lag-comp 100ms] hit rate with rewind ${(on.hitRate * 100).toFixed(0)}% (${on.hits}/${on.shots}), without ${(off.hitRate * 100).toFixed(0)}% (${off.hits}/${off.shots})`)
  assert.ok(on.shots > 25, `shots fired after the countdown: ${on.shots}`)
  assert.ok(on.hitRate > 0.8, `hit rate ${on.hitRate}`)
  assert.ok(off.hitRate < on.hitRate - 0.3, 'without rewind the same aim misses a moving target')
})

test('netsim: 12 players — host tick time, snapshot size and per-client bandwidth', () => {
  const m = runSim({ clients: 4, extraPlayers: MAX_PLAYERS - 4, latency: 0.06, jitter: 0.01, loss: 0.01, seconds: 15 })
  assert.equal(m.host.players.size, 12)
  report('12 players', m)
  assert.ok(m.hostTickMs < 2, `host tick ${m.hostTickMs} ms (budget 16.7 ms)`)
  assert.ok(m.snapshotBytes < 12000, `snapshot ${m.snapshotBytes} B`)
  assert.ok(m.downKBs < 400, `per-client downstream ${m.downKBs} KB/s`)
  assert.ok(m.avgCorrectionCm < 1)
})
