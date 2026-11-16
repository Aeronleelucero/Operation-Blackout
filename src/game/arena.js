// Renders the shared map data as a clean low-poly arena: white concrete with dark-red lower bands,
// tiled concrete floors, red containers, wooden crates, a bright sky and a distant skyline.
// Static meshes are merged per material so the whole arena costs ~20 draw calls.
import * as T from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { boxes, ramps } from './world.js'
import * as tex from './textures.js'

const BAND = { perimeter: 2.6, wall: 2.0, block: 2.2 }

// Box-projected UVs in world space so tiles and seams continue across neighbouring boxes.
function worldUV(g, scale) {
  const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i))
    let u, v
    if (ax >= ay && ax >= az) { u = p.getZ(i); v = p.getY(i) } else if (ay >= az) { u = p.getX(i); v = p.getZ(i) } else { u = p.getX(i); v = p.getY(i) }
    uv.setXY(i, u / scale, v / scale)
  }
  uv.needsUpdate = true
  return g
}

class Batches {
  constructor() { this.map = new Map() }
  add(material, geometry) {
    if (!this.map.has(material)) this.map.set(material, [])
    this.map.get(material).push(geometry)
  }
  box(material, x, y, z, w, h, d, scale = 0) {
    if (w <= 0 || h <= 0 || d <= 0) return
    const g = new T.BoxGeometry(w, h, d).translate(x, y, z)
    this.add(material, scale ? worldUV(g, scale) : g)
  }
  build(parent, { cast = true, receive = true } = {}) {
    for (const [material, list] of this.map) {
      const merged = mergeGeometries(list.map(g => (g.index ? g.toNonIndexed() : g)), false)
      for (const g of list) g.dispose()
      if (!merged) continue
      merged.computeBoundingSphere()
      const mesh = new T.Mesh(merged, material)
      mesh.castShadow = cast && !material.userData.noShadow
      mesh.receiveShadow = receive
      mesh.matrixAutoUpdate = false
      mesh.updateMatrix()
      parent.add(mesh)
    }
  }
}

function skyDome() {
  const geo = new T.SphereGeometry(450, 32, 16)
  const mat = new T.ShaderMaterial({
    side: T.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new T.Color('#2f86e0') }, mid: { value: new T.Color('#69b3ef') }, horizon: { value: new T.Color('#cfe9f8') } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; varying vec3 vP;
      void main(){ float h = clamp(vP.y, 0.0, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(0.0, 0.18, h)); c = mix(c, top, smoothstep(0.18, 0.75, h));
        if (vP.y < 0.0) c = horizon; gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  })
  const mesh = new T.Mesh(geo, mat)
  mesh.renderOrder = -10
  mesh.frustumCulled = false
  return mesh
}

function rampGeometry(r) {
  const { w, d, h } = r, hw = w / 2, hd = d / 2
  // Local: climb along +Z, high end at +Z.
  const v = [
    // top
    -hw, 0, -hd, hw, 0, -hd, hw, h, hd, -hw, 0, -hd, hw, h, hd, -hw, h, hd,
    // back (vertical at high end)
    -hw, 0, hd, -hw, h, hd, hw, h, hd, -hw, 0, hd, hw, h, hd, hw, 0, hd,
    // sides
    hw, 0, -hd, hw, 0, hd, hw, h, hd,
    -hw, 0, -hd, -hw, h, hd, -hw, 0, hd,
  ]
  const g = new T.BufferGeometry()
  g.setAttribute('position', new T.Float32BufferAttribute(v, 3))
  g.setAttribute('uv', new T.Float32BufferAttribute(new Array((v.length / 3) * 2).fill(0), 2))
  g.computeVertexNormals()
  const rot = r.axis === 'z' ? (r.sign > 0 ? 0 : Math.PI) : (r.sign > 0 ? Math.PI / 2 : -Math.PI / 2)
  g.rotateY(rot).translate(r.x, 0, r.z)
  return worldUV(g, 2)
}

function barrierGeometry(b) {
  const alongX = b.w >= b.d, len = alongX ? b.w : b.d, thick = alongX ? b.d : b.w
  const s = new T.Shape()
  s.moveTo(-thick / 2, 0); s.lineTo(thick / 2, 0); s.lineTo(thick / 2, 0.18); s.lineTo(thick * 0.2, 0.42)
  s.lineTo(thick * 0.18, b.h); s.lineTo(-thick * 0.18, b.h); s.lineTo(-thick * 0.2, 0.42); s.lineTo(-thick / 2, 0.18); s.closePath()
  const g = new T.ExtrudeGeometry(s, { depth: len, bevelEnabled: false })
  g.translate(0, 0, -len / 2)
  if (alongX) g.rotateY(Math.PI / 2)
  g.translate(b.x, b.y - b.h / 2, b.z)
  return g
}

export function buildArena(scene, quality = 'auto') {
  const L = (opts) => new T.MeshLambertMaterial(opts)
  const M = {
    concrete: L({ map: tex.concreteTexture() }),
    red: L({ map: tex.redTexture() }),
    trim: L({ color: '#d8d6ce' }),
    roof: L({ map: tex.roofTexture() }),
    floor: L({ map: tex.floorTexture() }),
    container: L({ map: tex.containerTexture() }),
    containerDark: L({ color: '#4f1b20' }),
    crate: L({ map: tex.crateTexture() }),
    grating: L({ map: tex.gratingTexture() }),
    steel: L({ color: '#5b666e' }),
    steelDark: L({ color: '#363e44' }),
    stair: L({ map: tex.stairTexture() }),
    ramp: L({ map: tex.rampTexture() }),
    barrier: L({ color: '#8c3439' }),
    stripe: L({ color: '#e9e4d6' }),
    metal: L({ color: '#a2abb0' }),
    window: L({ map: tex.windowTexture() }),
    skyline: L({ map: tex.skylineTexture(), fog: true }),
    skylineRed: L({ color: '#8a3a3f' }),
    barrelA: L({ color: '#2f5f8a' }), barrelB: L({ color: '#3b4248' }), barrelC: L({ color: '#9b3b36' }),
    pipe: L({ color: '#7b868c' }),
    lamp: L({ color: '#fff6d8', emissive: '#fff1c4', emissiveIntensity: 0.6 }),
  }
  M.window.userData.noShadow = true

  scene.background = new T.Color('#9fd2f2')
  scene.fog = new T.Fog('#c6e4f5', 110, 380)
  scene.add(skyDome())

  const hemi = new T.HemisphereLight('#e4f3ff', '#8c8274', 2.05)
  scene.add(hemi)
  const sun = new T.DirectionalLight('#fff4de', 2.55)
  sun.position.set(-26, 48, 18)
  sun.castShadow = quality !== 'low'
  const size = quality === 'high' ? 4096 : 2048
  sun.shadow.mapSize.set(size, size)
  Object.assign(sun.shadow.camera, { left: -52, right: 52, top: 52, bottom: -52, near: 5, far: 130 })
  sun.shadow.bias = -0.0006
  sun.shadow.normalBias = 0.035
  scene.add(sun, sun.target)

  const arena = new T.Group()
  arena.name = 'arena'
  scene.add(arena)
  const B = new Batches()

  // Ground: one big tiled plane.
  const floor = new T.PlaneGeometry(92, 92).rotateX(-Math.PI / 2)
  B.add(M.floor, worldUV(floor, 4))

  for (const b of boxes) {
    const bottom = b.y - b.h / 2, top = b.y + b.h / 2
    switch (b.kind) {
      case 'perimeter': case 'wall': case 'block': {
        const band = Math.min(BAND[b.kind], b.h)
        B.box(M.red, b.x, bottom + band / 2, b.z, b.w, band, b.d, 2)
        B.box(M.concrete, b.x, bottom + band + (b.h - band) / 2, b.z, b.w, b.h - band, b.d, 4)
        B.box(M.trim, b.x, bottom + band + 0.05, b.z, b.w + 0.08, 0.12, b.d + 0.08)
        if (b.kind !== 'wall') B.box(M.trim, b.x, top - 0.08, b.z, b.w + 0.12, 0.16, b.d + 0.12)
        if (b.kind === 'block') B.add(M.roof, worldUV(new T.PlaneGeometry(b.w - 0.02, b.d - 0.02).rotateX(-Math.PI / 2).translate(b.x, top + 0.005, b.z), 4))
        break
      }
      case 'lintel': B.box(M.concrete, b.x, b.y, b.z, b.w, b.h, b.d, 4); break
      case 'roof':
        B.box(M.concrete, b.x, b.y, b.z, b.w, b.h, b.d, 4)
        B.box(M.trim, b.x, top - 0.06, b.z, b.w + 0.1, 0.12, b.d + 0.1)
        B.add(M.roof, worldUV(new T.PlaneGeometry(b.w - 0.1, b.d - 0.1).rotateX(-Math.PI / 2).translate(b.x, top + 0.005, b.z), 4))
        break
      case 'parapet':
        B.box(M.concrete, b.x, b.y, b.z, b.w, b.h, b.d, 4)
        B.box(M.trim, b.x, top - 0.04, b.z, b.w + 0.06, 0.08, b.d + 0.06)
        break
      case 'crate': B.box(M.crate, b.x, b.y, b.z, b.w, b.h, b.d); break
      case 'container': {
        B.box(M.container, b.x, b.y, b.z, b.w - 0.06, b.h - 0.12, b.d - 0.06, 1)
        // corner posts and top/bottom rails
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box(M.containerDark, b.x + sx * (b.w / 2 - 0.08), b.y, b.z + sz * (b.d / 2 - 0.08), 0.16, b.h, 0.16)
        for (const y of [bottom + 0.06, top - 0.06]) B.box(M.containerDark, b.x, y, b.z, b.w, 0.12, b.d)
        // door bars on the short ends
        const alongX = b.w > b.d
        for (const s of [-1, 1]) for (const o of [-0.45, -0.15, 0.15, 0.45]) {
          if (alongX) B.box(M.steelDark, b.x + s * (b.w / 2 + 0.01), b.y, b.z + o * b.d, 0.04, b.h - 0.3, 0.05)
          else B.box(M.steelDark, b.x + o * b.w, b.y, b.z + s * (b.d / 2 + 0.01), 0.05, b.h - 0.3, 0.04)
        }
        break
      }
      case 'barrier':
        B.add(M.barrier, barrierGeometry(b))
        B.box(M.stripe, b.x, b.y + 0.12, b.z, b.w >= b.d ? b.w + 0.002 : b.w * 0.42, 0.12, b.w >= b.d ? b.d * 0.42 : b.d + 0.002)
        break
      case 'barrel': {
        const mat = [M.barrelA, M.barrelB, M.barrelC][b.id % 3]
        B.add(mat, new T.CylinderGeometry(b.w / 2, b.w / 2, b.h, 14).translate(b.x, b.y, b.z))
        for (const y of [-0.28, 0.28]) B.add(M.steelDark, new T.CylinderGeometry(b.w / 2 + 0.015, b.w / 2 + 0.015, 0.05, 14).translate(b.x, b.y + y * b.h, b.z))
        break
      }
      case 'stair':
        B.box(M.stair, b.x, b.y, b.z, b.w, b.h, b.d, 1.2)
        B.box(M.steelDark, b.x, top - 0.015, b.z, b.w + 0.01, 0.03, b.d + 0.01)
        break
      case 'catwalk':
        B.box(M.steel, b.x, b.y - 0.05, b.z, b.w, b.h - 0.1, b.d)
        B.add(M.grating, worldUV(new T.PlaneGeometry(b.w, b.d).rotateX(-Math.PI / 2).translate(b.x, top + 0.003, b.z), 1))
        break
      case 'rail': {
        B.box(M.steel, b.x, top - 0.04, b.z, b.w, 0.08, b.d + 0.04)
        B.box(M.steel, b.x, b.y - 0.05, b.z, b.w, 0.05, b.d)
        const alongX = b.w > b.d, len = alongX ? b.w : b.d
        for (let o = -len / 2; o <= len / 2 + 0.01; o += 2.25) B.box(M.steelDark, b.x + (alongX ? o : 0), b.y, b.z + (alongX ? 0 : o), 0.08, b.h, 0.08)
        break
      }
      case 'steel': B.box(M.steelDark, b.x, b.y, b.z, b.w, b.h, b.d); break
      case 'metal':
        B.box(M.metal, b.x, b.y, b.z, b.w, b.h, b.d)
        B.add(M.steelDark, new T.CylinderGeometry(Math.min(b.w, b.d) * 0.32, Math.min(b.w, b.d) * 0.32, 0.03, 16).translate(b.x, top + 0.015, b.z))
        break
      default: B.box(M.concrete, b.x, b.y, b.z, b.w, b.h, b.d, 4)
    }
  }
  for (const r of ramps) B.add(M.ramp, rampGeometry(r))

  // Windows on the solid towers and high on the compound walls.
  const windowQuad = (x, y, z, w, h, rotY) => B.add(M.window, new T.PlaneGeometry(w, h).rotateY(rotY).translate(x, y, z))
  for (const b of boxes) {
    if (b.kind === 'block' && b.h > 5) {
      for (const y of [3.4]) {
        for (let o = -b.w / 2 + 2; o <= b.w / 2 - 1.9; o += 2.6) { windowQuad(b.x + o, y, b.z - b.d / 2 - 0.02, 1.6, 1.5, Math.PI); windowQuad(b.x + o, y, b.z + b.d / 2 + 0.02, 1.6, 1.5, 0) }
        for (let o = -b.d / 2 + 2; o <= b.d / 2 - 1.9; o += 2.6) { windowQuad(b.x - b.w / 2 - 0.02, y, b.z + o, 1.6, 1.5, -Math.PI / 2); windowQuad(b.x + b.w / 2 + 0.02, y, b.z + o, 1.6, 1.5, Math.PI / 2) }
      }
    }
  }
  for (let o = -40; o <= 40; o += 5) {
    windowQuad(o, 6.4, -43.98, 2, 1.6, 0); windowQuad(o, 6.4, 43.98, 2, 1.6, Math.PI)
    windowQuad(-43.98, 6.4, o, 2, 1.6, Math.PI / 2); windowQuad(43.98, 6.4, o, 2, 1.6, -Math.PI / 2)
  }

  // Pipes, brackets and wall lamps along the compound walls.
  for (const s of [-1, 1]) {
    B.add(M.pipe, new T.CylinderGeometry(0.16, 0.16, 88, 10).rotateZ(Math.PI / 2).translate(0, 8.1, s * 43.75))
    B.add(M.pipe, new T.CylinderGeometry(0.16, 0.16, 88, 10).rotateX(Math.PI / 2).translate(s * 43.75, 8.1, 0))
    for (let o = -42; o <= 42; o += 6) {
      B.box(M.steelDark, o, 8.1, s * 43.85, 0.12, 0.45, 0.3)
      B.box(M.steelDark, s * 43.85, 8.1, o, 0.3, 0.45, 0.12)
    }
    for (let o = -36; o <= 36; o += 18) {
      B.box(M.steelDark, o, 5.0, s * 43.7, 0.12, 0.12, 0.6); B.box(M.lamp, o, 4.85, s * 43.42, 0.7, 0.14, 0.35)
      B.box(M.steelDark, s * 43.7, 5.0, o, 0.6, 0.12, 0.12); B.box(M.lamp, s * 43.42, 4.85, o, 0.35, 0.14, 0.7)
    }
  }

  // Distant skyline (non-colliding) so the compound sits inside a believable city block.
  let seed = 17
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * Math.PI * 2 + rnd() * 0.06
    const dist = 62 + rnd() * 40
    const w = 10 + rnd() * 16, d = 10 + rnd() * 16, h = 12 + rnd() * 34
    const x = Math.sin(a) * dist, z = Math.cos(a) * dist
    const g = worldUV(new T.BoxGeometry(w, h, d).translate(x, h / 2, z), 8)
    B.add(M.skyline, g)
    B.box(M.skylineRed, x, 2.5, z, w + 0.1, 5, d + 0.1)
    if (rnd() > 0.5) B.box(M.metal, x + (rnd() - 0.5) * w * 0.4, h + 0.8, z + (rnd() - 0.5) * d * 0.4, 3, 1.6, 2.5)
  }

  B.build(arena)

  // Painted signage (transparent, not batched).
  const sign = (text, x, y, z, rotY, w, h, color = '#2a3640') => {
    const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshLambertMaterial({ map: tex.textTexture(text, { color }), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }))
    m.position.set(x, y, z); m.rotation.y = rotY
    arena.add(m)
  }
  sign('FOUNDRY 09', 0, 6.0, -43.97, 0, 10, 3.1)
  sign('FOUNDRY 09', 0, 6.0, 43.97, Math.PI, 10, 3.1)
  sign('A', -24.6, 4.0, -26.98, 0, 2.2, 2.2, '#2a3640')
  sign('B', 24.6, 4.0, 26.98, Math.PI, 2.2, 2.2, '#2a3640')
  sign('BLACKOUT', 31, 4.4, -26.98, 0, 7, 2.1, '#8a3a3f')
  sign('BLACKOUT', -31, 4.4, 26.98, Math.PI, 7, 2.1, '#8a3a3f')
  sign('FREIGHT 02', 0, 3.25, 1.27, 0, 4.4, 1.3, '#e5d6cc')
  sign('FREIGHT 02', 0, 3.25, -1.27, Math.PI, 4.4, 1.3, '#e5d6cc')
  sign('OFFICE', -12, 2.5, -11.98, 0, 3.4, 1, '#eae4d8')
  sign('OFFICE', 12, 2.5, 11.98, Math.PI, 3.4, 1, '#eae4d8')

  // Clouds: chunky flat-shaded blocks far away.
  const cloudMat = new T.MeshBasicMaterial({ color: '#ffffff', fog: false })
  const cloudGeos = []
  for (let i = 0; i < 16; i++) {
    const a = rnd() * Math.PI * 2, dist = 180 + rnd() * 160, y = 70 + rnd() * 60
    for (let k = 0; k < 4; k++) cloudGeos.push(new T.BoxGeometry(18 + rnd() * 26, 4 + rnd() * 5, 10 + rnd() * 14).translate(Math.sin(a) * dist + (rnd() - 0.5) * 30, y + rnd() * 6, Math.cos(a) * dist + (rnd() - 0.5) * 20))
  }
  const clouds = new T.Mesh(mergeGeometries(cloudGeos.map(g => g.toNonIndexed())), cloudMat)
  clouds.matrixAutoUpdate = false
  scene.add(clouds)

  return { sun, hemi, arena, setShadows(on) { sun.castShadow = on } }
}
