// Procedural canvas textures — original, tiny to ship, and crisp at low-poly scale.
import * as T from 'three'

function canvas(size = 256) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  return [c, c.getContext('2d')]
}
function noise(ctx, size, amount, alpha = 0.08, seed = 1) {
  let s = seed
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647)
  for (let i = 0; i < amount; i++) {
    const v = rnd() > 0.5 ? 255 : 0
    ctx.fillStyle = `rgba(${v},${v},${v},${rnd() * alpha})`
    const w = 1 + rnd() * 3
    ctx.fillRect(rnd() * size, rnd() * size, w, w)
  }
}
function finish(c, repeat = true, anisotropy = 8) {
  const t = new T.CanvasTexture(c)
  t.colorSpace = T.SRGBColorSpace
  if (repeat) t.wrapS = t.wrapT = T.RepeatWrapping
  t.anisotropy = anisotropy
  t.generateMipmaps = true
  t.minFilter = T.LinearMipmapLinearFilter
  return t
}

const cache = new Map()
const once = (key, make) => { if (!cache.has(key)) cache.set(key, make()); return cache.get(key) }

// 1 texture = 2m × 2m floor tile with a dark grout grid.
export const floorTexture = () => once('floor', () => {
  const [c, x] = canvas(256)
  x.fillStyle = '#9aa1a8'; x.fillRect(0, 0, 256, 256)
  noise(x, 256, 2600, 0.05, 7)
  for (const [ox, oy] of [[0, 0], [128, 0], [0, 128], [128, 128]]) {
    const g = x.createLinearGradient(ox, oy, ox + 128, oy + 128)
    g.addColorStop(0, '#ffffff10'); g.addColorStop(1, '#00000010')
    x.fillStyle = g; x.fillRect(ox + 3, oy + 3, 122, 122)
  }
  x.fillStyle = '#6f777f'
  for (const p of [0, 128]) { x.fillRect(p, 0, 4, 256); x.fillRect(0, p, 256, 4) }
  x.fillStyle = '#b4bac0'
  for (const p of [4, 132]) { x.fillRect(p, 0, 1, 256); x.fillRect(0, p, 256, 1) }
  return finish(c)
})

// White concrete (4m × 4m) with faint panel seams.
export const concreteTexture = () => once('concrete', () => {
  const [c, x] = canvas(256)
  x.fillStyle = '#eceae4'; x.fillRect(0, 0, 256, 256)
  noise(x, 256, 1400, 0.025, 3)
  x.fillStyle = '#d3d0c8'
  x.fillRect(0, 0, 256, 2); x.fillRect(0, 0, 2, 256); x.fillRect(128, 0, 1, 256)
  return finish(c)
})

export const redTexture = () => once('red', () => {
  const [c, x] = canvas(128)
  x.fillStyle = '#6f2a2f'; x.fillRect(0, 0, 128, 128)
  noise(x, 128, 500, 0.025, 11)
  x.fillStyle = '#6a252a'; x.fillRect(0, 0, 128, 2)
  return finish(c)
})

// Corrugated container steel: ribs every 0.25m (texture = 1m).
export const containerTexture = () => once('container', () => {
  const [c, x] = canvas(128)
  for (let i = 0; i < 4; i++) {
    const g = x.createLinearGradient(i * 32, 0, i * 32 + 32, 0)
    g.addColorStop(0, '#5d2025'); g.addColorStop(0.3, '#8b3439'); g.addColorStop(0.55, '#97393f'); g.addColorStop(0.8, '#6f272c'); g.addColorStop(1, '#5d2025')
    x.fillStyle = g; x.fillRect(i * 32, 0, 32, 128)
  }
  noise(x, 128, 600, 0.05, 5)
  return finish(c)
})

// Wooden crate face (UV 0..1 per face): planks with a frame and a diagonal brace.
export const crateTexture = () => once('crate', () => {
  const [c, x] = canvas(256)
  for (let i = 0; i < 6; i++) {
    x.fillStyle = ['#a77c4d', '#9c7143', '#ad8253', '#a17647', '#987040', '#a87d4e'][i]
    x.fillRect(0, i * 43, 256, 43)
    x.fillStyle = '#6e4e2c'; x.fillRect(0, i * 43, 256, 2)
  }
  noise(x, 256, 1800, 0.06, 9)
  x.strokeStyle = '#6a4a28'; x.lineWidth = 26; x.strokeRect(13, 13, 230, 230)
  x.strokeStyle = '#8b6439'; x.lineWidth = 18; x.strokeRect(13, 13, 230, 230)
  x.save(); x.beginPath(); x.rect(26, 26, 204, 204); x.clip()
  x.strokeStyle = '#6a4a28'; x.lineWidth = 24; x.beginPath(); x.moveTo(20, 236); x.lineTo(236, 20); x.stroke()
  x.strokeStyle = '#8b6439'; x.lineWidth = 16; x.stroke(); x.restore()
  x.fillStyle = '#3d3a36'
  for (const [px, py] of [[13, 13], [243, 13], [13, 243], [243, 243]]) x.fillRect(px - 5, py - 5, 10, 10)
  return finish(c, false)
})

export const gratingTexture = () => once('grating', () => {
  const [c, x] = canvas(128)
  x.fillStyle = '#4b555c'; x.fillRect(0, 0, 128, 128)
  x.fillStyle = '#2b3237'
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) x.fillRect(i * 16 + 3, j * 16 + 3, 10, 10)
  return finish(c)
})

export const roofTexture = () => once('roof', () => {
  const [c, x] = canvas(256)
  x.fillStyle = '#b9bcbc'; x.fillRect(0, 0, 256, 256)
  noise(x, 256, 3500, 0.06, 21)
  x.fillStyle = '#9fa3a4'
  for (const p of [0, 128]) { x.fillRect(p, 0, 3, 256); x.fillRect(0, p, 256, 3) }
  return finish(c)
})

export const stairTexture = () => once('stair', () => {
  const [c, x] = canvas(128)
  x.fillStyle = '#c8c8c2'; x.fillRect(0, 0, 128, 128)
  noise(x, 128, 1000, 0.05, 31)
  x.fillStyle = '#a9a9a3'; x.fillRect(0, 0, 128, 3); x.fillRect(0, 64, 128, 3)
  return finish(c)
})

export const rampTexture = () => once('ramp', () => {
  const [c, x] = canvas(128)
  x.fillStyle = '#b6b9b8'; x.fillRect(0, 0, 128, 128)
  noise(x, 128, 1000, 0.05, 41)
  x.fillStyle = '#8e9393'
  for (let i = 0; i < 4; i++) x.fillRect(0, i * 32, 128, 6)
  return finish(c)
})

// Distant skyline buildings: white façade with window grid (texture = 8m × 8m).
export const skylineTexture = () => once('skyline', () => {
  const [c, x] = canvas(256)
  x.fillStyle = '#e4e6e6'; x.fillRect(0, 0, 256, 256)
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    x.fillStyle = (i + j) % 3 ? '#93a9b8' : '#7d95a6'
    x.fillRect(i * 64 + 14, j * 64 + 18, 36, 26)
    x.fillStyle = '#cfd3d4'; x.fillRect(i * 64 + 14, j * 64 + 44, 36, 4)
  }
  return finish(c)
})

export const windowTexture = () => once('window', () => {
  const [c, x] = canvas(128)
  const g = x.createLinearGradient(0, 0, 128, 128)
  g.addColorStop(0, '#a4c4d8'); g.addColorStop(0.5, '#6f8fa6'); g.addColorStop(1, '#5b7487')
  x.fillStyle = '#c9cfd1'; x.fillRect(0, 0, 128, 128)
  x.fillStyle = g; x.fillRect(8, 8, 112, 112)
  x.fillStyle = '#c9cfd1'; x.fillRect(62, 8, 4, 112); x.fillRect(8, 62, 112, 4)
  x.fillStyle = '#ffffff30'; x.beginPath(); x.moveTo(14, 56); x.lineTo(50, 14); x.lineTo(60, 14); x.lineTo(24, 56); x.fill()
  return finish(c, false)
})

export function textTexture(text, { color = '#2a3640', size = 120, font = '900', width = 512, height = 160, bg = null } = {}) {
  const c = document.createElement('canvas')
  c.width = width; c.height = height
  const x = c.getContext('2d')
  if (bg) { x.fillStyle = bg; x.fillRect(0, 0, width, height) }
  x.fillStyle = color
  x.font = `${font} ${size}px "Barlow Condensed", "Arial Narrow", sans-serif`
  x.textAlign = 'center'; x.textBaseline = 'middle'
  x.fillText(text, width / 2, height / 2 + size * 0.04)
  return finish(c, false)
}

// Radial glow used for muzzle flashes, sparks and lights.
export const glowTexture = () => once('glow', () => {
  const [c, x] = canvas(128)
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64)
  g.addColorStop(0, '#ffffffff'); g.addColorStop(0.25, '#fff2c0ee'); g.addColorStop(0.55, '#ffb24a66'); g.addColorStop(1, '#ff800000')
  x.fillStyle = g; x.fillRect(0, 0, 128, 128)
  return finish(c, false, 1)
})

// Four-point star flash.
export const flashTexture = () => once('flash', () => {
  const [c, x] = canvas(256)
  x.translate(128, 128)
  for (let k = 0; k < 6; k++) {
    x.rotate(Math.PI / 3 + (k % 2) * 0.2)
    const g = x.createLinearGradient(0, 0, 124, 0)
    g.addColorStop(0, '#fffbe8'); g.addColorStop(0.35, '#ffd27a'); g.addColorStop(1, '#ff8a2000')
    x.fillStyle = g
    x.beginPath(); x.moveTo(0, -12 + (k % 2) * 5); x.lineTo(k % 2 ? 90 : 124, 0); x.lineTo(0, 12 - (k % 2) * 5); x.fill()
  }
  const r = x.createRadialGradient(0, 0, 0, 0, 0, 60)
  r.addColorStop(0, '#ffffff'); r.addColorStop(0.4, '#ffe39aaa'); r.addColorStop(1, '#ffa03000')
  x.fillStyle = r; x.beginPath(); x.arc(0, 0, 60, 0, Math.PI * 2); x.fill()
  return finish(c, false, 1)
})

export const decalTexture = () => once('decal', () => {
  const [c, x] = canvas(64)
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 30)
  g.addColorStop(0, '#0b0b0bff'); g.addColorStop(0.35, '#1d1d1dee'); g.addColorStop(0.6, '#33333355'); g.addColorStop(1, '#33333300')
  x.fillStyle = g; x.fillRect(0, 0, 64, 64)
  return finish(c, false, 1)
})
