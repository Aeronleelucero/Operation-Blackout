// Shared simulation: map geometry, collision, movement and weapon logic.
// No three.js imports — this module runs in the host worker, in node tests and on every client
// (client-side prediction replays exactly the same code the host runs).

export const DT = 1 / 60
export const ARENA = 44 // inner half-size of the playable square (meters)
export const PLAYER = { radius: 0.36, height: 1.8, crouch: 1.15, eye: 0.17, step: 0.55, airStep: 0.34 }
export const MOVE = {
  gravity: 25, jump: 8.6, walk: 8.6, sprint: 11.4, crouch: 4.4, aim: 6.2,
  accel: 12, airAccel: 14, airCap: 1.15, friction: 6.2, stopSpeed: 3.2,
  slideTime: 0.8, slideBoost: 4.2, slideFriction: 0.7, slideMin: 6.6, slideCooldown: 0.45, slideCap: 17,
  maxSpeed: 20,
}

export const WEAPONS = [
  {
    id: 'rifle', name: 'VX-7 CARBINE', caliber: '5.56', mag: 30, reserve: 120, interval: 0.1, auto: true, reload: 2.1,
    damage: { head: 68, body: 27, legs: 21 }, range: 160,
    spread: { hip: 0.026, ads: 0.0012, move: 0.0024, air: 0.055 }, bloom: 0.0055, bloomMax: 0.028, bloomRecover: 0.09,
    kick: 0.0105, adsZoom: 1.45, adsSens: 0.62,
  },
  {
    id: 'pistol', name: 'P-11 SIDEARM', caliber: '9MM', mag: 12, reserve: 48, interval: 0.15, auto: false, reload: 1.45,
    damage: { head: 58, body: 24, legs: 18 }, range: 100,
    spread: { hip: 0.018, ads: 0.0025, move: 0.0016, air: 0.04 }, bloom: 0.009, bloomMax: 0.03, bloomRecover: 0.12,
    kick: 0.017, adsZoom: 1.2, adsSens: 0.8,
  },
]

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

// ---------------------------------------------------------------------------------------------
// Map construction. Everything inside both() is placed twice: once as written and once rotated
// 180° around the origin, so every route has a fair mirrored counterpart.
// ---------------------------------------------------------------------------------------------
export const boxes = []
export const ramps = []
export const spawns = []
export const navPoints = []

const flip = { n: 's', s: 'n', e: 'w', w: 'e' }
function box(x, y, z, w, h, d, kind = 'block') {
  const b = { x, y, z, w, h, d, kind, id: boxes.length }
  boxes.push(b)
  return b
}
const ground = (x, z, w, d, h, kind, base = 0) => box(x, base + h / 2, z, w, h, d, kind)
const both = fn => { fn(1); fn(-1) }

function parapets(cx, cz, w, d, top, gaps, height = 0.9, t = 0.3) {
  const sides = {
    n: { axis: 'x', fixed: cz - d / 2 + t / 2, from: cx - w / 2, to: cx + w / 2, center: cx },
    s: { axis: 'x', fixed: cz + d / 2 - t / 2, from: cx - w / 2, to: cx + w / 2, center: cx },
    w: { axis: 'z', fixed: cx - w / 2 + t / 2, from: cz - d / 2 + t, to: cz + d / 2 - t, center: cz },
    e: { axis: 'z', fixed: cx + w / 2 - t / 2, from: cz - d / 2 + t, to: cz + d / 2 - t, center: cz },
  }
  for (const [name, S] of Object.entries(sides)) {
    const holes = gaps.filter(g => g.side === name).map(g => [S.center + g.offset - g.width / 2, S.center + g.offset + g.width / 2]).sort((a, b) => a[0] - b[0])
    let cursor = S.from
    const seg = (a, b) => {
      if (b - a < 0.05) return
      if (S.axis === 'x') box((a + b) / 2, top + height / 2, S.fixed, b - a, height, t, 'parapet')
      else box(S.fixed, top + height / 2, (a + b) / 2, t, height, b - a, 'parapet')
    }
    for (const [a, b] of holes) { seg(cursor, a); cursor = b }
    seg(cursor, S.to)
  }
}

const mirrorOpenings = (s, list) => list.map(o => (s > 0 ? o : { ...o, side: flip[o.side], offset: -o.offset }))

// Hollow building with doorways, lintels, a walkable roof slab and roof parapets.
function hollow(s, cx, cz, w, d, h, { doors = [], gaps = [], t = 0.6, parapet = 0.9 } = {}) {
  cx *= s; cz *= s
  doors = mirrorOpenings(s, doors); gaps = mirrorOpenings(s, gaps)
  const sides = {
    n: { axis: 'x', fixed: cz - d / 2 + t / 2, from: cx - w / 2, to: cx + w / 2, center: cx },
    s: { axis: 'x', fixed: cz + d / 2 - t / 2, from: cx - w / 2, to: cx + w / 2, center: cx },
    w: { axis: 'z', fixed: cx - w / 2 + t / 2, from: cz - d / 2 + t, to: cz + d / 2 - t, center: cz },
    e: { axis: 'z', fixed: cx + w / 2 - t / 2, from: cz - d / 2 + t, to: cz + d / 2 - t, center: cz },
  }
  for (const [name, S] of Object.entries(sides)) {
    const holes = doors.filter(o => o.side === name)
      .map(o => ({ a: S.center + o.offset - o.width / 2, b: S.center + o.offset + o.width / 2, h: o.height || 2.7 }))
      .sort((p, q) => p.a - q.a)
    const seg = (a, b, y0, y1) => {
      if (b - a < 0.02 || y1 - y0 < 0.02) return
      if (S.axis === 'x') box((a + b) / 2, (y0 + y1) / 2, S.fixed, b - a, y1 - y0, t, y0 > 0 ? 'lintel' : 'wall')
      else box(S.fixed, (y0 + y1) / 2, (a + b) / 2, t, y1 - y0, b - a, y0 > 0 ? 'lintel' : 'wall')
    }
    let cursor = S.from
    for (const hole of holes) { seg(cursor, hole.a, 0, h); seg(hole.a, hole.b, hole.h, h); cursor = hole.b }
    seg(cursor, S.to, 0, h)
  }
  box(cx, h + 0.2, cz, w, 0.4, d, 'roof')
  if (parapet) parapets(cx, cz, w, d, h + 0.4, gaps, parapet)
}

function tower(s, cx, cz, w, d, h, gaps = []) {
  cx *= s; cz *= s
  ground(cx, cz, w, d, h, 'block')
  parapets(cx, cz, w, d, h, mirrorOpenings(s, gaps))
}

// Solid stepped stairs (each step is a full-height block so there is nothing to fall through).
function stairs(s, x0, z0, dx, dz, width, steps, rise = 0.4, run = 0.6) {
  for (let i = 0; i < steps; i++) {
    const h = (i + 1) * rise
    ground(s * (x0 + dx * (i + 0.5) * run), s * (z0 + dz * (i + 0.5) * run), dx ? run : width, dz ? run : width, h, 'stair')
  }
}

// Wedge ramp. axis is the climb direction, sign=+1 means the high end is at +axis.
function ramp(s, x, z, w, d, h, axis, sign) { ramps.push({ x: s * x, z: s * z, w, d, h, axis, sign: sign * s }) }
const crate = (s, x, z, size = 1.3, base = 0) => ground(s * x, s * z, size, size, size, 'crate', base)
const barrier = (s, x, z, w, d) => ground(s * x, s * z, w, d, 1.1, 'barrier')
const container = (s, x, z, along, base = 0) => ground(s * x, s * z, along === 'x' ? 6.1 : 2.5, along === 'x' ? 2.5 : 6.1, 2.6, 'container', base)
const barrel = (s, x, z) => ground(s * x, s * z, 0.75, 0.75, 1.05, 'barrel')
const spawn = (s, x, y, z) => spawns.push([s * x, y, s * z])
const nav = (s, x, z) => navPoints.push([s * x, s * z])

// Perimeter: tall white compound walls with the red lower band.
for (const z of [-45, 45]) ground(0, z, 92, 2, 9, 'perimeter')
for (const x of [-45, 45]) ground(x, 0, 2, 88, 9, 'perimeter')

// Center: two containers with a third bridged on top form an arch you can climb.
ground(0, 0, 7.8, 2.5, 2.6, 'container', 2.6)

both(s => {
  // NW warehouse — hollow, four doorways, exterior stairs up to the roof, catwalk exit east.
  hollow(s, -30, -34, 20, 14, 5.2, {
    doors: [{ side: 's', offset: 6, width: 2.8 }, { side: 'e', offset: 2.2, width: 2.8 }, { side: 'w', offset: 3, width: 2.2 }, { side: 'n', offset: -4, width: 2.2 }],
    gaps: [{ side: 's', offset: -1.2, width: 2.6 }, { side: 'e', offset: -2, width: 2.8 }],
  })
  stairs(s, -39, -25.8, 1, 0, 2.4, 14)
  crate(s, -36.6, -38.6, 1.4); crate(s, -35.1, -38.9, 1.2); crate(s, -36.6, -38.6, 1.0, 1.4)
  ground(s * -28.5, s * -36.5, 4, 0.6, 1.1, 'barrier')
  crate(s, -23.6, -38.4, 1.3); crate(s, -26, -30.2, 1.2)
  barrel(s, -38.8, -29.2); barrel(s, -38, -28.6)

  // NE tower — solid block, long ramp up the south face, catwalk entry on the west parapet.
  tower(s, 31, -34, 12, 14, 5.6, [{ side: 's', offset: 0, width: 4.6 }, { side: 'w', offset: -2, width: 2.8 }])
  ramp(s, 31, -19, 4.4, 16, 5.6, 'z', -1)
  ground(s * 33.6, s * -38.6, 2.4, 1.8, 1.2, 'metal', 5.6)
  ground(s * 27.4, s * -39.4, 1.4, 1.2, 0.8, 'metal', 5.6)

  // Elevated catwalk linking the warehouse roof to the tower roof over the north yard.
  box(s * 2.5, 5.45, s * -36, 45, 0.3, 2.6, 'catwalk')
  for (const z of [-37.25, -34.75]) box(s * 2.5, 6.05, s * z, 45, 0.9, 0.1, 'rail')
  for (const x of [-9, 2.5, 14]) ground(s * x, s * -36, 0.5, 0.5, 5.3, 'steel')

  // North yard: pump house, freight container and hard cover.
  ground(s * -4, s * -39.5, 8, 4, 2.8, 'block')
  crate(s, 1.2, -38.6, 1.3)
  container(s, 12, -41.5, 'x')
  barrier(s, -10, -30, 4, 0.7); barrier(s, 16, -30, 0.7, 4)
  crate(s, 8, -31, 1.4); crate(s, 9.4, -30.6, 1.1)

  // Office: low hollow building whose roof is reached by a crate staircase on the west side.
  hollow(s, -12, -16, 9, 8, 3.2, {
    doors: [{ side: 's', offset: 1.5, width: 2.2 }, { side: 'e', offset: 0, width: 2.2 }, { side: 'n', offset: -2, width: 2.2 }],
    gaps: [{ side: 'w', offset: 2, width: 2.4 }], parapet: 0.6,
  })
  crate(s, -17.4, -12.8, 1.2); crate(s, -17.4, -14.0, 1.2); crate(s, -17.4, -14.0, 1.2, 1.2)
  crate(s, -10, -18.2, 1.2)

  // West lane and its alley cover.
  container(s, -33, -12, 'z')
  crate(s, -36.6, -6, 1.4); crate(s, -36.6, -4.6, 1.2)
  barrier(s, -27, -6, 0.7, 4)
  barrel(s, -40, -14); barrel(s, -40.7, -15)

  // Mid approaches.
  barrier(s, -6, -8, 3.5, 0.7); crate(s, -7, -11, 1.3)
  barrier(s, 3, -17, 4, 0.7)

  // Center container (mirrored pair) + climbing crates.
  container(s, -2.6, 0, 'z')
  crate(s, -5.1, 2.4, 1.2); crate(s, -2.6, -2.0, 1.2, 2.6)

  // East lane and east alley.
  crate(s, 24, -16, 1.4); crate(s, 22.7, -16.3, 1.1)
  barrier(s, 38, -18, 0.7, 4)
  crate(s, 40.5, -33, 1.4); crate(s, 41.6, -31.8, 1.2); barrel(s, 39, -38.5)

  spawn(s, -30, 0, -33); spawn(s, -42, 0, -21); spawn(s, 31, 5.6, -34)
  spawn(s, 0, 0, -31); spawn(s, -12, 0, -15.5); spawn(s, 22, 0, -6)
  for (const [x, z] of [[-30, -33], [-42, -21], [0, -31], [-12, -15.5], [22, -6], [-20, -22], [0, -12], [-20, 0], [-38, 0], [38, -24],
    [-24, -26], [12, -24], [-42, -42], [40, -42], [8, -8], [-30, -12], [28, -2]]) nav(s, x, z)
})

// ---------------------------------------------------------------------------------------------
// Spatial grid (broadphase) for collision queries.
// ---------------------------------------------------------------------------------------------
const CELL = 4
const grid = new Map()
let stamp = 0
const cellKey = (cx, cz) => (cx + 64) * 256 + (cz + 64)
for (const b of boxes) {
  for (let cx = Math.floor((b.x - b.w / 2) / CELL); cx <= Math.floor((b.x + b.w / 2) / CELL); cx++)
    for (let cz = Math.floor((b.z - b.d / 2) / CELL); cz <= Math.floor((b.z + b.d / 2) / CELL); cz++) {
      const k = cellKey(cx, cz)
      if (!grid.has(k)) grid.set(k, [])
      grid.get(k).push(b)
    }
}
const scratch = []
export function nearbyBoxes(x, z, r, out = scratch) {
  stamp++
  out.length = 0
  for (let cx = Math.floor((x - r) / CELL); cx <= Math.floor((x + r) / CELL); cx++)
    for (let cz = Math.floor((z - r) / CELL); cz <= Math.floor((z + r) / CELL); cz++) {
      const list = grid.get(cellKey(cx, cz))
      if (list) for (const b of list) if (b._s !== stamp) { b._s = stamp; out.push(b) }
    }
  return out
}

export function rampHeight(r, x, z) {
  const a = r.axis === 'z' ? z - r.z : x - r.x
  const b = r.axis === 'z' ? x - r.x : z - r.z
  if (Math.abs(b) > r.w / 2 || Math.abs(a) > r.d / 2) return null
  return r.h * ((a / r.d) * r.sign + 0.5)
}
const rampHalf = r => (r.axis === 'z' ? [r.w / 2, r.d / 2] : [r.d / 2, r.w / 2])

// Highest walkable surface under a circle that is at most maxTop high.
function support(x, z, r, maxTop) {
  let best = Math.abs(x) < 46 && Math.abs(z) < 46 ? 0 : -Infinity
  for (const b of nearbyBoxes(x, z, r + 0.1)) {
    const top = b.y + b.h / 2
    if (top > maxTop || top <= best) continue
    if (Math.abs(x - b.x) < b.w / 2 + r * 0.7 && Math.abs(z - b.z) < b.d / 2 + r * 0.7) best = top
  }
  for (const rp of ramps) {
    const [hw, hd] = rampHalf(rp)
    const h = rampHeight(rp, clamp(x, rp.x - hw, rp.x + hw), clamp(z, rp.z - hd, rp.z + hd))
    if (h !== null && Math.abs(x - rp.x) < hw + r * 0.5 && Math.abs(z - rp.z) < hd + r * 0.5 && h <= maxTop && h > best) best = h
  }
  return best
}

function blockedAbove(p, height) {
  for (const b of nearbyBoxes(p.x, p.z, PLAYER.radius)) {
    const bottom = b.y - b.h / 2
    if (bottom < p.y + 0.05 || bottom > p.y + height) continue
    if (Math.abs(p.x - b.x) < b.w / 2 + PLAYER.radius && Math.abs(p.z - b.z) < b.d / 2 + PLAYER.radius) return true
  }
  return false
}

// Push a vertical cylinder out of an axis-aligned rectangle and clip velocity into the surface.
function pushOut(p, minX, maxX, minZ, maxZ, r) {
  const qx = clamp(p.x, minX, maxX), qz = clamp(p.z, minZ, maxZ)
  let dx = p.x - qx, dz = p.z - qz
  const d2 = dx * dx + dz * dz
  if (d2 >= r * r) return
  let nx, nz, pen
  if (d2 > 1e-10) {
    const d = Math.sqrt(d2)
    nx = dx / d; nz = dz / d; pen = r - d
  } else {
    const options = [[p.x - minX, -1, 0], [maxX - p.x, 1, 0], [p.z - minZ, 0, -1], [maxZ - p.z, 0, 1]].sort((a, b) => a[0] - b[0])
    pen = options[0][0] + r; nx = options[0][1]; nz = options[0][2]
  }
  p.x += nx * pen; p.z += nz * pen
  const vn = p.vx * nx + p.vz * nz
  if (vn < 0) { p.vx -= vn * nx; p.vz -= vn * nz }
}

function collide(p, dt, wasGround, jumped) {
  const r = PLAYER.radius
  const steps = Math.max(1, Math.ceil(Math.max(Math.abs(p.vx), Math.abs(p.vz), Math.abs(p.vy)) * dt / 0.2))
  const h = dt / steps
  let landed = false
  for (let i = 0; i < steps; i++) {
    const grounded = p.ground
    const stepTol = grounded ? PLAYER.step : (p.vy < 2 ? PLAYER.airStep : 0.02)
    p.x += p.vx * h; p.z += p.vz * h
    for (let pass = 0; pass < 2; pass++) {
      for (const b of nearbyBoxes(p.x, p.z, r + 0.2)) {
        const top = b.y + b.h / 2, bottom = b.y - b.h / 2
        if (top <= p.y + stepTol || bottom >= p.y + p.height - 0.02) continue
        pushOut(p, b.x - b.w / 2, b.x + b.w / 2, b.z - b.d / 2, b.z + b.d / 2, r)
      }
      for (const rp of ramps) {
        const [hw, hd] = rampHalf(rp)
        const sx = clamp(p.x, rp.x - hw, rp.x + hw), sz = clamp(p.z, rp.z - hd, rp.z + hd)
        const surface = rampHeight(rp, sx, sz)
        if (surface === null || surface <= p.y + stepTol) continue
        pushOut(p, rp.x - hw, rp.x + hw, rp.z - hd, rp.z + hd, r)
      }
    }
    p.x = clamp(p.x, -ARENA + r, ARENA - r); p.z = clamp(p.z, -ARENA + r, ARENA - r)

    let y = p.y + p.vy * h
    if (p.vy <= 0) {
      const sup = support(p.x, p.z, r, p.y + stepTol)
      if (grounded && !jumped && sup >= p.y - 0.62) y = Math.max(y, sup) // stick to stairs/ramps going down
      if (y <= sup) {
        if (!grounded) landed = true
        y = sup; p.vy = 0; p.ground = true
      } else p.ground = false
    } else {
      p.ground = false
      for (const b of nearbyBoxes(p.x, p.z, r)) {
        const bottom = b.y - b.h / 2
        if (bottom < p.y + p.height - 0.05 || bottom > y + p.height) continue
        if (Math.abs(p.x - b.x) < b.w / 2 + r * 0.8 && Math.abs(p.z - b.z) < b.d / 2 + r * 0.8) { y = bottom - p.height; p.vy = 0 }
      }
    }
    p.y = y
  }
  return landed
}

function accelerate(p, wx, wz, wishSpeed, accel, dt) {
  const add = wishSpeed - (p.vx * wx + p.vz * wz)
  if (add <= 0) return
  const a = Math.min(accel * wishSpeed * dt, add)
  p.vx += a * wx; p.vz += a * wz
}
function airAccelerate(p, wx, wz, wishSpeed, dt) {
  if (!wishSpeed) return
  const capped = Math.min(wishSpeed, MOVE.airCap)
  const add = capped - (p.vx * wx + p.vz * wz)
  if (add <= 0) return
  const a = Math.min(MOVE.airAccel * wishSpeed * dt, add)
  p.vx += a * wx; p.vz += a * wz
}
function friction(p, amount, dt) {
  const speed = Math.hypot(p.vx, p.vz)
  if (speed < 0.01) { p.vx = p.vz = 0; return }
  const drop = Math.max(speed, MOVE.stopSpeed) * amount * dt
  const k = Math.max(0, speed - drop) / speed
  p.vx *= k; p.vz *= k
}

// Deterministic per-shot random numbers (identical on host and predicting client).
function hash(n) {
  n = (n + 0x6d2b79f5) | 0
  let t = Math.imul(n ^ (n >>> 15), 1 | n)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

export function forward(yaw, pitch) {
  return { x: -Math.sin(yaw) * Math.cos(pitch), y: Math.sin(pitch), z: -Math.cos(yaw) * Math.cos(pitch) }
}
export const eyePosition = p => ({ x: p.x, y: p.y + p.height - PLAYER.eye, z: p.z })

export function currentSpread(p) {
  const W = WEAPONS[p.weapon]
  const speed = Math.hypot(p.vx, p.vz)
  let s = p.aiming ? W.spread.ads : W.spread.hip
  s += speed * W.spread.move * (p.aiming ? 0.35 : 1)
  if (!p.ground) s += W.spread.air
  s += p.bloom * (p.aiming ? 0.3 : 1)
  if (p.crouched && p.ground) s *= 0.75
  return s
}

export function shotDirection(p) {
  const f = forward(p.yaw, p.pitch)
  const right = { x: Math.cos(p.yaw), y: 0, z: -Math.sin(p.yaw) }
  const up = { x: right.y * f.z - right.z * f.y, y: right.z * f.x - right.x * f.z, z: right.x * f.y - right.y * f.x }
  const spread = currentSpread(p)
  const a = hash(p.seed * 7919 + p.shots * 2) * Math.PI * 2
  const m = Math.sqrt(hash(p.seed * 7919 + p.shots * 2 + 1)) * spread
  const d = {
    x: f.x + (right.x * Math.cos(a) + up.x * Math.sin(a)) * m,
    y: f.y + (right.y * Math.cos(a) + up.y * Math.sin(a)) * m,
    z: f.z + (right.z * Math.cos(a) + up.z * Math.sin(a)) * m,
  }
  const l = Math.hypot(d.x, d.y, d.z)
  return { x: d.x / l, y: d.y / l, z: d.z / l }
}

// ---------------------------------------------------------------------------------------------
// Players
// ---------------------------------------------------------------------------------------------
export function makePlayer(id, name, index = 0) {
  const s = spawns[index % spawns.length]
  return {
    id, name, x: s[0], y: s[1], z: s[2], vx: 0, vy: 0, vz: 0, yaw: Math.atan2(s[0], s[2]), pitch: 0,
    ground: true, height: PLAYER.height, crouched: false, slide: 0, slideCd: 0, crouchHeld: false,
    sprinting: false, aiming: false,
    hp: 100, armor: 50, weapon: 0, ammo: WEAPONS.map(w => w.mag), reserve: WEAPONS.map(w => w.reserve),
    reload: 0, cooldown: 0, swap: 0, bloom: 0, shots: 0, fireHeld: false, seed: (index * 977 + 13) % 100000,
    kills: 0, deaths: 0, score: 0, streak: 0, protect: 3, respawn: 0, color: index % 12, ack: 0, ping: 0,
  }
}

export function resetLoadout(p) {
  p.hp = 100; p.armor = 50; p.weapon = 0
  p.ammo = WEAPONS.map(w => w.mag); p.reserve = WEAPONS.map(w => w.reserve)
  p.reload = p.cooldown = p.swap = p.bloom = 0
  p.vx = p.vy = p.vz = 0; p.slide = 0; p.height = PLAYER.height; p.crouched = false; p.ground = true
}

// One fixed-step tick of movement + weapon state. Returns what happened so the caller can
// resolve hits (host) or play effects (client).
export function simulate(p, cmd, dt = DT, frozen = false) {
  const ev = { fired: false, jumped: false, landed: false, impact: 0, reloadStart: false, reloaded: false, swapped: false, empty: false, slid: false }
  if (Number.isFinite(cmd.yaw)) p.yaw = cmd.yaw
  if (Number.isFinite(cmd.pitch)) p.pitch = clamp(cmd.pitch, -1.5, 1.5)
  if (p.hp <= 0) return ev
  if (frozen) cmd = { yaw: p.yaw, pitch: p.pitch }

  const wasGround = p.ground
  const fwd = (cmd.w ? 1 : 0) - (cmd.s ? 1 : 0), side = (cmd.d ? 1 : 0) - (cmd.a ? 1 : 0)
  const speedH = Math.hypot(p.vx, p.vz)

  // Slide: crouch while running fast on the ground.
  p.slideCd = Math.max(0, p.slideCd - dt)
  if (cmd.crouch && !p.crouchHeld && p.ground && speedH > MOVE.slideMin && p.slideCd <= 0) {
    p.slide = MOVE.slideTime; p.slideCd = MOVE.slideTime + MOVE.slideCooldown
    const boost = Math.min(MOVE.slideBoost, MOVE.slideCap - speedH)
    if (boost > 0) { p.vx += (p.vx / speedH) * boost; p.vz += (p.vz / speedH) * boost }
    ev.slid = true
  }
  p.crouchHeld = !!cmd.crouch
  if (p.slide > 0) { p.slide -= dt; if (!cmd.crouch) p.slide = 0 }
  p.slide = Math.max(0, p.slide)

  const target = cmd.crouch || p.slide > 0 ? PLAYER.crouch : PLAYER.height
  if (!(target > p.height && blockedAbove(p, target))) p.height = target
  p.crouched = p.height < 1.5

  const sin = Math.sin(p.yaw), cos = Math.cos(p.yaw)
  let wx = side * cos - fwd * sin, wz = -side * sin - fwd * cos
  const wl = Math.hypot(wx, wz)
  if (wl > 0) { wx /= wl; wz /= wl }
  p.sprinting = !!cmd.sprint && fwd > 0 && !p.crouched && !cmd.aim && !cmd.fire && p.slide <= 0 && p.reload <= 0
  const wishSpeed = wl ? (p.crouched ? MOVE.crouch : p.sprinting ? MOVE.sprint : cmd.aim ? MOVE.aim : MOVE.walk) : 0

  if (p.ground) {
    if (cmd.jump) {
      p.vy = MOVE.jump; p.ground = false; ev.jumped = true; p.slide = 0 // momentum is kept — bunny hops skip friction
    } else if (p.slide > 0) {
      friction(p, MOVE.slideFriction, dt)
      accelerate(p, wx, wz, wishSpeed * 0.3, 3, dt)
    } else {
      friction(p, MOVE.friction, dt)
      accelerate(p, wx, wz, wishSpeed, MOVE.accel, dt)
    }
  }
  if (!p.ground) airAccelerate(p, wx, wz, wishSpeed || 0, dt)

  const hs = Math.hypot(p.vx, p.vz)
  if (hs > MOVE.maxSpeed) { p.vx *= MOVE.maxSpeed / hs; p.vz *= MOVE.maxSpeed / hs }
  const fallSpeed = p.vy
  p.vy -= MOVE.gravity * dt
  if (collide(p, dt, wasGround, ev.jumped)) { ev.landed = true; ev.impact = -fallSpeed }

  // Weapons
  p.cooldown = Math.max(0, p.cooldown - dt)
  p.swap = Math.max(0, p.swap - dt)
  const slot = cmd.slot === 1 ? 1 : 0
  if (slot !== p.weapon) { p.weapon = slot; p.swap = 0.42; p.reload = 0; ev.swapped = true }
  const W = WEAPONS[p.weapon], i = p.weapon
  p.bloom = Math.max(0, p.bloom - dt * W.bloomRecover)
  if (p.reload > 0) {
    p.reload -= dt
    if (p.reload <= 0) {
      p.reload = 0
      const take = Math.min(W.mag - p.ammo[i], p.reserve[i])
      p.ammo[i] += take; p.reserve[i] -= take; ev.reloaded = true
    }
  } else if (cmd.reload && p.ammo[i] < W.mag && p.reserve[i] > 0 && p.swap <= 0) {
    p.reload = W.reload; ev.reloadStart = true
  }
  p.aiming = !!cmd.aim && p.reload <= 0 && p.swap <= 0 && !p.sprinting
  const trigger = cmd.fire && (W.auto || !p.fireHeld)
  const edge = cmd.fire && !p.fireHeld
  p.fireHeld = !!cmd.fire
  if (trigger && p.cooldown <= 0 && p.reload <= 0 && p.swap <= 0) {
    if (p.ammo[i] > 0) {
      p.ammo[i]--; p.cooldown = W.interval; p.shots++
      ev.fired = true; ev.origin = eyePosition(p); ev.dir = shotDirection(p)
      p.bloom = Math.min(W.bloomMax, p.bloom + W.bloom)
    } else if (p.reserve[i] > 0) { p.reload = W.reload; ev.reloadStart = true } else if (edge) ev.empty = true
  }
  return ev
}

// ---------------------------------------------------------------------------------------------
// Ray casts (hitscan) — used by the host for hit validation and by clients for impact effects.
// ---------------------------------------------------------------------------------------------
export function rayAABB(o, d, minX, minY, minZ, maxX, maxY, maxZ, max) {
  let near = 0, far = max, axis = -1
  const lo = [minX, minY, minZ], hi = [maxX, maxY, maxZ], O = [o.x, o.y, o.z], D = [d.x, d.y, d.z]
  for (let k = 0; k < 3; k++) {
    if (Math.abs(D[k]) < 1e-9) { if (O[k] < lo[k] || O[k] > hi[k]) return null; continue }
    let a = (lo[k] - O[k]) / D[k], b = (hi[k] - O[k]) / D[k]
    if (a > b) [a, b] = [b, a]
    if (a > near) { near = a; axis = k }
    if (b < far) far = b
    if (near > far) return null
  }
  return { t: near, axis }
}
export const rayBox = (o, d, b, max = 200) => {
  const hit = rayAABB(o, d, b.x - b.w / 2, b.y - b.h / 2, b.z - b.d / 2, b.x + b.w / 2, b.y + b.h / 2, b.z + b.d / 2, max)
  return hit ? hit.t : null
}

export function rayWorld(o, d, max = 160) {
  let best = max, normal = null
  if (d.y < -1e-6) { const t = -o.y / d.y; if (t > 0 && t < best) { best = t; normal = { x: 0, y: 1, z: 0 } } }
  for (const b of boxes) {
    const hit = rayAABB(o, d, b.x - b.w / 2, b.y - b.h / 2, b.z - b.d / 2, b.x + b.w / 2, b.y + b.h / 2, b.z + b.d / 2, best)
    if (hit && hit.t < best && hit.t > 0) {
      best = hit.t
      const D = [d.x, d.y, d.z][hit.axis]
      normal = { x: 0, y: 0, z: 0 }; normal['xyz'[hit.axis]] = D > 0 ? -1 : 1
    }
  }
  for (const r of ramps) {
    const slope = (r.h / r.d) * r.sign, den = d.y - slope * d[r.axis]
    if (Math.abs(den) < 1e-7) continue
    const t = (r.h * 0.5 + slope * (o[r.axis] - r[r.axis]) - o.y) / den
    if (t > 0 && t < best && rampHeight(r, o.x + d.x * t, o.z + d.z * t) !== null) {
      best = t
      const n = { x: 0, y: 1, z: 0 }; n[r.axis] = -slope
      const l = Math.hypot(n.x, n.y, n.z)
      normal = { x: n.x / l, y: n.y / l, z: n.z / l }
    }
  }
  return { t: best, normal }
}
export const wallDistance = (o, d) => rayWorld(o, d).t

// Hitboxes for a pose {x,y,z,height}. Vertical extents scale when crouched.
export function hitboxes(q) {
  const k = q.height / PLAYER.height
  return [
    { part: 'head', minY: q.y + 1.42 * k, maxY: q.y + 1.84 * k, r: 0.19 },
    { part: 'body', minY: q.y + 0.82 * k, maxY: q.y + 1.42 * k, r: 0.31 },
    { part: 'legs', minY: q.y, maxY: q.y + 0.82 * k, r: 0.25 },
  ]
}
export function rayPlayers(o, d, max, poses) {
  let best = max, target = null, part = null
  for (const q of poses) {
    for (const hb of hitboxes(q)) {
      const hit = rayAABB(o, d, q.x - hb.r, hb.minY, q.z - hb.r, q.x + hb.r, hb.maxY, q.z + hb.r, best)
      if (hit && hit.t < best) { best = hit.t; target = q; part = hb.part }
    }
  }
  return { t: best, target, part }
}
