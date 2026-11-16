// Client-side prediction / reconciliation and remote-player interpolation.
// Pure module: used by the browser client and by the node network-simulation tests.
import { DT, simulate } from './world.js'

const clone = p => ({ ...p, ammo: [...p.ammo], reserve: [...p.reserve] })

export const TELEPORT_DISTANCE = 2.5

// Owns the locally predicted player and the history of unacknowledged commands.
export class Predictor {
  constructor() { this.reset() }

  reset() {
    this.me = null
    this.pending = []
    this.seq = 0
    this.lastAck = 0
    this.stats = { corrections: 0, snaps: 0, maxError: 0, sumError: 0, samples: 0, lastError: 0, ackDelayMs: 0 }
    this.sentAt = new Map() // seq → local ms when generated (for ack-delay measurement)
  }

  nextSeq(nowMs = 0) {
    this.seq++
    this.sentAt.set(this.seq, nowMs)
    if (this.sentAt.size > 600) this.sentAt.delete(this.sentAt.keys().next().value)
    return this.seq
  }

  // Run one fixed step locally (immediate response) and remember it for replay. `live` says whether
  // the host will simulate this command (false during the countdown); it is stored on the command so
  // replays make exactly the same decision as the original prediction.
  step(cmd, live) {
    cmd.live = !!live
    this.pending.push(cmd)
    if (this.pending.length > 600) this.pending.shift()
    if (!this.me) return null
    if (live) return simulate(this.me, cmd, DT)
    this.me.yaw = cmd.yaw
    this.me.pitch = cmd.pitch
    return null
  }

  // Rebuild the predicted state from the authoritative one and replay what the host has not
  // processed yet. Returns the correction vector (old prediction − new prediction).
  reconcile(server, playing, nowMs = 0) {
    if (server.ack > this.lastAck) {
      const t = this.sentAt.get(server.ack)
      if (t !== undefined && nowMs) this.stats.ackDelayMs = nowMs - t
      this.lastAck = server.ack
    }
    this.pending = this.pending.filter(c => c.seq > server.ack)
    const fresh = clone(server)
    for (const c of this.pending) {
      if (playing || c.live) simulate(fresh, c, DT)
      else { fresh.yaw = c.yaw; fresh.pitch = c.pitch }
    }
    let error = null, snapped = false
    const old = this.me
    const keepView = !!(old && old.hp > 0 && fresh.hp > 0)
    if (keepView) {
      error = { x: old.x - fresh.x, y: old.y - fresh.y, z: old.z - fresh.z }
      const d = Math.hypot(error.x, error.y, error.z)
      this.stats.lastError = d
      this.stats.samples++
      this.stats.sumError += d
      if (d > 1e-4) this.stats.corrections++
      if (d > this.stats.maxError) this.stats.maxError = d
      if (d > TELEPORT_DISTANCE) { snapped = true; this.stats.snaps++ }
    } else snapped = true
    // The client owns its view direction while alive; a (re)spawn takes the host's facing.
    if (keepView) { fresh.yaw = old.yaw; fresh.pitch = old.pitch }
    this.me = fresh
    return { error, snapped, viewReset: !keepView }
  }
}

// Buffers timestamped host snapshots and samples remote players at a delayed render time.
// The render delay adapts to measured arrival jitter (base … max) so two snapshots are normally
// buffered even on a jittery link; the host's rewind bound covers the maximum.
export const INTERP_MAX = 0.2
export class Interpolator {
  constructor(delay = 0.1, maxExtrapolate = 0.15) {
    this.baseDelay = delay
    this.maxExtrapolate = maxExtrapolate
    this.reset()
  }

  reset() {
    this.snapshots = []
    this.sid = null
    this.offset = null // host clock − local clock (seconds)
    this.jitter = 0
    this.interval = 1 / 30
    this.delay = this.baseDelay
    this.stats = { accepted: 0, rejectedSession: 0, rejectedStale: 0, extrapolated: 0, jitterMs: 0, delayMs: this.baseDelay * 1000 }
    this.visual = new Map()
  }

  // Render-only: absorbs discontinuities (late snapshot after extrapolation, small corrections) into
  // an exponentially decaying offset so remote players never pop. Hit detection uses sample() instead.
  sampleSmoothed(id, t) {
    const pose = this.sample(id, t)
    if (!pose) return null
    const v = this.visual.get(id)
    if (!v || pose.hp <= 0 || t <= v.t || t - v.t > 0.25) { this.visual.set(id, { t, x: pose.x, y: pose.y, z: pose.z, ox: 0, oy: 0, oz: 0 }); return pose }
    const dt = t - v.t, k = Math.exp(-10 * dt)
    let ox = v.ox * k, oy = v.oy * k, oz = v.oz * k
    // Where continuous motion would have put the player this frame.
    const ex = v.x + (pose.vx || 0) * dt, ez = v.z + (pose.vz || 0) * dt
    const jump = Math.hypot(pose.x + ox - ex, pose.z + oz - ez)
    if (jump > 6) { ox = oy = oz = 0 } // respawn/teleport: snap
    else if (jump > 0.12) { ox = ex - pose.x; oz = ez - pose.z; oy = v.y - pose.y }
    const out = { ...pose, x: pose.x + ox, y: pose.y + oy, z: pose.z + oz }
    this.visual.set(id, { t, x: out.x, y: out.y, z: out.z, ox, oy, oz })
    return out
  }

  // Returns false for snapshots from another session or older than what we already have.
  push(snap, nowSec) {
    if (this.sid === null) this.sid = snap.sid
    if (snap.sid !== this.sid) { this.stats.rejectedSession++; return false }
    const last = this.snapshots[this.snapshots.length - 1]
    if (last && snap.t <= last.t) { this.stats.rejectedStale++; return false }
    const est = snap.t - nowSec
    if (this.offset !== null) this.jitter = this.jitter * 0.95 + Math.abs(est - this.offset) * 0.05
    if (last) this.interval = this.interval * 0.9 + Math.min(0.2, snap.t - last.t) * 0.1
    // Track the newest-arriving estimate quickly, drift slowly toward later (delayed) samples.
    this.offset = this.offset === null || Math.abs(est - this.offset) > 1 ? est : this.offset + (est - this.offset) * (est > this.offset ? 0.3 : 0.05)
    const target = Math.min(INTERP_MAX, Math.max(this.baseDelay, this.interval + 2.5 * this.jitter))
    this.delay += (target - this.delay) * 0.05 // glide, never jump
    this.stats.jitterMs = this.jitter * 1000
    this.stats.delayMs = this.delay * 1000
    this.snapshots.push({ t: snap.t, map: new Map(snap.players.map(p => [p.id, p])) })
    while (this.snapshots.length > 60) this.snapshots.shift()
    this.stats.accepted++
    return true
  }

  hostNow(nowSec) { return nowSec + (this.offset ?? 0) }
  renderTime(nowSec) { return this.hostNow(nowSec) - this.delay }

  sample(id, t) {
    const S = this.snapshots
    if (!S.length) return null
    let i = S.length - 1
    while (i >= 0 && S[i].t > t) i--
    if (i < 0) return S[0].map.get(id) || null
    const a = S[i], b = S[i + 1]
    const pa = a.map.get(id)
    if (!pa) return b?.map.get(id) || null
    if (!b) {
      // Past the newest snapshot: bounded extrapolation along velocity, then hold.
      const dt = Math.min(this.maxExtrapolate, t - a.t)
      if (dt <= 0 || pa.hp <= 0) return pa
      this.stats.extrapolated++
      return { ...pa, x: pa.x + pa.vx * dt, z: pa.z + pa.vz * dt, y: pa.ground ? pa.y : pa.y + pa.vy * dt }
    }
    const pb = b.map.get(id)
    if (!pb || pb.hp > 0 !== pa.hp > 0) return pb || pa
    // A large jump between snapshots is a respawn/teleport: don't slide across the map.
    if (Math.hypot(pb.x - pa.x, pb.z - pa.z) > 6) return t - a.t < (b.t - a.t) / 2 ? pa : pb
    const k = Math.min(1, Math.max(0, (t - a.t) / Math.max(1e-4, b.t - a.t)))
    let dy = pb.yaw - pa.yaw
    dy = Math.atan2(Math.sin(dy), Math.cos(dy))
    return {
      ...pb,
      x: pa.x + (pb.x - pa.x) * k, y: pa.y + (pb.y - pa.y) * k, z: pa.z + (pb.z - pa.z) * k,
      yaw: pa.yaw + dy * k, pitch: pa.pitch + (pb.pitch - pa.pitch) * k, height: pa.height + (pb.height - pa.height) * k,
      vx: pa.vx + (pb.vx - pa.vx) * k, vz: pa.vz + (pb.vz - pa.vz) * k,
    }
  }
}
