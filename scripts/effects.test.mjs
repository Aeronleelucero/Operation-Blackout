import { test } from 'node:test'
import assert from 'node:assert/strict'
import * as T from 'three'
import { Effects, TRACER_LIFETIME } from '../src/game/effects.js'

// Only procedural texture drawing needs a DOM; exercise real Three.js meshes and buffers.
const ctx = new Proxy({}, { get: (_, key) => key.startsWith('create') ? () => ({ addColorStop() {} }) : () => {} })
globalThis.document = { createElement: () => ({ getContext: () => ctx }) }
const from = new T.Vector3(), to = new T.Vector3(0, 0, -30)
const hidden = (fx, i) => { const m = new T.Matrix4(); fx.tracers.getMatrixAt(i, m); return m.elements[0] === 0 && m.elements[5] === 0 && m.elements[10] === 0 }

test('local and remote tracers appear immediately, fade independently, and expire at 100 ms', () => {
  const fx = new Effects(new T.Scene())
  fx.tracer(from, to, 300)
  assert.equal(hidden(fx, 0), false)
  fx.update(0.05)
  assert.ok(Math.abs(fx.tracerOpacity.getX(0) - 0.5) < 1e-6)
  fx.tracer(from, to, 220)
  fx.update(0.051)
  assert.equal(hidden(fx, 0), true)
  assert.equal(hidden(fx, 1), false)
  fx.update(0.05)
  assert.equal(hidden(fx, 1), true)
})

test('automatic fire reuses bounded resources; long frames, pauses and session resets clear effects', () => {
  const scene = new T.Scene(), fx = new Effects(scene)
  const geometry = fx.tracers.geometry, material = fx.tracers.material, count = scene.children.length
  for (let i = 0; i < 1000; i++) { fx.tracer(from, to); fx.update(1 / 60) }
  fx.update(1)
  assert.ok(fx.t.every(t => t.life === 0))
  assert.ok(fx.t.every((_, i) => hidden(fx, i)))
  assert.equal(fx.tracers.geometry, geometry); assert.equal(fx.tracers.material, material)
  assert.equal(scene.children.length, count); assert.equal(fx.t.length, 48)
  fx.tracer(from, to); fx.muzzle(from); fx.impact(to, { x: 0, y: 0, z: 1 })
  fx.clear(); fx.clear()
  assert.ok(fx.t.every(t => t.life === 0)); assert.ok(fx.glows.every(g => !g.s.visible))
  fx.tracer(from, to); fx.update(TRACER_LIFETIME)
  assert.equal(hidden(fx, 0), true)
})
