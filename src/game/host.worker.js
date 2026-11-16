// The hosting peer runs the authoritative match in a worker so rendering hitches (or a hidden tab
// throttling requestAnimationFrame) never stall the simulation for everyone else.
import { Authority } from './authority.js'
import { DT, spawns } from './world.js'

const match = new Authority()
let last = performance.now(), acc = 0, broadcast = 0

self.onmessage = ({ data: m }) => {
  if (m.type === 'add') match.add(m.id, m.name, m.bot)
  if (m.type === 'remove') match.remove(m.id)
  if (m.type === 'cmds') match.queue(m.id, m.cmds, m.ping)
  if (m.type === 'start') match.start()
  if (m.type === 'snapshot') postMessage(match.snapshot())
  // Development-only fixtures for automated browser QA. Combat still runs through normal code.
  if (import.meta.env.DEV && m.type === 'qaDuel') {
    let i = 0
    for (const p of match.players.values()) {
      Object.assign(p, { x: 0, y: 0, z: -20 - i * 8, yaw: i ? Math.PI : 0, pitch: 0, hp: 100, armor: 50, protect: 0, respawn: 0, vx: 0, vy: 0, vz: 0 })
      if (p.ai) p.ai.losT = 99
      i++
    }
    match.phase = 'playing'
    postMessage(match.snapshot())
  }
  if (import.meta.env.DEV && m.type === 'qaEnd') match.timer = 0.01
  if (import.meta.env.DEV && m.type === 'qaFreezeBots') for (const p of match.players.values()) if (p.bot) p.bot = 'frozen'
  if (import.meta.env.DEV && m.type === 'qaTeleport') { const p = match.players.get(m.id), s = spawns[m.spawn % spawns.length]; if (p) Object.assign(p, { x: s[0], y: s[1], z: s[2] }) }
}

setInterval(() => {
  const now = performance.now()
  acc += Math.min(0.25, (now - last) / 1000)
  broadcast += Math.min(0.25, (now - last) / 1000)
  last = now
  while (acc >= DT) { match.tick(DT); acc -= DT }
  if (broadcast >= 1 / 30) { broadcast = 0; postMessage(match.snapshot()) }
}, 1000 / 120)
