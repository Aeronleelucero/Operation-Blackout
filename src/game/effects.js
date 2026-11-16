// Pooled world effects: instanced particles, tracers, bullet-hole decals, glows and spawn pillars.
// Nothing here allocates per shot after construction.
import * as T from 'three'
import { decalTexture, glowTexture } from './textures.js'

const _m = new T.Matrix4(), _q = new T.Quaternion(), _s = new T.Vector3(), _p = new T.Vector3(), _c = new T.Color()
const Z = new T.Vector3(0, 0, 1), HIDDEN = new T.Matrix4().makeScale(0, 0, 0)

export class Effects {
  constructor(scene) {
    this.scene = scene
    // Particles
    this.maxP = 360
    this.particles = new T.InstancedMesh(new T.BoxGeometry(1, 1, 1), new T.MeshBasicMaterial({ color: '#ffffff' }), this.maxP)
    this.particles.instanceMatrix.setUsage(T.DynamicDrawUsage)
    this.particles.frustumCulled = false
    this.p = Array.from({ length: this.maxP }, () => ({ pos: new T.Vector3(), vel: new T.Vector3(), life: 0, max: 1, size: 0.04, gravity: 0, drag: 0, spin: 0 }))
    for (let i = 0; i < this.maxP; i++) { this.particles.setMatrixAt(i, HIDDEN); this.particles.setColorAt(i, _c.set('#ffffff')) }
    this.pCursor = 0
    scene.add(this.particles)

    // Tracers
    this.maxT = 48
    const tgeo = new T.BoxGeometry(1, 1, 1).translate(0, 0, 0.5)
    this.tracers = new T.InstancedMesh(tgeo, new T.MeshBasicMaterial({ color: '#ffe3a3', transparent: true, opacity: 0.85, blending: T.AdditiveBlending, depthWrite: false }), this.maxT)
    this.tracers.instanceMatrix.setUsage(T.DynamicDrawUsage)
    this.tracers.frustumCulled = false
    this.t = Array.from({ length: this.maxT }, () => ({ from: new T.Vector3(), dir: new T.Vector3(), len: 0, travelled: 0, life: 0 }))
    for (let i = 0; i < this.maxT; i++) this.tracers.setMatrixAt(i, HIDDEN)
    this.tCursor = 0
    scene.add(this.tracers)

    // Decals
    this.maxD = 160
    this.decals = new T.InstancedMesh(new T.PlaneGeometry(1, 1), new T.MeshLambertMaterial({ map: decalTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }), this.maxD)
    this.decals.frustumCulled = false
    for (let i = 0; i < this.maxD; i++) this.decals.setMatrixAt(i, HIDDEN)
    this.dCursor = 0
    scene.add(this.decals)

    // Glow sprites (impact flashes, remote muzzle flashes)
    this.glows = Array.from({ length: 24 }, () => {
      const s = new T.Sprite(new T.SpriteMaterial({ map: glowTexture(), color: '#ffd28a', blending: T.AdditiveBlending, depthWrite: false, transparent: true }))
      s.visible = false
      scene.add(s)
      return { s, life: 0, max: 1, size: 1 }
    })
    this.gCursor = 0

    // Respawn pillars
    this.pillars = Array.from({ length: 6 }, () => {
      const m = new T.Mesh(new T.CylinderGeometry(0.7, 0.7, 4, 20, 1, true), new T.MeshBasicMaterial({ color: '#7fe8ff', transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide }))
      m.visible = false
      scene.add(m)
      return { m, life: 0 }
    })
    this.pillarCursor = 0

    // One reusable flash light for muzzle/impact lighting (fixed light count avoids shader recompiles).
    this.light = new T.PointLight('#ffb560', 0, 9, 2)
    scene.add(this.light)
    this.lightLife = 0
  }

  emit(pos, vel, color, life = 0.4, size = 0.04, gravity = 14, drag = 1.5) {
    const e = this.p[this.pCursor]
    this.particles.setColorAt(this.pCursor, _c.set(color))
    this.particles.instanceColor.needsUpdate = true
    this.pCursor = (this.pCursor + 1) % this.maxP
    e.pos.copy(pos); e.vel.copy(vel); e.life = e.max = life; e.size = size; e.gravity = gravity; e.drag = drag; e.spin = Math.random() * 10
  }

  impact(point, normal, { surface = 'concrete', decal = true } = {}) {
    const n = normal ? _p.set(normal.x, normal.y, normal.z) : _p.set(0, 1, 0)
    const N = n.clone()
    for (let i = 0; i < 6; i++) {
      const v = N.clone().multiplyScalar(2 + Math.random() * 3).add(new T.Vector3((Math.random() - 0.5) * 4, Math.random() * 2.5, (Math.random() - 0.5) * 4))
      this.emit(point, v, i < 3 ? '#ffd27a' : surface === 'wood' ? '#a77c4d' : '#d9d5cc', 0.25 + Math.random() * 0.2, i < 3 ? 0.025 : 0.05, 14)
    }
    for (let i = 0; i < 3; i++) this.emit(point, N.clone().multiplyScalar(0.8).add(new T.Vector3((Math.random() - 0.5), Math.random() * 0.6, (Math.random() - 0.5))), '#cfcac0', 0.6, 0.12, -0.6, 3)
    this.glow(point, 0.6, 0.06, '#ffd9a0')
    if (decal && normal) this.decal(point, N)
  }

  decal(point, normal) {
    _q.setFromUnitVectors(Z, normal)
    _q.multiply(new T.Quaternion().setFromAxisAngle(Z, Math.random() * Math.PI * 2))
    const s = 0.11 + Math.random() * 0.05
    _m.compose(_p.copy(point).addScaledVector(normal, 0.004), _q, _s.set(s, s, s))
    this.decals.setMatrixAt(this.dCursor, _m)
    this.decals.instanceMatrix.needsUpdate = true
    this.dCursor = (this.dCursor + 1) % this.maxD
  }

  blood(point, dir, head = false) {
    for (let i = 0; i < (head ? 14 : 8); i++) {
      const v = new T.Vector3(dir.x, dir.y, dir.z).multiplyScalar(2 + Math.random() * 2).add(new T.Vector3((Math.random() - 0.5) * 3, Math.random() * 2.5, (Math.random() - 0.5) * 3))
      this.emit(point, v, i % 3 ? '#b3262a' : '#7a1418', 0.45, 0.045 + Math.random() * 0.03, 12)
    }
  }

  tracer(from, to, speed = 260) {
    const t = this.t[this.tCursor]
    this.tCursor = (this.tCursor + 1) % this.maxT
    t.from.copy(from); t.dir.subVectors(to, from)
    t.len = t.dir.length(); t.dir.normalize()
    t.travelled = 0; t.life = 1; t.speed = speed
  }

  glow(pos, size = 1, life = 0.06, color = '#ffd28a') {
    const g = this.glows[this.gCursor]
    this.gCursor = (this.gCursor + 1) % this.glows.length
    g.s.position.copy(pos); g.s.material.color.set(color); g.s.visible = true
    g.life = g.max = life; g.size = size
    g.s.scale.setScalar(size)
  }

  muzzle(pos, strong = false) {
    this.glow(pos, strong ? 0.9 : 0.7, 0.05)
    this.light.position.copy(pos)
    this.light.intensity = strong ? 14 : 8
    this.lightLife = 0.05
  }

  death(pos, color) {
    for (let i = 0; i < 26; i++) {
      const v = new T.Vector3((Math.random() - 0.5) * 5, Math.random() * 5, (Math.random() - 0.5) * 5)
      this.emit(pos.clone().add(new T.Vector3(0, 0.6 + Math.random() * 0.9, 0)), v, i % 2 ? color : '#e8e4da', 0.8 + Math.random() * 0.4, 0.07 + Math.random() * 0.06, 9, 2)
    }
  }

  respawn(pos) {
    const p = this.pillars[this.pillarCursor]
    this.pillarCursor = (this.pillarCursor + 1) % this.pillars.length
    p.m.position.set(pos.x, pos.y + 2, pos.z)
    p.m.visible = true
    p.life = 0.8
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2
      this.emit(new T.Vector3(pos.x + Math.cos(a) * 0.6, pos.y + 0.1, pos.z + Math.sin(a) * 0.6), new T.Vector3(Math.cos(a) * 0.4, 2.5 + Math.random() * 2, Math.sin(a) * 0.4), '#9ff0ff', 0.9, 0.06, -1, 1)
    }
  }

  update(dt) {
    for (let i = 0; i < this.maxP; i++) {
      const e = this.p[i]
      if (e.life <= 0) continue
      e.life -= dt
      if (e.life <= 0) { this.particles.setMatrixAt(i, HIDDEN); continue }
      e.vel.y -= e.gravity * dt
      e.vel.multiplyScalar(Math.exp(-e.drag * dt))
      e.pos.addScaledVector(e.vel, dt)
      if (e.pos.y < 0.02 && e.gravity > 0) { e.pos.y = 0.02; e.vel.y *= -0.3; e.vel.x *= 0.6; e.vel.z *= 0.6 }
      const k = e.life / e.max, s = e.size * (0.4 + 0.6 * k)
      _q.setFromAxisAngle(_p.set(0.3, 1, 0.2).normalize(), e.spin * e.life)
      _m.compose(e.pos, _q, _s.set(s, s, s))
      this.particles.setMatrixAt(i, _m)
    }
    this.particles.instanceMatrix.needsUpdate = true

    for (let i = 0; i < this.maxT; i++) {
      const t = this.t[i]
      if (t.life <= 0) continue
      t.travelled += t.speed * dt
      const head = Math.min(t.len, t.travelled), tail = Math.max(0, head - 3.5)
      if (tail >= t.len - 0.01) { t.life = 0; this.tracers.setMatrixAt(i, HIDDEN); continue }
      _q.setFromUnitVectors(Z, t.dir)
      _m.compose(_p.copy(t.from).addScaledVector(t.dir, tail), _q, _s.set(0.018, 0.018, Math.max(0.01, head - tail)))
      this.tracers.setMatrixAt(i, _m)
    }
    this.tracers.instanceMatrix.needsUpdate = true

    for (const g of this.glows) {
      if (g.life <= 0) continue
      g.life -= dt
      g.s.visible = g.life > 0
      g.s.material.opacity = Math.max(0, g.life / g.max)
    }
    for (const p of this.pillars) {
      if (p.life <= 0) continue
      p.life -= dt
      p.m.visible = p.life > 0
      p.m.material.opacity = Math.max(0, p.life) * 0.55
      p.m.scale.set(1 + (0.8 - p.life) * 0.5, 1, 1 + (0.8 - p.life) * 0.5)
    }
    this.lightLife -= dt
    if (this.lightLife <= 0) this.light.intensity = 0
  }
}
