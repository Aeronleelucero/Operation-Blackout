// Low-poly remote soldiers. Each animated segment is one merged, vertex-coloured mesh.
import * as T from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { glowTexture } from './textures.js'

export const TEAM_COLORS = ['#c9463d', '#3f7fc4', '#e0a62b', '#4ea65a', '#9b59c9', '#e07a35', '#2fb5b0', '#d14f8f', '#7b8a35', '#5b6ee0', '#b5653f', '#6a7d8c']

const tmpColor = new T.Color()
class Part {
  constructor() { this.list = [] }
  add(geo, color, matrix) {
    geo = geo.index ? geo.toNonIndexed() : geo
    if (matrix) geo.applyMatrix4(matrix)
    tmpColor.set(color)
    const n = geo.attributes.position.count, c = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) { c[i * 3] = tmpColor.r; c[i * 3 + 1] = tmpColor.g; c[i * 3 + 2] = tmpColor.b }
    geo.setAttribute('color', new T.BufferAttribute(c, 3))
    if (!geo.attributes.uv) geo.setAttribute('uv', new T.BufferAttribute(new Float32Array(n * 2), 2))
    this.list.push(geo)
    return this
  }
  box(color, x, y, z, w, h, d, r = 0.02, rot) {
    const g = r > 0 ? new RoundedBoxGeometry(w, h, d, 1, Math.min(r, w / 2, h / 2, d / 2) * 0.99) : new T.BoxGeometry(w, h, d)
    if (rot) g.applyMatrix4(new T.Matrix4().makeRotationFromEuler(new T.Euler(...rot)))
    return this.add(g.translate(x, y, z), color)
  }
  // Box stretched between two points.
  limb(color, a, b, w, d, r = 0.03) {
    const A = new T.Vector3(...a), B = new T.Vector3(...b), dir = B.clone().sub(A), len = dir.length()
    const g = new RoundedBoxGeometry(w, len, d, 1, Math.min(r, w / 2, d / 2) * 0.99)
    const m = new T.Matrix4().compose(A.clone().add(B).multiplyScalar(0.5), new T.Quaternion().setFromUnitVectors(new T.Vector3(0, 1, 0), dir.normalize()), new T.Vector3(1, 1, 1))
    return this.add(g, color, m)
  }
  cylZ(color, x, y, z, r, len, seg = 8) { return this.add(new T.CylinderGeometry(r, r, len, seg).rotateX(Math.PI / 2).translate(x, y, z), color) }
  mesh(material) {
    const m = new T.Mesh(mergeGeometries(this.list, false), material)
    m.castShadow = true
    m.receiveShadow = true
    return m
  }
}

const UNIFORM = '#4f5745', UNIFORM_DARK = '#3d4437', SKIN = '#c8987a', BLACK = '#1d2124', GEAR = '#5d5a4c', BOOT = '#2a2622', METAL = '#30353a'

export function makeSoldier(colorIndex = 0) {
  const team = TEAM_COLORS[colorIndex % TEAM_COLORS.length]
  const material = new T.MeshLambertMaterial({ vertexColors: true, emissive: '#000000' })
  const root = new T.Group()
  const body = new T.Group() // whole-body pivot used for death falls
  root.add(body)
  const hips = new T.Group(); hips.position.y = 0.95; body.add(hips)
  const pelvis = new Part()
    .box(UNIFORM_DARK, 0, -0.02, 0, 0.36, 0.2, 0.22)
    .box(BLACK, 0, 0.06, 0, 0.38, 0.06, 0.24, 0.01)
    .box(GEAR, 0.15, -0.02, -0.06, 0.08, 0.12, 0.08)
    .box(GEAR, -0.17, -0.06, 0.02, 0.06, 0.16, 0.14)
  hips.add(pelvis.mesh(material))

  const legs = []
  for (const side of [-1, 1]) {
    const thigh = new T.Group(); thigh.position.set(side * 0.1, -0.04, 0); hips.add(thigh)
    const tp = new Part().box(UNIFORM, 0, -0.22, 0, 0.16, 0.46, 0.18, 0.04)
    if (side > 0) tp.box(GEAR, 0.09, -0.2, 0, 0.05, 0.14, 0.12)
    thigh.add(tp.mesh(material))
    const shin = new T.Group(); shin.position.y = -0.44; thigh.add(shin)
    const sp = new Part()
      .box(UNIFORM, 0, -0.2, 0, 0.14, 0.42, 0.16, 0.04)
      .box(BLACK, 0, -0.02, -0.08, 0.12, 0.11, 0.05, 0.02)
      .box(BOOT, 0, -0.44, -0.04, 0.15, 0.12, 0.27, 0.03)
    shin.add(sp.mesh(material))
    legs.push({ thigh, shin, side })
  }

  const spine = new T.Group(); spine.position.y = 0.06; hips.add(spine)
  const torso = new Part()
    .box(UNIFORM, 0, 0.28, 0, 0.44, 0.52, 0.25, 0.06)
    .box(team, 0, 0.3, 0, 0.48, 0.38, 0.3, 0.04)
    .box(GEAR, 0, 0.18, -0.165, 0.38, 0.12, 0.05, 0.02)
    .box(GEAR, -0.12, 0.33, -0.165, 0.1, 0.12, 0.05, 0.02)
    .box(GEAR, 0.12, 0.33, -0.165, 0.1, 0.12, 0.05, 0.02)
    .box('#2c3a2c', 0, 0.3, 0.2, 0.32, 0.36, 0.12, 0.04)
    .box(BLACK, 0.11, 0.48, 0.2, 0.03, 0.18, 0.03, 0)
    .box(UNIFORM_DARK, 0, 0.55, 0, 0.18, 0.06, 0.16)
  spine.add(torso.mesh(material))

  const head = new T.Group(); head.position.y = 0.6; spine.add(head)
  const hp = new Part()
    .box(SKIN, 0, 0.11, 0, 0.2, 0.23, 0.22, 0.05)
    .box(UNIFORM_DARK, 0, 0.04, 0, 0.215, 0.1, 0.225, 0.04)
    .box('#3a4231', 0, 0.22, 0.01, 0.27, 0.15, 0.28, 0.07)
    .box('#3a4231', 0, 0.16, 0.06, 0.26, 0.07, 0.2, 0.03)
    .box(BLACK, 0, 0.15, -0.115, 0.2, 0.06, 0.04, 0.02)
    .box('#9fd6e0', 0, 0.15, -0.135, 0.16, 0.035, 0.01, 0)
    .box(BLACK, 0.125, 0.12, 0, 0.04, 0.09, 0.09, 0.02)
    .box(BLACK, -0.125, 0.12, 0, 0.04, 0.09, 0.09, 0.02)
    .box(team, 0, 0.3, 0.02, 0.06, 0.02, 0.12, 0)
  head.add(hp.mesh(material))

  // Arms + rifle rotate together with aim pitch from the shoulder line.
  const arms = new T.Group(); arms.position.y = 0.47; spine.add(arms)
  const ap = new Part()
    .limb(UNIFORM, [0.25, 0.02, 0], [0.23, -0.22, -0.08], 0.13, 0.13)
    .limb(UNIFORM, [0.23, -0.22, -0.08], [0.1, -0.16, -0.3], 0.11, 0.11)
    .box(BLACK, 0.08, -0.16, -0.32, 0.08, 0.08, 0.09)
    .limb(UNIFORM, [-0.25, 0.02, 0], [-0.24, -0.2, -0.2], 0.13, 0.13)
    .limb(UNIFORM, [-0.24, -0.2, -0.2], [-0.02, -0.1, -0.52], 0.11, 0.11)
    .box(BLACK, 0.0, -0.09, -0.55, 0.08, 0.08, 0.09)
    .box(team, 0.255, -0.05, -0.03, 0.14, 0.05, 0.14, 0.01)
    .box(team, -0.255, -0.05, -0.03, 0.14, 0.05, 0.14, 0.01)
  arms.add(ap.mesh(material))
  const gun = new Part()
    .box(METAL, 0.06, -0.08, -0.36, 0.06, 0.08, 0.36, 0.01)
    .box(METAL, 0.06, -0.075, -0.6, 0.065, 0.065, 0.2, 0.01)
    .cylZ(BLACK, 0.06, -0.075, -0.78, 0.014, 0.18)
    .box(BLACK, 0.06, -0.16, -0.38, 0.045, 0.14, 0.07, 0.01, [0.25, 0, 0])
    .box(BLACK, 0.06, -0.14, -0.24, 0.04, 0.12, 0.05, 0.01, [-0.3, 0, 0])
    .box(BLACK, 0.06, -0.07, -0.08, 0.05, 0.11, 0.18, 0.01)
    .box(BLACK, 0.06, -0.015, -0.4, 0.05, 0.05, 0.08, 0.01)
  const gunMesh = gun.mesh(material)
  arms.add(gunMesh)

  const flash = new T.Sprite(new T.SpriteMaterial({ map: glowTexture(), color: '#ffcf7a', blending: T.AdditiveBlending, depthWrite: false, transparent: true }))
  flash.position.set(0.06, -0.075, -0.92)
  flash.scale.setScalar(0.55)
  flash.visible = false
  arms.add(flash)

  // Name label + health bar.
  const c = document.createElement('canvas')
  c.width = 256; c.height = 64
  const texture = new T.CanvasTexture(c)
  texture.colorSpace = T.SRGBColorSpace
  const label = new T.Sprite(new T.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }))
  label.position.y = 2.15
  label.center.set(0.5, 0)
  root.add(label)

  let lastLabel = '', phase = 0, deadT = 0, hitT = 0, spawnT = 0, wasDead = false
  const hipYaw = { v: 0 }
  const damp = (a, b, k, dt) => T.MathUtils.damp(a, b, k, dt)

  function drawLabel(p) {
    const key = p.name + '|' + Math.ceil(p.hp) + '|' + (p.protect > 0)
    if (key === lastLabel) return
    lastLabel = key
    const x = c.getContext('2d')
    x.clearRect(0, 0, 256, 64)
    x.font = '800 26px "Barlow Condensed", "Arial Narrow", sans-serif'
    x.textAlign = 'center'
    x.lineWidth = 5; x.strokeStyle = '#10181f'; x.strokeText(p.name, 128, 26)
    x.fillStyle = '#ffffff'; x.fillText(p.name, 128, 26)
    x.fillStyle = '#10181fcc'; x.fillRect(58, 38, 140, 10)
    x.fillStyle = p.protect > 0 ? '#6ee8ff' : p.hp > 50 ? '#9be35a' : p.hp > 25 ? '#ffc04a' : '#ff5a4a'
    x.fillRect(60, 40, 136 * Math.max(0, p.hp) / 100, 6)
    texture.needsUpdate = true
  }

  return {
    root, flashAt: -100, color: team,
    hit() { hitT = 0.12 },
    update(p, dt, time, cameraPos) {
      const dead = p.hp <= 0
      if (dead && !wasDead) deadT = 0
      if (!dead && wasDead) spawnT = 0.35
      wasDead = dead
      root.position.set(p.x, p.y, p.z)
      root.rotation.y = p.yaw

      // Local-space velocity → leg cycle direction.
      const fwd = -p.vx * Math.sin(p.yaw) - p.vz * Math.cos(p.yaw)
      const side = p.vx * Math.cos(p.yaw) - p.vz * Math.sin(p.yaw)
      const speed = Math.hypot(p.vx, p.vz)
      const moving = speed > 0.6 && p.ground
      phase += dt * speed * (p.crouched ? 3.2 : 2.3)
      const back = fwd < -0.3 ? -1 : 1
      const targetHipYaw = moving && Math.abs(side) > 0.5 ? T.MathUtils.clamp(Math.atan2(side, Math.abs(fwd) + 0.01) * back * -1, -0.85, 0.85) : 0
      hipYaw.v = damp(hipYaw.v, targetHipYaw, 10, dt)
      hips.rotation.y = hipYaw.v
      spine.rotation.y = -hipYaw.v

      const amp = Math.min(0.85, speed * 0.085) * (p.sprinting ? 1.15 : 1)
      let hipY = 0.95 + (moving ? Math.abs(Math.cos(phase)) * 0.04 : 0)
      for (const leg of legs) {
        const s = Math.sin(phase + (leg.side > 0 ? 0 : Math.PI))
        let tx = moving ? s * amp * back : 0
        let sx = moving ? -Math.max(0, Math.cos(phase + (leg.side > 0 ? 0 : Math.PI))) * amp * 1.3 : 0
        if (!p.ground) { tx = leg.side > 0 ? 0.55 : -0.15; sx = leg.side > 0 ? -0.9 : -0.4 }
        if (p.crouched) { tx = 1.25 + tx * 0.4; sx = -1.95 + sx * 0.3 }
        if (p.slide > 0) { tx = leg.side > 0 ? 1.35 : 0.6; sx = leg.side > 0 ? -0.15 : -1.6 }
        leg.thigh.rotation.x = damp(leg.thigh.rotation.x, tx, 18, dt)
        leg.shin.rotation.x = damp(leg.shin.rotation.x, sx, 18, dt)
      }
      if (p.crouched) hipY = 0.6
      if (p.slide > 0) hipY = 0.45
      hips.position.y = damp(hips.position.y, hipY, 16, dt)
      const lean = p.slide > 0 ? 0.55 : p.sprinting ? -0.2 : 0 // +x leans back, −x leans forward
      spine.rotation.x = damp(spine.rotation.x, lean + p.pitch * 0.3, 14, dt)
      head.rotation.x = p.pitch * 0.4 - lean * 0.6
      const sprintCarry = p.sprinting && !p.aiming ? 1 : 0
      arms.rotation.x = damp(arms.rotation.x, p.pitch * 0.7 - lean - sprintCarry * 0.6, 18, dt)
      arms.rotation.y = damp(arms.rotation.y, sprintCarry * 0.5, 12, dt)

      flash.visible = time - this.flashAt < 0.06
      if (flash.visible) flash.material.rotation = Math.random() * 6

      // Death fall + respawn scale-in.
      if (dead) {
        deadT += dt
        const k = Math.min(1, deadT / 0.45)
        body.rotation.x = -k * k * 1.45
        body.position.y = -k * 0.15
        root.visible = deadT < 2.2
        label.visible = false
      } else {
        body.rotation.x = 0; body.position.y = 0
        root.visible = true
        label.visible = true
        spawnT = Math.max(0, spawnT - dt)
        const s = 1 - spawnT * 0.6
        body.scale.set(s, s, s)
      }
      hitT = Math.max(0, hitT - dt)
      material.emissive.setRGB(hitT > 0 ? 0.6 : p.protect > 0 ? 0.05 : 0, hitT > 0 ? 0.08 : p.protect > 0 ? 0.25 : 0, hitT > 0 ? 0.05 : p.protect > 0 ? 0.32 : 0)

      if (!dead) {
        drawLabel(p)
        const dist = cameraPos ? cameraPos.distanceTo(root.position) : 10
        const s = T.MathUtils.clamp(dist * 0.085, 1.5, 6)
        label.scale.set(s, s / 4, 1)
        label.position.y = (p.crouched ? 1.6 : 2.05) + (p.slide > 0 ? -0.4 : 0)
      }
    },
    dispose() {
      root.traverse(o => { if (o.isMesh) o.geometry.dispose() })
      material.dispose(); texture.dispose(); label.material.dispose(); flash.material.dispose()
    },
  }
}
