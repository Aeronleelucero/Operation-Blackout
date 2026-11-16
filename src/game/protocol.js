// Wire protocol shared by host and clients: versioning, compact encodings, strict validation and
// rate limiting. Pure module (no DOM / PeerJS) so it is unit-tested in node and reusable by a
// future dedicated server.
import { SLOTS } from './world.js'

export const PROTOCOL_VERSION = 2
export const MAX_NAME = 18
export const MAX_CHAT = 140
export const MAX_CMDS_PER_MSG = 40   // validation limit
export const CMD_REDUNDANCY = 12     // unacked commands repeated in every unreliable send (200 ms)
export const PHASES = ['lobby', 'countdown', 'playing', 'ended']

const finite = Number.isFinite
const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v)

// ------------------------------------------------------------------------------- commands
// Bit flags for the boolean inputs of one 1/60 s command.
const BITS = ['w', 's', 'a', 'd', 'sprint', 'crouch', 'jump', 'fire', 'aim', 'reload']
// Angles are quantised before the client simulates them, so host and client run identical math.
export const quantizeAngle = a => Math.round(a * 1e4) / 1e4

export function encodeCmd(c) {
  let bits = 0
  BITS.forEach((k, i) => { if (c[k]) bits |= 1 << i })
  return [c.seq, bits, Math.round(c.yaw * 1e4), Math.round(c.pitch * 1e4), c.slot | 0, Math.round((c.viewTime || 0) * 1000)]
}
export function decodeCmd(a) {
  if (!Array.isArray(a) || a.length !== 6 || !a.every(n => Number.isInteger(n))) return null
  const [seq, bits, yaw, pitch, slot, vt] = a
  if (seq <= 0 || bits < 0 || bits >= 1 << BITS.length || slot < 0 || slot >= SLOTS || Math.abs(yaw) > 1e6 || Math.abs(pitch) > 15708) return null
  const c = { seq, yaw: yaw / 1e4, pitch: pitch / 1e4, slot, viewTime: vt / 1000 }
  BITS.forEach((k, i) => { c[k] = !!(bits & (1 << i)) })
  return c
}

// ------------------------------------------------------------------------------- snapshots
// Player fields in wire order. Numbers are already rounded by the authority.
export const P_FIELDS = ['id', 'name', 'bot', 'color', 'x', 'y', 'z', 'vx', 'vy', 'vz', 'yaw', 'pitch', 'ground', 'height', 'crouched', 'slide', 'slideCd',
  'crouchHeld', 'sprinting', 'aiming', 'jumpBuffer', 'recoil', 'recoilYaw', 'hp', 'armor', 'weapon', 'ammo', 'reserve', 'reload', 'cooldown', 'swap', 'bloom',
  'shots', 'fireHeld', 'seed', 'kills', 'deaths', 'score', 'streak', 'protect', 'respawn', 'ack', 'ping', 'connected']
const BOOL_FIELDS = new Set(['bot', 'ground', 'crouched', 'crouchHeld', 'sprinting', 'aiming', 'fireHeld', 'connected'])

const r3 = v => (typeof v === 'number' && !Number.isInteger(v) ? Math.round(v * 1000) / 1000 : v)
// `forId`: the recipient's own entry keeps full precision (exact prediction replay); everyone else is
// rounded to millimetres/milliseconds, which is plenty for interpolation and roughly halves the size.
export function encodeSnapshot(s, forId = null) {
  return {
    type: 's', sid: s.sid, t: r3(s.t), ph: PHASES.indexOf(s.phase), tm: r3(s.timer), cd: r3(s.countdown), r: s.round, lim: s.limit,
    pk: s.pickups || 0,
    p: s.players.map(p => P_FIELDS.map(k => (BOOL_FIELDS.has(k) ? (p[k] ? 1 : 0) : p.id === forId || Array.isArray(p[k]) ? p[k] : r3(p[k])))),
  }
}
export function decodeSnapshot(m) {
  return {
    sid: m.sid, t: m.t, phase: PHASES[m.ph], timer: m.tm, countdown: m.cd, round: m.r, limit: m.lim, pickups: m.pk,
    players: m.p.map(a => { const p = {}; P_FIELDS.forEach((k, i) => { p[k] = BOOL_FIELDS.has(k) ? a[i] === 1 : a[i] }); return p }),
  }
}

// ------------------------------------------------------------------------------- validation
// Client → host messages. Returns a normalised message or null (and the caller counts strikes).
export function parseClientMessage(m) {
  if (!isObj(m) || typeof m.type !== 'string') return null
  switch (m.type) {
    case 'c': {
      if (!Array.isArray(m.c) || m.c.length === 0 || m.c.length > MAX_CMDS_PER_MSG) return null
      const cmds = []
      for (const a of m.c) { const c = decodeCmd(a); if (!c) return null; cmds.push(c) }
      return { type: 'c', cmds }
    }
    case 'chat': return typeof m.text === 'string' && m.text.length <= MAX_CHAT * 2 ? { type: 'chat', text: m.text.trim().slice(0, MAX_CHAT) } : null
    case 'ping': return finite(m.at) ? { type: 'ping', at: m.at } : null
    case 'pong': return finite(m.at) ? { type: 'pong', at: m.at } : null
    case 'bye': return { type: 'bye' }
    default: return null
  }
}

// Host → client messages.
export function parseHostMessage(m) {
  if (!isObj(m) || typeof m.type !== 'string') return null
  switch (m.type) {
    case 's':
      if (typeof m.sid !== 'string' || !finite(m.t) || !Number.isInteger(m.ph) || !PHASES[m.ph] || !Array.isArray(m.p) || m.p.length > 12) return null
      if (!m.p.every(a => Array.isArray(a) && a.length === P_FIELDS.length && typeof a[0] === 'string' && typeof a[1] === 'string')) return null
      return decodeSnapshot(m)
    case 'ev':
      if (typeof m.sid !== 'string' || !Array.isArray(m.list) || m.list.length > 400 || !m.list.every(e => isObj(e) && typeof e.type === 'string' && Number.isInteger(e.eventId))) return null
      return { type: 'ev', sid: m.sid, list: m.list }
    case 'welcome': return typeof m.id === 'string' && Number.isInteger(m.v) ? m : null
    case 'chat': return typeof m.name === 'string' && typeof m.text === 'string' && m.text.length <= MAX_CHAT ? m : null
    case 'ping': case 'pong': return finite(m.at) ? m : null
    case 'reject': case 'bye': return { type: m.type, message: typeof m.message === 'string' ? m.message.slice(0, 120) : '' }
    default: return null
  }
}

export function sanitizeName(name) {
  const n = String(name ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, MAX_NAME)
  return n || 'Operative'
}

// Token bucket: `rate` messages per second with a burst allowance.
export class RateLimiter {
  constructor(rate, burst = rate) { this.rate = rate; this.burst = burst; this.tokens = burst; this.last = null }
  allow(now, cost = 1) {
    if (this.last !== null) this.tokens = Math.min(this.burst, this.tokens + ((now - this.last) / 1000) * this.rate)
    this.last = now
    if (this.tokens < cost) return false
    this.tokens -= cost
    return true
  }
}

// Approximate wire size of a message (JSON), used for metrics and payload limits.
export const wireSize = m => JSON.stringify(m).length
