// Start Vite and Chromium with --remote-debugging-port=9223, then run:
// node scripts/browser/tracers.mjs [CDP URL] [game URL]
// Uses the development-only QA inputs; shooting, ammo, reload and rendering run normally.
import assert from 'node:assert/strict'
const targets = await (await fetch(process.argv[2] || 'http://127.0.0.1:9223/json')).json()
const target = targets.find(t => t.type === 'page')
const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise(resolve => { ws.onopen = resolve })
let id = 0
const pending = new Map(), errors = []
ws.onmessage = ({ data }) => {
  const m = JSON.parse(data)
  if (m.id) { pending.get(m.id)?.(m); pending.delete(m.id) }
  if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.text)
}
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const n = ++id
  const timeout = setTimeout(() => reject(new Error(`CDP timeout: ${method}`)), 30000)
  pending.set(n, m => { clearTimeout(timeout); m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result) })
  ws.send(JSON.stringify({ id: n, method, params }))
})
const evaluate = async expression => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  assert.ok(!r.exceptionDetails, JSON.stringify(r.exceptionDetails))
  return r.result.value
}
const wait = ms => new Promise(r => setTimeout(r, ms))
try {
  await send('Runtime.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: 320, height: 240, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url: process.argv[3] || 'http://127.0.0.1:5173/play.html?qa' })
  for (let i = 0; i < 60; i++) { if (await evaluate('!!window.__qa')) break; await wait(500) }
  await evaluate('localStorage.setItem("ob-quality", "low"); document.getElementById("quality").value="low"; document.getElementById("quality").dispatchEvent(new Event("change")); document.getElementById("practiceBtn").click()')
  await wait(4000)
  await evaluate('for(const p of __qa.state().players) if(p.bot) __qa.command("remove", {id:p.id}); __qa.command("qaDuel"); __qa.control(); __qa.look(0,0); __qa.fire(true)')
  let d, baseline
  for (let i = 0; i < 60; i++) {
    await wait(2000)
    d = await evaluate('blackoutDiagnostics()')
    if (d.effects.emitted >= 80 && !baseline) baseline = d.memory
    if (d.effects.emitted >= 100) break
  }
  await evaluate('__qa.fire(false)')
  assert.ok(d.effects.emitted >= 100, `Only ${d.effects.emitted} shots fired`)
  await wait(1000)
  d = await evaluate('blackoutDiagnostics()')
  assert.equal(d.effects.tracers, 0)
  assert.deepEqual(d.memory, baseline, 'GPU resource counts grew during repeated firing')
  await evaluate('__qa.command("qaEnd")')
  await wait(1500)
  d = await evaluate('blackoutDiagnostics()')
  assert.equal(d.effects.tracers, 0)
  assert.deepEqual(errors, [])
  console.log('PASS: 100+ rounds, zero surviving tracers, stable GPU resources, match end cleanup, no browser exceptions')
} finally { ws.close() }
