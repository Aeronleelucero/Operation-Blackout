// Original first-person weapon models (VX-7 carbine, P-11 sidearm) and gloved arms, built from
// extruded profiles + primitives. Static parts are merged per material; animated parts stay separate.
import * as T from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { glowTexture, flashTexture } from './textures.js'

function camoTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const x = c.getContext('2d')
  x.fillStyle = '#4a5140'; x.fillRect(0, 0, 128, 128)
  let seed = 5
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  for (const col of ['#3a4033', '#5d624d', '#2f342b', '#666a55']) {
    x.fillStyle = col
    for (let i = 0; i < 9; i++) { x.beginPath(); x.ellipse(r() * 128, r() * 128, 6 + r() * 16, 4 + r() * 9, r() * 3, 0, Math.PI * 2); x.fill() }
  }
  const t = new T.CanvasTexture(c)
  t.colorSpace = T.SRGBColorSpace
  t.wrapS = t.wrapT = T.RepeatWrapping
  t.repeat.set(1, 3)
  return t
}

export function weaponMaterials() {
  const S = (color, metalness, roughness, extra = {}) => new T.MeshStandardMaterial({ color, metalness, roughness, ...extra })
  return {
    metal: S('#3a3f45', 0.72, 0.36),
    metalDark: S('#24282c', 0.7, 0.42),
    black: S('#17191b', 0.2, 0.62),
    polymer: S('#1d2023', 0.12, 0.7),
    steel: S('#202326', 0.88, 0.28),
    edge: S('#6b737a', 0.85, 0.3),
    rubber: S('#0e0f10', 0, 0.92),
    brass: S('#c99a45', 0.9, 0.3),
    glove: S('#2a2d30', 0, 0.86),
    glovePad: S('#5d5547', 0, 0.9),
    gloveKnuckle: S('#1a1c1e', 0.05, 0.6),
    sleeve: S('#ffffff', 0, 0.97, { map: camoTexture() }),
    sleeveDark: S('#363c31', 0, 0.98),
    watch: S('#111315', 0.4, 0.4),
  }
}

// Collects geometry per material, then merges into as few meshes as possible.
class Kit {
  constructor() { this.parts = new Map() }
  add(material, geometry) {
    if (!this.parts.has(material)) this.parts.set(material, [])
    this.parts.get(material).push(geometry.index ? geometry.toNonIndexed() : geometry)
    return geometry
  }
  box(m, x, y, z, w, h, d, rx = 0, ry = 0, rz = 0) {
    const g = new T.BoxGeometry(w, h, d)
    if (rx || ry || rz) g.applyMatrix4(new T.Matrix4().makeRotationFromEuler(new T.Euler(rx, ry, rz)))
    return this.add(m, g.translate(x, y, z))
  }
  rbox(m, x, y, z, w, h, d, r = 0.004, rx = 0, ry = 0, rz = 0) {
    const g = new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2) * 0.999)
    if (rx || ry || rz) g.applyMatrix4(new T.Matrix4().makeRotationFromEuler(new T.Euler(rx, ry, rz)))
    return this.add(m, g.translate(x, y, z))
  }
  // Cylinder along Z.
  cylZ(m, x, y, z, r, len, seg = 16, r2 = r, rot = 0) {
    const g = new T.CylinderGeometry(r2, r, len, seg).rotateX(Math.PI / 2)
    if (rot) g.rotateZ(rot)
    return this.add(m, g.translate(x, y, z))
  }
  cylX(m, x, y, z, r, len, seg = 12) { return this.add(m, new T.CylinderGeometry(r, r, len, seg).rotateZ(Math.PI / 2).translate(x, y, z)) }
  cylY(m, x, y, z, r, len, seg = 12) { return this.add(m, new T.CylinderGeometry(r, r, len, seg).translate(x, y, z)) }
  // Side profile given as [z, y] points (or a builder on a Shape whose x = -z), extruded across X.
  profile(m, points, width, bevel = 0.0015, x = 0) {
    const shape = new T.Shape()
    if (typeof points === 'function') points(shape)
    else { shape.moveTo(-points[0][0], points[0][1]); for (const [z, y] of points.slice(1)) shape.lineTo(-z, y); shape.closePath() }
    const g = new T.ExtrudeGeometry(shape, { depth: Math.max(0.001, width - bevel * 2), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 10 })
    g.translate(0, 0, -(width - bevel * 2) / 2).rotateY(Math.PI / 2).translate(x, 0, 0)
    return this.add(m, g)
  }
  build(group = new T.Group()) {
    for (const [material, list] of this.parts) {
      const merged = mergeGeometries(list.map(g => { if (!g.attributes.uv) g.setAttribute('uv', new T.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); return g }), false)
      const mesh = new T.Mesh(merged, material)
      mesh.castShadow = true
      group.add(mesh)
    }
    return group
  }
}

function reticleTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const x = c.getContext('2d')
  x.strokeStyle = '#ff3b2e'; x.fillStyle = '#ff3b2e'; x.shadowColor = '#ff2a1a'; x.shadowBlur = 10
  x.lineWidth = 7; x.beginPath(); x.arc(128, 128, 78, 0, Math.PI * 2); x.stroke()
  for (const a of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) { x.beginPath(); x.moveTo(128 + Math.cos(a) * 78, 128 + Math.sin(a) * 78); x.lineTo(128 + Math.cos(a) * 96, 128 + Math.sin(a) * 96); x.stroke() }
  x.beginPath(); x.arc(128, 128, 9, 0, Math.PI * 2); x.fill()
  const t = new T.CanvasTexture(c)
  t.colorSpace = T.SRGBColorSpace
  return t
}

function muzzleFlash(scale = 1) {
  const g = new T.Group()
  const mat = new T.MeshBasicMaterial({ map: glowTexture(), transparent: true, blending: T.AdditiveBlending, depthWrite: false, color: '#ffd28a' })
  const star = new T.MeshBasicMaterial({ map: flashTexture(), transparent: true, blending: T.AdditiveBlending, depthWrite: false, color: '#ffe0a0' })
  const front = new T.Mesh(new T.PlaneGeometry(0.16 * scale, 0.16 * scale), star)
  front.position.z = -0.02
  g.add(front)
  for (let i = 0; i < 2; i++) {
    const side = new T.Mesh(new T.PlaneGeometry(0.07 * scale, 0.22 * scale), mat)
    side.rotation.set(Math.PI / 2, 0, i * Math.PI / 2)
    side.position.z = -0.09 * scale
    g.add(side)
  }
  g.visible = false
  g.userData.front = front
  return g
}

// ---------------------------------------------------------------------------------------------
// VX-7 carbine. Local frame: origin at the trigger, -Z toward the muzzle, +Y up, +X right.
// ---------------------------------------------------------------------------------------------
export function buildRifle(M, { detail = true } = {}) {
  const root = new T.Group()
  const k = new Kit()
  const AXIS = 0.028 // bore height

  // Upper receiver with rear taper and a forward hump for the handguard interface.
  k.profile(M.metal, [[0.112, 0], [0.112, 0.044], [0.098, 0.058], [-0.135, 0.058], [-0.135, 0]], 0.056, 0.002)
  // Ejection port + dust cover, brass deflector, forward assist (right side).
  k.box(M.black, 0.0285, 0.03, 0.006, 0.003, 0.022, 0.066)
  k.box(M.metalDark, 0.031, 0.017, 0.006, 0.004, 0.006, 0.07, 0, 0, 0.5)
  k.box(M.metal, 0.03, 0.044, 0.045, 0.012, 0.016, 0.018, 0, 0, -0.3)
  k.cylZ(M.metal, 0.031, 0.036, 0.083, 0.0085, 0.032, 12)
  k.cylZ(M.edge, 0.031, 0.036, 0.1, 0.0072, 0.004, 12)
  // Lower receiver & magwell.
  k.profile(M.metal, [[0.106, 0], [0.106, -0.03], [0.072, -0.041], [0.003, -0.041], [-0.004, -0.086], [-0.086, -0.086], [-0.091, -0.03], [-0.13, -0.022], [-0.13, 0]], 0.052, 0.002)
  k.rbox(M.metalDark, -0.045, -0.084, 0, 0.06, 0.008, 0.088, 0.003)
  // Bolt catch / mag release / selector.
  k.box(M.metalDark, -0.0275, -0.008, -0.003, 0.004, 0.026, 0.012)
  k.cylX(M.edge, 0.028, -0.024, -0.012, 0.0055, 0.006, 10)
  k.box(M.metalDark, -0.029, -0.012, 0.048, 0.005, 0.006, 0.022, 0.4, 0, 0)
  k.cylX(M.edge, -0.029, -0.012, 0.048, 0.006, 0.004, 10)
  // Trigger guard and trigger.
  k.box(M.metalDark, 0, -0.075, 0.024, 0.012, 0.007, 0.07)
  k.box(M.metalDark, 0, -0.06, -0.01, 0.012, 0.03, 0.007)
  k.box(M.edge, 0, -0.054, 0.016, 0.005, 0.026, 0.006, 0.35, 0, 0)
  // Pistol grip with palm swell (bevel rounds the edges).
  k.profile(M.polymer, s => {
    s.moveTo(-0.048, -0.038); s.lineTo(-0.088, -0.038)
    s.quadraticCurveTo(-0.13, -0.095, -0.128, -0.165); s.lineTo(-0.112, -0.178); s.lineTo(-0.078, -0.172)
    s.quadraticCurveTo(-0.068, -0.12, -0.05, -0.075); s.closePath()
  }, 0.034, 0.006)
  for (let i = 0; i < 3; i++) k.box(M.black, 0, -0.09 - i * 0.026, 0.061 + i * 0.0085, 0.036, 0.006, 0.004, -0.35)
  // Buffer tube + castle nut + adjustable stock with cheek riser and rubber butt pad.
  k.cylZ(M.metalDark, 0, AXIS, 0.2, 0.0158, 0.2, 18)
  k.cylZ(M.edge, 0, AXIS, 0.115, 0.019, 0.01, 12)
  k.profile(M.polymer, [[0.17, 0.052], [0.33, 0.058], [0.345, 0.052], [0.345, -0.088], [0.325, -0.098], [0.296, -0.07], [0.215, -0.012], [0.17, 0.004]], 0.044, 0.004)
  k.box(M.black, 0, -0.03, 0.29, 0.046, 0.032, 0.03)
  k.rbox(M.rubber, 0, -0.018, 0.353, 0.048, 0.152, 0.016, 0.005)
  k.box(M.metalDark, 0, 0.003, 0.2, 0.012, 0.012, 0.03)
  k.cylX(M.edge, 0, -0.07, 0.315, 0.007, 0.05, 10)
  // Free-float handguard (octagonal) with M-LOK style slots and screws.
  k.cylZ(M.metal, 0, AXIS, -0.29, 0.03, 0.31, 8, 0.03, Math.PI / 8)
  k.cylZ(M.edge, 0, AXIS, -0.137, 0.032, 0.008, 8, 0.032, Math.PI / 8)
  if (detail) {
    for (let i = 0; i < 6; i++) {
      const z = -0.17 - i * 0.042
      for (const s of [-1, 1]) k.box(M.black, s * 0.0285, AXIS, z, 0.003, 0.009, 0.026)
      for (const s of [-1, 1]) k.box(M.black, s * 0.02, AXIS - 0.021, z, 0.009, 0.003, 0.026, 0, 0, s * Math.PI / 4)
      k.box(M.black, 0, AXIS - 0.0285, z, 0.009, 0.003, 0.026)
    }
    for (const z of [-0.155, -0.41]) for (const s of [-1, 1]) k.cylX(M.edge, s * 0.029, AXIS + 0.012, z, 0.003, 0.004, 8)
  }
  k.box(M.metalDark, 0, AXIS - 0.036, -0.4, 0.016, 0.014, 0.03, -0.4)
  // Top Picatinny rail over receiver and handguard.
  k.box(M.metalDark, 0, 0.0625, -0.165, 0.022, 0.009, 0.555)
  if (detail) for (let z = 0.1; z > -0.44; z -= 0.0105) k.box(M.metalDark, 0, 0.0685, z, 0.022, 0.004, 0.0052)
  // Barrel, gas block, muzzle brake with ports.
  k.cylZ(M.steel, 0, AXIS, -0.5, 0.0095, 0.13, 14)
  k.cylZ(M.steel, 0, AXIS, -0.585, 0.0148, 0.058, 16)
  k.cylZ(M.edge, 0, AXIS, -0.6145, 0.0128, 0.003, 16)
  for (let i = 0; i < 3; i++) for (const s of [-1, 1]) k.box(M.black, s * 0.0118, AXIS + 0.004, -0.566 - i * 0.017, 0.005, 0.016, 0.0085)
  // Folded backup sights.
  k.box(M.metalDark, 0, 0.073, -0.425, 0.02, 0.008, 0.026)
  k.box(M.metalDark, 0, 0.073, 0.085, 0.022, 0.009, 0.03)

  // Holographic optic: base, battery housing, hood, glass and lit reticle.
  const OPTIC_Z = -0.075, RET_Y = 0.108, OPTIC_SCALE = 0.8, MOUNT = new T.Vector3(0, 0.066, -0.075)
  const o = new Kit()
  o.rbox(M.black, 0, 0.078, OPTIC_Z - 0.008, 0.046, 0.016, 0.075, 0.003)
  o.rbox(M.black, 0, 0.0895, OPTIC_Z - 0.014, 0.05, 0.01, 0.062, 0.003)
  for (const s of [-1, 1]) o.rbox(M.black, s * 0.0245, RET_Y, OPTIC_Z - 0.02, 0.005, 0.04, 0.052, 0.002)
  o.rbox(M.black, 0, RET_Y + 0.022, OPTIC_Z - 0.02, 0.054, 0.006, 0.052, 0.002)
  o.box(M.black, 0, RET_Y + 0.021, OPTIC_Z - 0.044, 0.054, 0.01, 0.006)
  for (const [z, y] of [[OPTIC_Z + 0.008, 0.088], [OPTIC_Z - 0.016, 0.088]]) o.cylX(M.edge, 0.028, y, z, 0.004, 0.004, 10)
  o.box(M.edge, 0.0265, 0.0915, OPTIC_Z + 0.008, 0.003, 0.006, 0.012)
  o.cylX(M.metalDark, -0.026, 0.078, OPTIC_Z, 0.007, 0.012, 10)

  const optic = o.build()
  root.add(optic)
  // Charging handle (animated).
  const charging = new Kit()
  charging.box(M.metalDark, 0, 0.052, 0.104, 0.011, 0.008, 0.03)
  charging.rbox(M.metalDark, 0, 0.052, 0.121, 0.048, 0.009, 0.012, 0.003)
  const chargingHandle = charging.build()
  root.add(chargingHandle)

  // Curved magazine (animated) — origin at the top of the magwell.
  const mk = new Kit()
  mk.profile(M.polymer, s => {
    s.moveTo(0.006, 0.01); s.lineTo(0.077, 0.01); s.lineTo(0.08, -0.04)
    s.quadraticCurveTo(0.09, -0.12, 0.112, -0.185); s.lineTo(0.05, -0.2)
    s.quadraticCurveTo(0.03, -0.12, 0.006, -0.04); s.closePath()
  }, 0.027, 0.0025)
  for (let i = 0; i < 6; i++) mk.box(M.black, 0, -0.06 - i * 0.022, -0.041 - i * 0.0068, 0.029, 0.004, 0.05, -0.18)
  mk.rbox(M.black, 0, -0.2, -0.086, 0.032, 0.012, 0.072, 0.004, -0.22)
  mk.box(M.brass, 0, 0.013, -0.04, 0.012, 0.006, 0.05)
  const magazine = mk.build()
  magazine.position.set(0, -0.03, 0.0)
  root.add(magazine)

  k.build(root)

  // Glass + reticle (transparent, not merged).
  const glass = new T.Mesh(new T.PlaneGeometry(0.044, 0.036), new T.MeshPhysicalMaterial({ color: '#9fd6e8', metalness: 0, roughness: 0.05, transparent: true, opacity: 0.16, depthWrite: false }))
  glass.position.set(0, RET_Y + 0.001, OPTIC_Z - 0.04)
  optic.add(glass)
  const reticle = new T.Mesh(new T.PlaneGeometry(0.03, 0.03), new T.MeshBasicMaterial({ map: reticleTexture(), transparent: true, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false }))
  reticle.position.set(0, RET_Y, OPTIC_Z - 0.038)
  reticle.renderOrder = 5
  optic.add(reticle)
  // Scale the whole optic about its rail mount.
  optic.position.copy(MOUNT).multiplyScalar(1 - OPTIC_SCALE)
  optic.scale.setScalar(OPTIC_SCALE)
  const sight = new T.Vector3(0, RET_Y, OPTIC_Z - 0.038).sub(MOUNT).multiplyScalar(OPTIC_SCALE).add(MOUNT)

  const flash = muzzleFlash(1)
  flash.position.set(0, AXIS, -0.62)
  root.add(flash)

  return {
    root, magazine, chargingHandle, flash, reticle,
    muzzle: new T.Vector3(0, AXIS, -0.62), port: new T.Vector3(0.03, 0.03, 0.006),
    sight, magHome: magazine.position.clone(),
  }
}

// ---------------------------------------------------------------------------------------------
// P-11 sidearm. Same local frame conventions.
// ---------------------------------------------------------------------------------------------
export function buildPistol(M) {
  const root = new T.Group()
  const k = new Kit()
  // Frame with dust-cover rail.
  k.profile(M.polymer, [[0.03, 0.0], [0.03, 0.012], [-0.16, 0.012], [-0.16, -0.008], [-0.02, -0.012], [-0.02, -0.03], [0.01, -0.03], [0.012, -0.008]], 0.03, 0.003)
  for (let i = 0; i < 3; i++) k.box(M.black, 0, -0.009, -0.07 - i * 0.022, 0.032, 0.004, 0.01)
  // Trigger guard + trigger.
  k.box(M.polymer, 0, -0.042, -0.02, 0.011, 0.007, 0.055)
  k.box(M.polymer, 0, -0.027, -0.05, 0.011, 0.034, 0.007, 0.25)
  k.box(M.edge, 0, -0.022, -0.02, 0.005, 0.02, 0.006, 0.25)
  // Grip with texture panels.
  k.profile(M.polymer, s => { s.moveTo(-0.032, -0.008); s.lineTo(-0.002, -0.008); s.lineTo(-0.035, -0.125); s.lineTo(-0.075, -0.13); s.lineTo(-0.058, -0.03); s.quadraticCurveTo(-0.062, -0.006, -0.032, -0.008); s.closePath() }, 0.032, 0.005)
  for (let i = 0; i < 5; i++) for (const sd of [-1, 1]) k.box(M.black, sd * 0.0165, -0.035 - i * 0.017, 0.035 + i * 0.0045, 0.002, 0.008, 0.026, -0.27)
  k.rbox(M.black, 0, -0.131, 0.056, 0.034, 0.012, 0.045, 0.004, -0.27)
  const sk = new Kit()
  sk.profile(M.metal, [[0.035, 0.012], [0.035, 0.04], [0.02, 0.046], [-0.165, 0.046], [-0.17, 0.04], [-0.17, 0.012]], 0.029, 0.0025)
  for (let i = 0; i < 6; i++) for (const sd of [-1, 1]) sk.box(M.black, sd * 0.0146, 0.03, 0.026 - i * 0.0055, 0.0015, 0.024, 0.0025)
  sk.box(M.black, 0.0146, 0.034, -0.045, 0.002, 0.012, 0.035)
  sk.box(M.metalDark, 0, 0.051, -0.158, 0.004, 0.009, 0.008)
  sk.box(M.metalDark, 0, 0.05, 0.026, 0.022, 0.008, 0.01)
  sk.cylZ(M.steel, 0, 0.032, -0.171, 0.0065, 0.004, 12)
  const slide = sk.build()
  root.add(slide)
  const mk = new Kit()
  mk.box(M.metalDark, 0, -0.05, 0, 0.022, 0.1, 0.032, -0.27)
  const magazine = mk.build()
  magazine.position.set(0, -0.025, 0.038)
  root.add(magazine)
  k.build(root)
  const flash = muzzleFlash(0.75)
  flash.position.set(0, 0.032, -0.18)
  root.add(flash)
  return { root, slide, magazine, flash, muzzle: new T.Vector3(0, 0.032, -0.18), port: new T.Vector3(0.015, 0.04, -0.04), sight: new T.Vector3(0, 0.058, -0.06), magHome: magazine.position.clone() }
}

// ---------------------------------------------------------------------------------------------
// Gloved hand: origin at the wrist, fingers along -Z, palm facing -Y. side=+1 right, -1 left.
// ---------------------------------------------------------------------------------------------
export function buildHand(M, side = 1) {
  const hand = new T.Group()
  const k = new Kit()
  k.rbox(M.glove, 0, 0, -0.046, 0.08, 0.03, 0.088, 0.012)
  k.rbox(M.gloveKnuckle, 0, 0.0165, -0.07, 0.07, 0.01, 0.026, 0.004)
  k.rbox(M.gloveKnuckle, 0, 0.0155, -0.036, 0.056, 0.008, 0.032, 0.004)
  k.rbox(M.glovePad, 0, -0.0155, -0.05, 0.066, 0.006, 0.07, 0.003)
  k.cylZ(M.glove, 0, 0, 0.004, 0.034, 0.03, 14, 0.036)
  k.cylZ(M.gloveKnuckle, 0, 0.003, 0.004, 0.0365, 0.012, 14)
  k.build(hand)
  const fingers = []
  const seg = (parent, len, r, mat = M.glove) => {
    const g = new T.Group()
    const capsule = new T.Mesh(new T.CapsuleGeometry(r, Math.max(0.001, len - r * 2), 3, 8).rotateX(Math.PI / 2).translate(0, 0, -len / 2), mat)
    capsule.castShadow = true
    g.add(capsule)
    const tip = new T.Group(); tip.position.z = -len + r * 0.6; g.add(tip)
    parent.add(g)
    return [g, tip]
  }
  const lengths = [0.048, 0.054, 0.051, 0.042]
  for (let i = 0; i < 4; i++) {
    const base = new T.Group()
    base.position.set(side * (-0.029 + i * 0.0195), -0.002, -0.088)
    hand.add(base)
    const L = lengths[i], r = 0.0098 - i * 0.0004
    const [a, ta] = seg(base, L * 0.46, r)
    const [b, tb] = seg(ta, L * 0.32, r * 0.95)
    const [c] = seg(tb, L * 0.26, r * 0.9)
    fingers.push([a, b, c])
  }
  const thumbBase = new T.Group()
  thumbBase.position.set(side * -0.038, -0.006, -0.03)
  hand.add(thumbBase)
  const [t1, tt1] = seg(thumbBase, 0.036, 0.0115)
  const [t2] = seg(tt1, 0.032, 0.0105)
  hand.userData = { fingers, thumb: [thumbBase, t1, t2], side }
  return hand
}

// curls: total bend per finger (index..pinky); spread: sideways splay; thumb: [yaw, pitch, curl]
export function poseHand(hand, curls, thumb = [0.6, -0.3, 0.4], spread = 0.04) {
  const { fingers, thumb: th, side } = hand.userData
  fingers.forEach((f, i) => {
    const c = curls[i]
    f[0].rotation.set(-c * 0.42, side * (1.5 - i) * spread, 0)
    f[1].rotation.set(-c * 0.33, 0, 0)
    f[2].rotation.set(-c * 0.25, 0, 0)
  })
  th[0].rotation.set(thumb[1], side * thumb[0], 0)
  th[1].rotation.set(-thumb[2] * 0.5, 0, 0)
  th[2].rotation.set(-thumb[2] * 0.5, 0, 0)
}

// Sleeved forearm + upper arm stretched between a wrist and an elbow point.
export function buildArm(M) {
  const group = new T.Group()
  const forearm = new T.Mesh(new T.CylinderGeometry(0.037, 0.05, 1, 14, 1).translate(0, 0.5, 0), M.sleeve)
  const cuff = new T.Mesh(new T.CylinderGeometry(0.043, 0.043, 0.05, 14).translate(0, 0.035, 0), M.sleeveDark)
  const upper = new T.Mesh(new T.CylinderGeometry(0.054, 0.062, 1, 14).translate(0, 0.5, 0), M.sleeve)
  for (const m of [forearm, upper, cuff]) m.castShadow = true
  group.add(forearm, upper, cuff)
  group.userData = { forearm, upper, cuff }
  return group
}
const UP = new T.Vector3(0, 1, 0), tmp = new T.Vector3()
export function stretch(mesh, from, to) {
  tmp.subVectors(to, from)
  const len = tmp.length()
  mesh.position.copy(from)
  mesh.quaternion.setFromUnitVectors(UP, tmp.normalize())
  mesh.scale.set(1, len, 1)
}
// Positions an arm (forearm wrist→elbow, upper arm elbow→shoulder, cuff at the wrist).
export function solveArm(arm, wrist, elbow, shoulder) {
  const { forearm, upper, cuff } = arm.userData
  stretch(forearm, wrist, elbow)
  stretch(upper, elbow, shoulder)
  cuff.position.copy(wrist)
  cuff.quaternion.copy(forearm.quaternion)
}
