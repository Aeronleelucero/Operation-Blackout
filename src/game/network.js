// PeerJS room transport with an explicit connection state machine.
//
// Channels per peer pair (one RTCPeerConnection):
//   • reliable/ordered PeerJS DataConnection — handshake, events (kills, shots…), chat, heartbeats
//   • negotiated unreliable/unordered RTCDataChannel (maxRetransmits 0) — snapshots and input commands.
//     PeerJS's own `reliable:false` only sets ordered:false and still retransmits, so it cannot drop
//     stale state; the extra channel can. When it is unavailable we fall back to the reliable channel
//     and drop superseded snapshots whenever its send buffer backs up.
//
// To move to a dedicated server, replace this class with a WebSocket/WebTransport client that sends
// the same protocol messages ({type:'c'} up, {type:'s'|'ev'} down); Authority runs unchanged.
import Peer from 'peerjs'
import { MAX_PLAYERS } from './authority.js'
import {
  PROTOCOL_VERSION, MAX_CMDS_PER_MSG, CMD_REDUNDANCY, parseClientMessage, parseHostMessage, encodeCmd, encodeSnapshot, RateLimiter, sanitizeName,
} from './protocol.js'

export const CONN = { IDLE: 'IDLE', CONNECTING: 'CONNECTING', CONNECTED: 'CONNECTED', RECONNECTING: 'RECONNECTING', DISCONNECTED: 'DISCONNECTED', ERROR: 'ERROR' }
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const PREFIX = 'ob3d-'
const STATE_CHANNEL_ID = 7
const HEARTBEAT_MS = 1000
const PEER_TIMEOUT_MS = 6000      // no traffic for this long → link considered lost
const RECONNECT_GRACE_MS = 15000  // how long a dropped player's slot (and score) is kept
const CONNECT_TIMEOUT_MS = 18000
const MAX_BUFFERED = 32 * 1024    // disposable state never queues deeper than a few snapshots
const MAX_STRIKES = 25            // malformed messages before a peer is kicked

const now = () => performance.now()
const randomToken = () => {
  const b = crypto.getRandomValues(new Uint8Array(9))
  return 'p' + [...b].map(n => n.toString(36).padStart(2, '0')).join('').slice(0, 14)
}

// ICE/TURN servers are never hardcoded: an optional endpoint (set at deploy time) returns
// short-lived credentials as {"iceServers":[...]}. Without it PeerJS's default STUN is used.
async function loadIceServers() {
  const url = import.meta.env?.VITE_ICE_CONFIG_URL
  if (!url) return undefined
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), 4000)
    const res = await fetch(url, { signal: ctrl.signal, credentials: 'same-origin' })
    clearTimeout(t)
    const json = await res.json()
    return Array.isArray(json.iceServers) ? json.iceServers : undefined
  } catch { return undefined }
}
function peerOptions(iceServers) {
  const env = import.meta.env || {}
  const o = { debug: 0 }
  if (iceServers) o.config = { iceServers }
  if (env.VITE_PEER_HOST) Object.assign(o, { host: env.VITE_PEER_HOST, port: Number(env.VITE_PEER_PORT) || 443, path: env.VITE_PEER_PATH || '/', secure: env.VITE_PEER_SECURE !== 'false' })
  return o
}

// One peer-to-peer link: reliable PeerJS connection + optional unreliable state channel.
class Link {
  constructor(conn, metrics) {
    this.conn = conn
    this.metrics = metrics
    this.state = null
    this.onmessage = null
    this.lastSeen = now()
  }
  attachStateChannel() {
    const pc = this.conn.peerConnection
    if (this.state || !pc?.createDataChannel) return
    try {
      const dc = pc.createDataChannel('ob-state', { negotiated: true, id: STATE_CHANNEL_ID, ordered: false, maxRetransmits: 0 })
      dc.onmessage = e => {
        if (typeof e.data !== 'string' || e.data.length > 65536) { this.onmessage?.(null); return }
        this.metrics.bytesIn += e.data.length
        let m
        try { m = JSON.parse(e.data) } catch { this.onmessage?.(null); return }
        this.onmessage?.(m)
      }
      this.state = dc
    } catch { this.state = null }
  }
  get stateOpen() { return this.state?.readyState === 'open' }
  get open() { return !!this.conn.open }
  sendReliable(m) {
    if (!this.conn.open) return false
    try { this.conn.send(m); return true } catch { return false }
  }
  // Disposable state: newest wins. Never queue behind a backed-up buffer.
  sendState(m) {
    const json = JSON.stringify(m)
    this.lastSize = json.length
    if (this.stateOpen && json.length < 60000) {
      if (this.state.bufferedAmount > MAX_BUFFERED) { this.metrics.dropped++; return false }
      try { this.state.send(json); this.metrics.bytesOut += json.length; return true } catch {}
    }
    const dc = this.conn.dataChannel
    if (dc && dc.bufferedAmount > MAX_BUFFERED) { this.metrics.dropped++; return false }
    this.metrics.bytesOut += json.length
    return this.sendReliable(m)
  }
  close() {
    try { this.state?.close() } catch {}
    try { this.conn.close() } catch {}
  }
}

export class Room {
  constructor({ onState, onEvents, onStatus, onChat, onConnection }) {
    this.onState = onState
    this.onEvents = onEvents
    this.onStatus = onStatus
    this.onChat = onChat
    this.onConnection = onConnection || (() => {})
    this.peer = null
    this.members = new Map()   // host: token → { link, name, rtt, limits, strikes, lost, grace }
    this.link = null           // client: link to host
    this.authority = null
    this.id = 'local'
    this.code = ''
    this.isHost = false
    this.ping = 0
    this.session = 0
    this.conn = CONN.IDLE
    this.latestState = null
    this.metrics = { bytesOut: 0, bytesIn: 0, snapshotBytes: 0, snapshots: 0, dropped: 0, rejected: 0, tickMs: 0, tickMaxMs: 0, stateChannel: false }
    this.timers = []
  }

  status(text) { this.onStatus(text) }

  setConn(state, reason = '') {
    if (this.conn === state && this.connReason === reason) return
    this.conn = state
    this.connReason = reason
    this.onConnection(state, reason)
  }

  every(ms, fn) { const id = setInterval(fn, ms); this.timers.push(id); return id }
  after(ms, fn) { const id = setTimeout(fn, ms); this.timers.push(id); return id }

  // Idempotent teardown. `final` is the state to publish (IDLE for a deliberate leave).
  cleanup(final = CONN.IDLE, reason = '') {
    this.session++
    for (const t of this.timers) { clearInterval(t); clearTimeout(t) }
    this.timers = []
    this.watchdog = null
    if (this.isHost) for (const m of this.members.values()) { if (!m.lost) m.link?.sendReliable({ type: 'bye', message: 'Host closed the room.' }); clearTimeout(m.grace) }
    else if (this.link && final === CONN.IDLE) this.link.sendReliable({ type: 'bye' })
    const links = [...this.members.values()].map(m => m.link).concat(this.link ? [this.link] : [])
    const peer = this.peer
    // Give the goodbye a moment to flush before tearing the peer down.
    setTimeout(() => { for (const l of links) l?.close(); try { peer?.destroy() } catch {} }, links.length ? 150 : 0)
    this.peer = null
    this.link = null
    this.members.clear()
    this.authority?.terminate()
    this.authority = null
    this.isHost = false
    this.code = ''
    this.latestState = null
    this.byeReceived = false
    this.ping = 0
    this.setConn(final, reason)
  }

  // ----------------------------------------------------------------------------- authority (host)
  createAuthority() {
    this.authority = new Worker(new URL('./host.worker.js', import.meta.url), { type: 'module' })
    const session = this.session
    this.authority.onmessage = ({ data }) => {
      if (session !== this.session) return
      if (data.kind === 'stats') { this.metrics.tickMs = data.tickMs; this.metrics.tickMaxMs = data.tickMaxMs; return }
      const snap = data.snap
      this.latestState = snap
      this.onState(snap)
      if (!this.members.size) return
      if (snap.events.length) this.broadcastReliable({ type: 'ev', sid: snap.sid, list: snap.events })
      this.metrics.snapshots++
      for (const [token, m] of this.members) {
        if (!m.link?.open || m.lost) continue
        const wire = encodeSnapshot(snap, token)
        if (m.link.sendState(wire)) this.metrics.snapshotBytes = m.link.lastSize
      }
    }
    this.authority.onerror = () => this.fail('Host simulation crashed. Please restart the room.')
  }

  command(type, data = {}) { this.authority?.postMessage({ type, ...data }) }
  publish() { this.command('snapshot') }
  start() { if (this.isHost && this.authority) { this.command('start'); this.publish() } }
  returnToLobby() { if (this.isHost && this.authority) { this.command('lobby'); this.publish() } }

  practice(name) {
    this.cleanup()
    this.id = 'local'
    this.isHost = true
    this.createAuthority()
    this.command('add', { id: this.id, name })
    for (let i = 0; i < 5; i++) this.command('add', { id: 'bot-' + i, name: ['Viper', 'Rook', 'Ghost', 'Echo', 'Flint'][i], bot: true })
    this.command('start')
    this.publish()
    this.setConn(CONN.CONNECTED, 'practice')
  }

  makeCode() {
    const bytes = crypto.getRandomValues(new Uint8Array(6))
    return [...bytes].map(n => CODE_CHARS[n % CODE_CHARS.length]).join('')
  }

  // ----------------------------------------------------------------------------- open / join
  async open(host, code, name) {
    this.cleanup()
    const roomCode = host ? this.makeCode() : String(code).trim().toUpperCase()
    if (!/^[A-Z2-9]{6}$/.test(roomCode)) { this.setConn(CONN.ERROR, 'Enter the six-character room code.'); throw new Error('Enter the six-character room code.') }
    this.isHost = host
    this.code = roomCode
    this.name = sanitizeName(name)
    this.id = randomToken()
    const session = this.session
    this.setConn(CONN.CONNECTING, host ? 'Creating room…' : 'Connecting…')
    this.status(host ? 'CREATING ROOM…' : 'CONNECTING…')
    const ice = await loadIceServers()
    if (session !== this.session) return
    if (host) this.createAuthority()
    const peer = this.peer = new Peer(host ? PREFIX + this.code : undefined, peerOptions(ice))
    this.after(CONNECT_TIMEOUT_MS, () => {
      if (session === this.session && this.conn === CONN.CONNECTING) this.fail('Connection timed out. Check the code or try another network.')
    })
    peer.on('open', () => {
      if (session !== this.session) return
      if (host) {
        if (this.conn !== CONN.CONNECTING) return // signaling reconnect, not a new room
        this.command('add', { id: this.id, name: this.name })
        this.publish()
        this.setConn(CONN.CONNECTED, 'Room ' + this.code + ' ready')
        this.status('ROOM ' + this.code + ' · READY · SHARE THE CODE')
        this.every(HEARTBEAT_MS, () => this.hostHeartbeat(session))
      } else if (this.conn === CONN.CONNECTING) this.connectToHost(session)
    })
    peer.on('connection', conn => { if (session === this.session && host) this.admit(conn, session) })
    peer.on('error', e => {
      if (session !== this.session) return
      const msg = ({
        'peer-unavailable': 'Room not found. Check the code.', 'unavailable-id': 'Code already in use. Host again.',
        network: 'Signaling server unreachable.', 'server-error': 'Room service error.', 'socket-error': 'Room service connection failed.',
        'socket-closed': 'Room service connection closed.', 'browser-incompatible': 'This browser does not support WebRTC.', webrtc: 'Peer connection failed.',
      })[e.type] || 'Connection failed: ' + e.type
      if (this.conn === CONN.RECONNECTING) return // keep retrying until the grace period ends
      if (this.conn === CONN.CONNECTING) return this.fail(msg)
      // Signaling hiccups don't kill established peer links.
      if (['network', 'socket-error', 'socket-closed', 'server-error', 'disconnected'].includes(e.type) && (this.members.size || this.link?.open)) { this.status(msg + ' Existing players stay connected.'); return }
      if (this.isHost && e.type === 'peer-unavailable') return
      if (this.isHost || !this.link?.open) this.fail(msg)
    })
    peer.on('disconnected', () => {
      if (session !== this.session) return
      this.status('Room service disconnected — reconnecting signaling…')
      this.after(1000, () => { if (session === this.session && this.peer && !this.peer.destroyed) try { this.peer.reconnect() } catch {} })
    })
  }

  fail(reason) {
    this.status(reason)
    this.cleanup(CONN.ERROR, reason)
  }

  // ----------------------------------------------------------------------------- host side
  admit(conn, session) {
    const meta = conn.metadata || {}
    const reject = message => { this.metrics.rejected++; conn.on('open', () => { try { conn.send({ type: 'reject', message }) } catch {} setTimeout(() => conn.close(), 150) }) }
    if (meta.v !== PROTOCOL_VERSION) return reject('Game version mismatch — reload the page.')
    if (typeof meta.token !== 'string' || !/^p[a-z0-9]{6,20}$/.test(meta.token) || meta.token === this.id) return reject('Invalid join request.')
    const existing = this.members.get(meta.token)
    if (!existing && this.members.size + 1 >= MAX_PLAYERS) return reject('Room is full (12/12).')
    conn.on('open', () => {
      if (session !== this.session) { conn.close(); return }
      const link = new Link(conn, this.metrics)
      link.attachStateChannel()
      const token = meta.token
      const member = this.members.get(token) || { name: sanitizeName(meta.name), strikes: 0, limits: { c: new RateLimiter(150, 60), chat: new RateLimiter(2, 3), pong: new RateLimiter(6, 6) } }
      clearTimeout(member.grace)
      const old = member.link
      member.link = link
      member.lost = false
      member.leaving = false
      this.members.set(token, member)
      old?.close()
      link.onmessage = raw => this.hostMessage(member, link, raw)
      conn.on('data', raw => this.hostMessage(member, link, raw))
      conn.on('close', () => this.memberLost(token, member, link, session))
      conn.on('error', () => this.memberLost(token, member, link, session))
      link.sendReliable({ type: 'welcome', id: token, v: PROTOCOL_VERSION, code: this.code })
      this.command('add', { id: token, name: member.name })
      this.publish()
    })
  }

  hostMessage(member, link, raw) {
    if (member.link !== link) return
    link.lastSeen = now()
    const m = parseClientMessage(raw)
    if (!m) return this.strike(member)
    const t = now()
    const token = [...this.members].find(([, v]) => v === member)?.[0]
    if (!token) return
    if (m.type === 'c') {
      if (member.limits.c.allow(t)) this.command('cmds', { id: token, cmds: m.cmds })
      else this.metrics.rejected++
    } else if (m.type === 'pong') {
      if (!member.limits.pong.allow(t)) return
      const rtt = Math.max(0, t - m.at)
      member.rtt = member.rtt ? member.rtt * 0.7 + rtt * 0.3 : rtt
      this.command('rtt', { id: token, ms: member.rtt })
    } else if (m.type === 'chat') {
      if (member.limits.chat.allow(t)) this.relayChat(token, m.text)
    } else if (m.type === 'bye') {
      member.leaving = true
      link.close()
    }
  }

  strike(member) {
    this.metrics.rejected++
    member.strikes++
    if (member.strikes > MAX_STRIKES) {
      member.link?.sendReliable({ type: 'reject', message: 'Disconnected: protocol violation.' })
      member.leaving = true
      setTimeout(() => member.link?.close(), 100)
    }
  }

  memberLost(token, member, link, session) {
    if (session !== this.session || member.link !== link || member.lost) return
    member.lost = true
    link.close()
    const remove = () => {
      if (session !== this.session || this.members.get(token) !== member || !member.lost) return
      this.members.delete(token)
      this.command('remove', { id: token })
      this.publish()
    }
    if (member.leaving) { remove(); return }
    // Unexpected drop: keep the player (frozen, untargetable) so they can reconnect into it.
    this.command('dropped', { id: token })
    this.publish()
    member.grace = setTimeout(remove, RECONNECT_GRACE_MS)
  }

  hostHeartbeat(session) {
    if (session !== this.session) return
    const t = now()
    let stateOpen = false
    for (const [token, m] of this.members) {
      if (!m.link || m.lost) continue
      stateOpen ||= m.link.stateOpen
      if (t - m.link.lastSeen > PEER_TIMEOUT_MS) { this.memberLost(token, m, m.link, session); continue }
      m.link.sendReliable({ type: 'ping', at: t })
    }
    this.metrics.stateChannel = stateOpen
  }

  broadcastReliable(m) { for (const mem of this.members.values()) if (mem.link?.open && !mem.lost) mem.link.sendReliable(m) }

  relayChat(id, text) {
    if (typeof text !== 'string') return
    const p = this.latestState?.players.find(p => p.id === id)
    if (!p) return
    text = text.trim().slice(0, 140)
    if (!text) return
    this.onChat(p.name, text)
    this.broadcastReliable({ type: 'chat', name: p.name, text })
  }

  // ----------------------------------------------------------------------------- client side
  connectToHost(session) {
    if (session !== this.session || !this.peer || this.peer.destroyed) return
    const conn = this.peer.connect(PREFIX + this.code, { reliable: true, serialization: 'json', metadata: { name: this.name, token: this.id, v: PROTOCOL_VERSION } })
    const link = new Link(conn, this.metrics)
    let welcomed = false
    conn.on('open', () => {
      if (session !== this.session || (this.link && this.link !== link && this.link.open)) { conn.close(); return }
      link.attachStateChannel()
      this.link = link
      link.lastSeen = now()
    })
    const onData = raw => {
      if (session !== this.session || this.link !== link) return
      link.lastSeen = now()
      const m = parseHostMessage(raw)
      if (!m) { this.metrics.rejected++; return }
      if (m.type === 'welcome') {
        if (m.v !== PROTOCOL_VERSION) return this.fail('Game version mismatch — reload the page.')
        welcomed = true
        this.setConn(CONN.CONNECTED, 'Room ' + this.code)
        this.status('CONNECTED · ROOM ' + this.code)
      } else if (m.type === 'ping') link.sendReliable({ type: 'pong', at: m.at })
      else if (m.type === 'ev') this.onEvents(m.list, m.sid)
      else if (m.type === 'chat') this.onChat(m.name, m.text)
      else if (m.type === 'reject') this.fail(m.message || 'Rejected by host.')
      else if (m.type === 'bye') { this.byeReceived = true; this.cleanup(CONN.DISCONNECTED, 'The host closed the room.') }
      else if (m.players) { this.metrics.stateChannel = link.stateOpen; this.onState({ ...m, events: [] }) }
    }
    link.onmessage = onData
    conn.on('data', onData)
    const lost = () => {
      if (session !== this.session || this.byeReceived) return
      if (this.link && this.link !== link) return
      link.close()
      this.link = null
      if (!welcomed && this.conn === CONN.CONNECTING) return // connect timeout / peer error handles it
      this.reconnect(session)
    }
    conn.on('close', lost)
    conn.on('error', lost)
    // Client-side liveness: the host pings every second.
    if (!this.watchdog) this.watchdog = this.every(1000, () => {
      if (session !== this.session || !this.link) return
      if (now() - this.link.lastSeen > PEER_TIMEOUT_MS) { const l = this.link; this.link = null; l.close(); this.reconnect(session) }
    })
  }

  reconnect(session) {
    if (session !== this.session || this.conn === CONN.RECONNECTING) return
    this.setConn(CONN.RECONNECTING, 'Connection lost — reconnecting…')
    this.status('CONNECTION LOST · RECONNECTING…')
    const until = now() + RECONNECT_GRACE_MS
    const attempt = () => {
      if (session !== this.session || this.conn !== CONN.RECONNECTING) return
      if (now() > until) return this.cleanup(CONN.DISCONNECTED, 'Lost connection to the host.')
      if (!this.link?.open) {
        if (this.peer?.disconnected && !this.peer.destroyed) try { this.peer.reconnect() } catch {}
        this.connectToHost(session)
      }
      this.after(2500, attempt)
    }
    attempt()
  }

  // Commands: over the unreliable channel every send carries every unacknowledged command
  // (up to MAX_CMDS_PER_MSG), so a lost packet is covered by the next one; the host dedupes by seq.
  sendCommands(fresh, unacked) {
    if (!fresh.length || this.conn !== CONN.CONNECTED) return
    if (this.authority) { this.command('cmds', { id: this.id, cmds: fresh }); return }
    const link = this.link
    if (!link?.open) return
    if (link.stateOpen) {
      // 30 Hz unless a discrete action (fire/jump/reload) was just pressed — those go out immediately.
      const t = now()
      const urgent = fresh.some(c => c.fire || c.jump || c.reload)
      if (!urgent && t - (this.lastCmdSend || 0) < 30) return
      this.lastCmdSend = t
      link.sendState({ type: 'c', c: unacked.slice(-CMD_REDUNDANCY).map(encodeCmd) })
    } else {
      // Reliable fallback: each command is sent exactly once (the channel guarantees delivery).
      this.cmdBacklog = (this.cmdBacklog || []).concat(fresh)
      const t = now()
      const urgent = fresh.some(c => c.fire || c.jump || c.reload)
      if (!urgent && t - (this.lastCmdSend || 0) < 30) return
      this.lastCmdSend = t
      const batch = this.cmdBacklog.splice(0)
      for (let i = 0; i < batch.length; i += MAX_CMDS_PER_MSG) link.sendReliable({ type: 'c', c: batch.slice(i, i + MAX_CMDS_PER_MSG).map(encodeCmd) })
    }
  }

  chat(text) {
    if (this.isHost) this.relayChat(this.id, text)
    else this.link?.sendReliable({ type: 'chat', text })
  }

  // QA: simulate an abrupt network interruption (no goodbye message).
  dropLinkForTest() { try { this.link?.conn.peerConnection?.close() } catch {} }
}
