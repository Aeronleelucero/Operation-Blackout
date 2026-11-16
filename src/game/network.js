// PeerJS room transport. The host owns the authoritative worker and relays snapshots; clients only
// send sequenced input commands. Swapping this class for a WebSocket client to a dedicated server
// only requires keeping the same message shapes: {type:'cmds'} up, {type:'state'} down.
import { MAX_PLAYERS } from './authority.js'
import Peer from 'peerjs'

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const PREFIX = 'ob3d-'

export class Room {
  constructor(onState, onStatus, onChat) {
    this.onState = onState
    this.onStatus = onStatus
    this.onChat = onChat
    this.peer = null
    this.connections = new Map()
    this.authority = null
    this.id = 'local'
    this.code = ''
    this.isHost = false
    this.ping = 0
    this.session = 0
    this.chatTimes = new Map()
    this.lastState = 0
    this.latestState = null
  }

  status(text) { this.onStatus(text) }

  cleanup() {
    this.session++
    clearTimeout(this.timeout)
    clearInterval(this.watchdog)
    this.peer?.destroy()
    this.peer = null
    this.connections.clear()
    this.authority?.terminate()
    this.authority = null
    this.isHost = false
    this.code = ''
    this.latestState = null
    this.ping = 0
  }

  createAuthority() {
    this.authority = new Worker(new URL('./host.worker.js', import.meta.url), { type: 'module' })
    this.authority.onmessage = ({ data: state }) => {
      this.latestState = state
      this.onState(state)
      this.broadcast({ type: 'state', state })
    }
    this.authority.onerror = () => this.status('Host simulation stopped. Please restart the room.')
  }

  command(type, data = {}) { this.authority?.postMessage({ type, ...data }) }

  practice(name) {
    this.cleanup()
    this.id = 'local'
    this.isHost = true
    this.createAuthority()
    this.command('add', { id: this.id, name })
    for (let i = 0; i < 5; i++) this.command('add', { id: 'bot-' + i, name: ['Viper', 'Rook', 'Ghost', 'Echo', 'Flint'][i], bot: true })
    this.command('start')
    this.publish()
  }

  makeCode() {
    const bytes = crypto.getRandomValues(new Uint8Array(6))
    return [...bytes].map(n => CODE_CHARS[n % CODE_CHARS.length]).join('')
  }

  async open(host, code, name) {
    this.cleanup()
    this.isHost = host
    this.code = host ? this.makeCode() : String(code).trim().toUpperCase()
    if (!/^[A-Z2-9]{6}$/.test(this.code)) { this.code = ''; throw new Error('Enter the six-character room code.') }
    const session = this.session
    this.status(host ? 'CREATING ROOM…' : 'CONNECTING…')
    if (host) this.createAuthority()
    const peer = this.peer = new Peer(host ? PREFIX + this.code : undefined, { debug: 0 })
    this.timeout = setTimeout(() => {
      if (session === this.session) { this.status('Connection timed out. Check the code or try another network.'); this.cleanup() }
    }, 18000)

    peer.on('open', id => {
      if (session !== this.session) return
      this.id = id
      if (host) {
        clearTimeout(this.timeout)
        // Drop peers that stop sending (tab killed, network gone) without a clean close.
        this.watchdog = setInterval(() => {
          if (session !== this.session) return
          for (const [peerId, c] of this.connections) if (performance.now() - (c.lastSeen || 0) > 12000) {
            this.connections.delete(peerId)
            try { c.close() } catch {}
            this.command('remove', { id: peerId })
            this.publish()
          }
        }, 1000)
        this.command('add', { id, name })
        this.status('ROOM ' + this.code + ' · READY · SHARE THE CODE')
        this.publish()
      } else {
        const conn = peer.connect(PREFIX + this.code, { reliable: true, serialization: 'json', metadata: { name: String(name).slice(0, 18) } })
        this.bind(conn, session)
      }
    })
    peer.on('connection', conn => {
      if (!host || this.connections.size >= MAX_PLAYERS - 1) {
        conn.on('open', () => { conn.send({ type: 'reject', message: 'Room is full.' }); setTimeout(() => conn.close(), 100) })
        return
      }
      this.bind(conn, session)
    })
    peer.on('error', e => {
      if (session !== this.session) return
      this.status(({ 'peer-unavailable': 'Room not found. Check the code.', 'unavailable-id': 'Code already in use. Host again.', network: 'Signaling connection unavailable.' })[e.type] || 'Connection failed: ' + e.type)
      if (e.type !== 'network' || !this.connections.size) this.cleanup()
    })
    peer.on('disconnected', () => {
      if (session !== this.session) return
      this.status('Room service disconnected. Existing players stay connected.')
      try { peer.reconnect() } catch {}
    })
  }

  bind(conn, session) {
    conn.on('open', () => {
      if (session !== this.session || (this.isHost && this.connections.size >= MAX_PLAYERS - 1)) { conn.close(); return }
      clearTimeout(this.timeout)
      conn.lastSeen = performance.now()
      this.connections.set(conn.peer, conn)
      if (this.isHost) {
        this.command('add', { id: conn.peer, name: conn.metadata?.name })
        this.publish()
      } else {
        this.status('CONNECTED · ROOM ' + this.code)
        this.lastState = performance.now()
        clearInterval(this.watchdog)
        // Timer-driven (not rAF) so background tabs keep the host's heartbeat alive.
        this.watchdog = setInterval(() => {
          if (session !== this.session) return
          if (performance.now() - this.lastState > 10000) { conn.close(); return }
          if (conn.open) try { conn.send({ type: 'ping', at: performance.now() }) } catch {}
        }, 1000)
      }
    })
    conn.on('data', m => {
      if (session !== this.session || !m || typeof m !== 'object') return
      conn.lastSeen = performance.now()
      if (this.isHost) {
        if (m.type === 'cmds') this.command('cmds', { id: conn.peer, cmds: m.cmds, ping: m.ping })
        if (m.type === 'ping') conn.send({ type: 'pong', at: m.at })
        if (m.type === 'chat') this.relayChat(conn.peer, m.text)
      } else {
        if (m.type === 'state') { this.lastState = performance.now(); this.onState(m.state) }
        if (m.type === 'pong') this.ping = Math.max(0, Math.round(performance.now() - m.at))
        if (m.type === 'chat') this.onChat(m.name, m.text)
        if (m.type === 'reject') this.status(m.message)
      }
    })
    conn.on('close', () => {
      if (session !== this.session) return
      const known = this.connections.delete(conn.peer)
      if (this.isHost) {
        if (!known) return
        this.command('remove', { id: conn.peer })
        this.publish()
      } else {
        this.cleanup()
        this.status('HOST DISCONNECTED · Return to lobby to join another room.')
        this.onState({ phase: 'disconnected', players: [], events: [] })
      }
    })
    conn.on('error', () => this.status('Peer connection interrupted.'))
  }

  broadcast(m) {
    for (const c of this.connections.values()) if (c.open) try { c.send(m) } catch {}
  }

  publish() { this.command('snapshot') }

  start() { if (this.isHost && this.authority) { this.command('start'); this.publish() } }

  sendCommands(cmds) {
    if (!cmds.length) return
    if (this.authority) this.command('cmds', { id: this.id, cmds, ping: 0 })
    else for (const c of this.connections.values()) if (c.open) try { c.send({ type: 'cmds', cmds, ping: this.ping }) } catch {}
  }

  relayChat(id, text) {
    if (typeof text !== 'string' || Date.now() - (this.chatTimes.get(id) || 0) < 600) return
    this.chatTimes.set(id, Date.now())
    const p = this.latestState?.players.find(p => p.id === id)
    if (!p) return
    text = text.trim().slice(0, 140)
    if (!text) return
    this.onChat(p.name, text)
    this.broadcast({ type: 'chat', name: p.name, text })
  }

  chat(text) {
    if (this.isHost) this.relayChat(this.id, text)
    else for (const c of this.connections.values()) if (c.open) c.send({ type: 'chat', text })
  }
}
