import fs from 'node:fs'
import vm from 'node:vm'

let drawCalls = 0
let nextFrame
const gradient = { addColorStop() {} }
const context = new Proxy({}, {
  get(target, key) {
    if (key === 'createLinearGradient') return () => gradient
    if (key === 'globalAlpha' || key === 'fillStyle' || key === 'strokeStyle' || key === 'lineWidth' || key === 'globalCompositeOperation') return target[key]
    return (...args) => { drawCalls++; return args }
  },
  set(target, key, value) { target[key] = value; return true },
})

function element() {
  return {
    hidden: false,
    textContent: '',
    innerHTML: '',
    style: { width: '', setProperty() {} },
    classList: { add() {}, remove() {}, toggle() {} },
    appendChild() {}, remove() {},
    querySelectorAll() { return [] },
    addEventListener() {},
  }
}

const elements = new Map()
const get = (id) => {
  if (!elements.has(id)) elements.set(id, element())
  return elements.get(id)
}
const game = get('game')
game.getContext = () => context
game.requestPointerLock = () => {}
const radar = get('radar')
radar.getContext = () => context

const document = {
  body: element(),
  pointerLockElement: null,
  querySelector(selector) { return selector === '#game' ? game : radar },
  getElementById: get,
  createElement() { return element() },
  addEventListener() {},
  exitPointerLock() {},
}

const sandbox = {
  console, document,
  window: { devicePixelRatio: 1 },
  innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1,
  addEventListener() {}, requestAnimationFrame(callback) { nextFrame = callback }, setTimeout() {}, clearTimeout() {},
  performance: { now: () => 0 },
  Math, Float32Array,
}
vm.createContext(sandbox)
vm.runInContext(fs.readFileSync(new URL('../public/fps.js', import.meta.url), 'utf8'), sandbox)
if (drawCalls < 100) throw new Error(`Expected initial world render, got ${drawCalls} drawing operations`)
get('deployBtn').onclick()
if (typeof nextFrame !== 'function') throw new Error('Deploy did not schedule the game loop')
nextFrame(16)
if (!get('startScreen').classList || get('hud').hidden) throw new Error('Deploy did not activate the HUD')
console.log(`FPS smoke test passed with ${drawCalls} drawing operations and an active game loop.`)
