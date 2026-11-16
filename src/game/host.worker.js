// The hosting peer runs the authoritative match in a worker so rendering hitches (or a hidden tab
// throttling requestAnimationFrame) never stall the simulation for everyone else.
import { Authority } from './authority.js'
import { DT, spawns } from './world.js'

const match = new Authority()
let last = performance.now(), acc = 0, broadcast = 0, statClock = 0, tickSum = 0, tickMax = 0, ticks = 0
const send = () => postMessage({ kind: 'state', snap: match.snapshot() })

self.onmessage = ({ data: m }) => {
  switch (m.type) {
    case 'add': match.add(m.id, m.name, m.bot); break
    case 'remove': match.remove(m.id); break
    case 'dropped': match.setConnected(m.id, false); break
    case 'rtt': match.setRtt(m.id, m.ms); break
    case 'cmds': match.queue(m.id, m.cmds, m.ping); break
    case 'start': match.start(); break
    case 'lobby': match.returnToLobby(); break
    case 'snapshot': send(); break
  }
  // Development-only fixtures for automated browser QA. Combat still runs through normal code.
  if (!import.meta.env.DEV) return
  if (m.type === 'qaDuel') {
    let i = 0
    for (const p of match.players.values()) {
      Object.assign(p, { x: 0, y: 0, z: -20 - i * 8, yaw: i ? Math.PI : 0, pitch: 0, hp: 100, armor: 50, protect: 0, respawn: 0, vx: 0, vy: 0, vz: 0 })
      if (p.ai) p.ai.losT = 99
      i++
    }
    match.phase = 'playing'
    send()
  }
  if (m.type === 'qaEnd') match.timer = 0.01
  if (m.type === 'qaFreezeBots') for (const p of match.players.values()) if (p.bot) p.bot = 'frozen'
  if (m.type === 'qaTeleport') { const p = match.players.get(m.id), s = spawns[m.spawn % spawns.length]; if (p) Object.assign(p, { x: s[0], y: s[1], z: s[2] }) }
  if (m.type === 'qaEmpty') { const p = match.players.get(m.id); if (p) { p.ammo = [0, 0, 0]; p.reserve = [0, 0, 0] } }
  if (m.type === 'qaKill') { const p = match.players.get(m.id); if (p) match.damage(p, null, 999, 'body') }
}

setInterval(() => {
  const now = performance.now()
  const elapsed = Math.min(0.25, (now - last) / 1000)
  last = now
  acc += elapsed
  broadcast += elapsed
  statClock += elapsed
  while (acc >= DT) {
    const t0 = performance.now()
    match.tick(DT)
    const d = performance.now() - t0
    tickSum += d; ticks++; if (d > tickMax) tickMax = d
    acc -= DT
  }
  if (broadcast >= 1 / 30) { broadcast = 0; send() }
  if (statClock >= 1) {
    postMessage({ kind: 'stats', tickMs: ticks ? tickSum / ticks : 0, tickMaxMs: tickMax })
    statClock = tickSum = tickMax = ticks = 0
  }
}, 1000 / 120)
