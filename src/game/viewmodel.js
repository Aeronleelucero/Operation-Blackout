// First-person viewmodel: rendered in its own scene/camera after a depth clear so the weapon never
// clips into walls and keeps a constant on-screen size regardless of the world FOV.
import * as T from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { weaponMaterials, buildRifle, buildPistol, buildHand, poseHand, buildArm, solveArm } from './weapons3d.js'
import { WEAPONS, clamp } from './world.js'

const V = (x, y, z) => new T.Vector3(x, y, z)
const smooth = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x) }
const damp = (a, b, k, dt) => T.MathUtils.damp(a, b, k, dt)

function basis(xDir, yDir, tweak = [0, 0, 0]) {
  const x = xDir.clone().normalize(), y = yDir.clone().normalize(), z = new T.Vector3().crossVectors(x, y).normalize()
  y.crossVectors(z, x).normalize()
  const q = new T.Quaternion().setFromRotationMatrix(new T.Matrix4().makeBasis(x, y, z))
  return q.multiply(new T.Quaternion().setFromEuler(new T.Euler(...tweak)))
}

// Hand placements in weapon space. Tuned against reference renders of the viewmodel.
const POSES = {
  rifle: {
    hip: { pos: V(0.128, -0.15, -0.325), rot: new T.Euler(0.0, 0.055, -0.015) },
    adsDistance: 0.105,
    right: { pos: V(0.034, -0.052, 0.108), q: basis(V(0, -0.94, 0.34), V(1, 0, 0), [0, -0.12, 0]), curls: [0.5, 2.05, 2.1, 2.15], thumb: [-0.25, -0.9, 0.5] },
    rightElbow: V(0.11, -0.25, 0.33), rightShoulder: V(0.2, -0.3, 0.62),
    left: { pos: V(-0.047, -0.036, -0.272), q: basis(V(0, 0.282, 0.959), V(-1, 0, 0), [0, 0, -0.18]), curls: [2.5, 2.55, 2.6, 2.6], thumb: [0.9, 0.5, 0.4] },
    leftElbow: V(-0.2, -0.34, -0.12), leftShoulder: V(-0.34, -0.46, 0.3),
  },
  pistol: {
    hip: { pos: V(0.09, -0.072, -0.26), rot: new T.Euler(0.03, 0.06, -0.02) },
    adsDistance: 0.32,
    right: { pos: V(0.026, -0.022, 0.07), q: basis(V(0, -0.96, 0.28), V(1, 0, 0), [0, -0.1, 0]), curls: [0.45, 2.0, 2.05, 2.1], thumb: [-0.2, -0.8, 0.3] },
    rightElbow: V(0.11, -0.24, 0.32), rightShoulder: V(0.2, -0.3, 0.62),
    left: { pos: V(-0.034, -0.06, 0.07), q: basis(V(0, -0.94, 0.34), V(-1, 0, 0), [0, 0.2, 0]), curls: [1.6, 1.7, 1.75, 1.8], thumb: [0.2, -0.5, 0.2] },
    leftElbow: V(-0.13, -0.26, 0.3), leftShoulder: V(-0.2, -0.32, 0.62),
  },
}

class Spring {
  constructor(k = 160, c = 18) { this.x = 0; this.v = 0; this.k = k; this.c = c }
  step(dt) { this.v += (-this.k * this.x - this.c * this.v) * dt; this.x += this.v * dt; return this.x }
}

export class Viewmodel {
  constructor(renderer) {
    this.scene = new T.Scene()
    this.camera = new T.PerspectiveCamera(50, 1, 0.01, 10)
    const pmrem = new T.PMREMGenerator(renderer)
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    this.scene.environmentIntensity = 0.55
    pmrem.dispose()
    this.scene.add(new T.HemisphereLight('#e2f1ff', '#6f6a60', 1.25))
    const key = new T.DirectionalLight('#fff3dd', 2.4)
    key.position.set(-1.2, 2.2, 0.8)
    this.scene.add(key)
    const rim = new T.DirectionalLight('#bcd8ff', 0.8)
    rim.position.set(1.5, 0.5, -1)
    this.scene.add(rim)
    this.flashLight = new T.PointLight('#ffb35a', 0, 0.9, 2)
    this.scene.add(this.flashLight)

    this.M = weaponMaterials()
    this.pivot = new T.Group()
    this.scene.add(this.pivot)
    this.rigs = [this.makeRig('rifle', buildRifle(this.M)), this.makeRig('pistol', buildPistol(this.M))]
    this.weapon = 0
    this.rigs[1].group.visible = false

    // Shell casings (pooled).
    const shellGeo = new T.CylinderGeometry(0.0045, 0.0045, 0.024, 8).rotateZ(Math.PI / 2)
    this.shells = Array.from({ length: 10 }, () => {
      const m = new T.Mesh(shellGeo, this.M.brass)
      m.visible = false
      this.scene.add(m)
      return { m, v: new T.Vector3(), spin: new T.Vector3(), life: 0 }
    })
    this.shellCursor = 0

    this.recoilZ = new Spring(220, 22); this.recoilPitch = new Spring(180, 16); this.recoilYaw = new Spring(150, 14); this.recoilRoll = new Spring(150, 14)
    this.jumpY = new Spring(90, 11)
    this.aim = 0; this.sprint = 0; this.walk = 0; this.phase = 0; this.air = 0; this.crouch = 0
    this.sway = new T.Vector2(); this.tilt = 0; this.flash = 0; this.time = 0
    this.lowered = 0
  }

  makeRig(kind, model) {
    const P = POSES[kind]
    const group = new T.Group()
    group.add(model.root)
    const right = buildHand(this.M, 1), left = buildHand(this.M, -1)
    group.add(right, left)
    right.position.copy(P.right.pos); right.quaternion.copy(P.right.q)
    left.position.copy(P.left.pos); left.quaternion.copy(P.left.q)
    poseHand(right, P.right.curls, P.right.thumb)
    poseHand(left, P.left.curls, P.left.thumb)
    const rightArm = buildArm(this.M), leftArm = buildArm(this.M)
    group.add(rightArm, leftArm)
    this.pivot.add(group)
    // ADS: put the optic/sight centre on the camera axis.
    const ads = V(-model.sight.x, -model.sight.y, -P.adsDistance - model.sight.z)
    return { kind, P, group, model, right, left, rightArm, leftArm, ads, leftBase: { pos: P.left.pos.clone(), q: P.left.q.clone() } }
  }

  setWeapon(i) {
    if (i === this.weapon) return
    this.weapon = i
    this.rigs.forEach((r, k) => (r.group.visible = k === i))
  }

  fire() {
    const strength = this.weapon === 0 ? 1 : 1.35
    const a = 1 - this.aim * 0.55
    this.recoilZ.v += 1.25 * strength * a
    this.recoilPitch.v += (5.2 + Math.random() * 1.6) * strength * a
    this.recoilYaw.v += (Math.random() - 0.5) * 3 * a
    this.recoilRoll.v += (Math.random() - 0.4) * 5 * a
    this.flash = 0.05
    const rig = this.rigs[this.weapon]
    rig.model.flash.visible = true
    rig.model.flash.rotation.z = Math.random() * Math.PI
    rig.model.flash.scale.setScalar(0.8 + Math.random() * 0.45)
    if (rig.model.slide) rig.model.slide.position.z = 0.03
    this.ejectShell()
  }

  ejectShell() {
    const rig = this.rigs[this.weapon]
    const s = this.shells[this.shellCursor++ % this.shells.length]
    rig.group.updateMatrixWorld(true)
    s.m.position.copy(rig.model.port).applyMatrix4(rig.model.root.matrixWorld)
    s.v.set(0.9 + Math.random() * 0.5, 0.75 + Math.random() * 0.4, 0.15 + Math.random() * 0.25)
    s.spin.set(Math.random() * 20, Math.random() * 30, Math.random() * 10)
    s.life = 0.55
    s.m.visible = true
  }

  jump() { this.jumpY.v += 0.5 }
  land(impact) { this.jumpY.v -= clamp(impact * 0.045, 0.1, 0.9) }

  // World-space muzzle position for tracers, given the main camera.
  muzzleWorld(mainCamera, out = new T.Vector3()) {
    const rig = this.rigs[this.weapon]
    rig.group.updateMatrixWorld(true)
    out.copy(rig.model.muzzle).applyMatrix4(rig.model.root.matrixWorld)
    const k = Math.tan(T.MathUtils.degToRad(mainCamera.fov / 2)) / Math.tan(T.MathUtils.degToRad(this.camera.fov / 2))
    out.x *= k; out.y *= k
    return mainCamera.localToWorld(out)
  }

  update(dt, s) {
    this.time += dt
    const rig = this.rigs[this.weapon], P = rig.P, W = WEAPONS[this.weapon]
    this.aim = damp(this.aim, s.aiming ? 1 : 0, 16, dt)
    this.sprint = damp(this.sprint, s.sprinting ? 1 : 0, 9, dt)
    this.walk = damp(this.walk, s.ground ? clamp(s.speed / 8.6, 0, 1.3) : 0, 9, dt)
    this.air = damp(this.air, s.ground ? 0 : 1, 8, dt)
    this.crouch = damp(this.crouch, s.crouched ? 1 : 0, 10, dt)
    this.phase += dt * (s.ground ? s.speed : 0) * (this.sprint > 0.5 ? 1.05 : 1.3)
    this.sway.x = damp(this.sway.x, clamp(-s.lookDX * 0.00022, -0.03, 0.03), 9, dt)
    this.sway.y = damp(this.sway.y, clamp(s.lookDY * 0.00018, -0.025, 0.025), 9, dt)
    this.tilt = damp(this.tilt, clamp(-s.strafe * 0.012, -0.08, 0.08), 7, dt)
    const rz = this.recoilZ.step(dt), rp = this.recoilPitch.step(dt), ry = this.recoilYaw.step(dt), rr = this.recoilRoll.step(dt), jy = this.jumpY.step(dt)

    const a = this.aim, hip = 1 - a * 0.92
    const bobX = Math.sin(this.phase) * 0.011 * this.walk * hip
    const bobY = -Math.abs(Math.cos(this.phase)) * 0.009 * this.walk * hip
    const breathe = Math.sin(this.time * 1.7) * 0.0016 * (1 - a * 0.8)
    const pos = new T.Vector3().lerpVectors(P.hip.pos, rig.ads, a)
    pos.x += bobX + this.sway.x * hip
    pos.y += bobY + breathe + this.sway.y * hip + jy * 0.06 * hip - this.crouch * 0.012 * hip
    pos.z += rz * 0.045
    const rot = new T.Euler(
      T.MathUtils.lerp(P.hip.rot.x, 0, a) + rp * 0.022 + this.sway.y * 0.6 * hip + jy * 0.05 * hip + breathe * 2,
      T.MathUtils.lerp(P.hip.rot.y, 0, a) + ry * 0.012 + this.sway.x * 0.8 * hip,
      T.MathUtils.lerp(P.hip.rot.z, 0, a) + rr * 0.012 + bobX * 1.4 + this.tilt * hip,
    )
    // Sprint: weapon rolls in and dips toward the bottom-left.
    const sp = this.sprint * (1 - a)
    pos.x += -0.03 * sp + Math.sin(this.phase) * 0.018 * sp
    pos.y += -0.04 * sp - Math.abs(Math.cos(this.phase)) * 0.012 * sp
    pos.z += 0.03 * sp
    rot.x += -0.32 * sp; rot.y += 0.72 * sp; rot.z += 0.38 * sp

    // Weapon swap: raise the new weapon from below.
    const swapK = s.swap > 0 ? s.swap / 0.42 : 0
    this.lowered = damp(this.lowered, s.dead ? 1 : 0, 6, dt)
    const low = Math.max(smooth(swapK), this.lowered)
    pos.y -= 0.32 * low; rot.x -= 0.9 * low

    // Reload choreography.
    rig.left.position.copy(rig.leftBase.pos); rig.left.quaternion.copy(rig.leftBase.q)
    rig.model.magazine.position.copy(rig.model.magHome); rig.model.magazine.visible = true; rig.model.magazine.rotation.set(0, 0, 0)
    if (rig.model.chargingHandle) rig.model.chargingHandle.position.z = 0
    if (s.reloadT >= 0) this.animateReload(rig, s.reloadT, pos, rot)
    if (rig.model.slide) rig.model.slide.position.z = damp(rig.model.slide.position.z, 0, 30, dt)

    this.pivot.position.copy(pos)
    this.pivot.rotation.copy(rot)
    this.camera.fov = damp(this.camera.fov, s.aiming ? 44 : 50, 14, dt)
    this.camera.updateProjectionMatrix()

    solveArm(rig.rightArm, rig.right.position, P.rightElbow, P.rightShoulder)
    const leftWrist = rig.left.position
    const elbow = P.leftElbow.clone().lerp(V(-0.16, -0.32, 0.1), clamp((leftWrist.distanceTo(rig.leftBase.pos) - 0.05) * 3, 0, 1))
    solveArm(rig.leftArm, leftWrist, elbow, P.leftShoulder)

    // Muzzle flash + light.
    this.flash = Math.max(0, this.flash - dt)
    rig.model.flash.visible = this.flash > 0.012
    this.flashLight.intensity = this.flash > 0 ? 0.07 : 0
    rig.group.updateMatrixWorld(true)
    this.flashLight.position.copy(rig.model.muzzle).applyMatrix4(rig.model.root.matrixWorld)
    if (rig.model.reticle) rig.model.reticle.visible = true

    for (const sh of this.shells) {
      if (sh.life <= 0) continue
      sh.life -= dt
      sh.v.y -= 6 * dt
      sh.m.position.addScaledVector(sh.v, dt)
      sh.m.rotation.x += sh.spin.x * dt; sh.m.rotation.y += sh.spin.y * dt; sh.m.rotation.z += sh.spin.z * dt
      sh.m.visible = sh.life > 0
    }
    void W
  }

  animateReload(rig, t, pos, rot) {
    const L = rig.left, base = rig.leftBase, mag = rig.model.magazine, home = rig.model.magHome
    const seg = (a, b) => smooth((t - a) / (b - a))
    const isRifle = rig.kind === 'rifle'
    // Weapon tilt in/out with small jolts on mag seat and bolt release.
    const tiltIn = seg(0, 0.12) * (1 - seg(0.86, 1))
    rot.z -= tiltIn * (isRifle ? 0.62 : 0.35)
    rot.x += tiltIn * 0.2
    rot.y += tiltIn * 0.15
    pos.x -= tiltIn * 0.05; pos.y += tiltIn * 0.07; pos.z += tiltIn * 0.03
    const seat = Math.exp(-Math.pow((t - 0.6) * 30, 2)), release = Math.exp(-Math.pow((t - 0.81) * 35, 2))
    pos.y += seat * 0.012 - release * 0.008; rot.x += seat * 0.05 + release * 0.04

    const grab = isRifle ? V(-0.012, -0.2, -0.048) : V(-0.015, -0.15, 0.04)
    const pouch = isRifle ? V(-0.16, -0.42, 0.05) : V(-0.15, -0.38, 0.12)
    const insert = isRifle ? V(-0.012, -0.235, -0.048) : V(-0.015, -0.17, 0.045)
    const seated = isRifle ? V(-0.012, -0.19, -0.048) : V(-0.015, -0.135, 0.042)
    const handle = V(-0.02, 0.06, 0.15)
    const palmUp = basis(V(0, 0, -1), V(0, -1, 0), [0, 0, 0.4])
    const handleQ = basis(V(0, 0, -1), V(1, 0, 0), [0.3, 0, 0])
    const keys = isRifle
      ? [[0, base.pos, base.q], [0.1, grab, palmUp], [0.17, grab, palmUp], [0.32, pouch, palmUp], [0.5, insert, palmUp], [0.6, seated, palmUp], [0.7, handle, handleQ], [0.76, handle.clone().add(V(0, 0, 0.055)), handleQ], [0.8, handle.clone().add(V(0, 0, 0.055)), handleQ], [1, base.pos, base.q]]
      : [[0, base.pos, base.q], [0.12, grab, palmUp], [0.22, grab, palmUp], [0.4, pouch, palmUp], [0.6, insert, palmUp], [0.7, seated, palmUp], [1, base.pos, base.q]]
    for (let i = 0; i < keys.length - 1; i++) {
      const [ta, pa, qa] = keys[i], [tb, pb, qb] = keys[i + 1]
      if (t >= ta && t <= tb) {
        const k = smooth((t - ta) / (tb - ta))
        L.position.lerpVectors(pa, pb, k)
        L.quaternion.slerpQuaternions(qa, qb, k)
        break
      }
    }
    // Magazine: drop out, travel with the hand, seat.
    const dropStart = isRifle ? 0.15 : 0.18, newStart = isRifle ? 0.34 : 0.42, seatT = isRifle ? 0.6 : 0.7
    if (t > dropStart && t < newStart) {
      const f = (t - dropStart) * (isRifle ? 2.1 : 1.45)
      mag.position.set(home.x, home.y - 4.5 * f * f - 0.02, home.z + f * 0.05)
      mag.rotation.x = f * 0.8
      mag.visible = f < 0.5
    } else if (t >= newStart && t < seatT) {
      // Carry offset = magazine origin relative to the hand when seated, so the hand arrives with it.
      mag.position.copy(L.position).add(home).sub(seated)
      mag.position.y = Math.min(home.y, mag.position.y)
    }
    if (isRifle && rig.model.chargingHandle) rig.model.chargingHandle.position.z = t > 0.7 && t < 0.8 ? 0.055 * seg(0.7, 0.76) : 0
    if (!isRifle && rig.model.slide) rig.model.slide.position.z = t > 0.72 && t < 0.8 ? 0.03 : rig.model.slide.position.z
  }
}

