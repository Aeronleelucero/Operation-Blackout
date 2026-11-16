// Start Chromium with --remote-debugging-port=9230. Run after npm run build:
// node scripts/browser/dashboard.mjs [http://127.0.0.1:9230]
import assert from 'node:assert/strict'
import { createServer, preview } from 'vite'
import { signalingFixture } from './local-signaling.mjs'
const cdp = process.argv[2] || 'http://127.0.0.1:9230'
const wait = ms => new Promise(r => setTimeout(r, ms))
async function tab() {
  const target = await (await fetch(cdp + '/json/new?about:blank', { method: 'PUT' })).json()
  const ws = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise(r => { ws.onopen = r })
  let id = 0
  const pending = new Map(), errors = [], failures = []
  ws.onmessage = ({ data }) => {
    const m = JSON.parse(data)
    if (m.id) { pending.get(m.id)?.(m); pending.delete(m.id) }
    if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.text)
    if (m.method === 'Network.responseReceived' && m.params.response.status >= 400) failures.push(m.params.response.url)
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push(m.params.args.map(a => a.value || a.description).join(' '))
  }
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const n = ++id, timer = setTimeout(() => reject(new Error('CDP timeout: ' + method)), 60000)
    pending.set(n, m => { clearTimeout(timer); m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result) })
    ws.send(JSON.stringify({ id: n, method, params }))
  })
  const evaluate = async expression => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    assert.ok(!r.exceptionDetails, JSON.stringify(r.exceptionDetails)); return r.result.value
  }
  const until = async (expression, timeout = 45000) => {
    const end = Date.now() + timeout
    while (Date.now() < end) {
      try { const value = await evaluate(expression); if (value) return value }
      catch (error) { if (!/navigated|Execution context|Cannot find context|__pageCheck is not defined/.test(error.message)) throw error }
      await wait(150)
    }
    throw new Error('Timed out: ' + expression)
  }
  await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: 960, height: 720, deviceScaleFactor: 1, mobile: false })
  await send('Emulation.setFocusEmulationEnabled', { enabled: true })
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `
    localStorage.setItem('ob-quality','low');
    window.__pageCheck={token:crypto.randomUUID(),paints:[],shifts:0,gameContexts:0};
    const getContext=HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext=function(type,...args){if(this.id==='game' && type==='webgl2') __pageCheck.gameContexts++;return getContext.call(this,type,...args)};
    new PerformanceObserver(list=>{for(const e of list.getEntries()){const menu=document.getElementById('menu');if(e.name==='first-contentful-paint') __pageCheck.paints.push({position:menu&&getComputedStyle(menu).position,css:[...document.styleSheets].some(s=>s.href?.includes('.css')),background:getComputedStyle(document.body).backgroundColor})}}).observe({type:'paint',buffered:true});
    new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)__pageCheck.shifts+=e.value}).observe({type:'layout-shift',buffered:true});
    // Local fixture needs no public STUN service; real RTC data channels still carry game traffic.
    const RTC=window.RTCPeerConnection;
    window.RTCPeerConnection=class extends RTC{constructor(config,...args){super({...config,iceServers:[]},...args)}};
  ` })
  return { send, evaluate, until, errors, failures, close: async () => { await fetch(cdp + '/json/close/' + target.id); ws.close() } }
}
let dev, prod, stopSignal, host, guest
try {
  stopSignal = await signalingFixture(9191)
  Object.assign(process.env, { VITE_PEER_HOST: '127.0.0.1', VITE_PEER_PORT: '9191', VITE_PEER_SECURE: 'false' })
  dev = await createServer({ server: { host: '127.0.0.1', port: 5190, strictPort: true }, logLevel: 'error' })
  await dev.listen()
  prod = await preview({ preview: { host: '127.0.0.1', port: 5191, strictPort: true }, logLevel: 'error' })
  host = await tab(); guest = await tab()
  for (const origin of ['http://127.0.0.1:5190', 'http://127.0.0.1:5191']) {
    for (const route of ['/', '/index.html', '/play.html']) {
      await host.send('Network.setCacheDisabled', { cacheDisabled: true })
      await host.send('Network.emulateNetworkConditions', { offline: false, latency: 80, downloadThroughput: 1024 * 1024, uploadThroughput: 1024 * 1024 })
      const oldToken = await host.evaluate('window.__pageCheck?.token');
      await host.send('Page.navigate', { url: origin + route + '?qa&routecheck=1#dashboard' });
      await host.until(`window.__pageCheck?.token && __pageCheck.token !== ${JSON.stringify(oldToken) || 'null'}`)
      for (const reload of [null, false, true]) {
        if (reload !== null) {
          await host.send('Network.setCacheDisabled', { cacheDisabled: reload })
          const oldToken = await host.evaluate('__pageCheck.token');
          await host.send('Page.reload', { ignoreCache: reload });
          await host.until(`window.__pageCheck?.token && __pageCheck.token !== ${JSON.stringify(oldToken)}`)
        }
        await host.until(`document.body?.dataset.engine==='ready' && !!window.blackoutDiagnostics`)
        await host.until('__pageCheck.paints.length>0')
        const check = await host.evaluate(`({check:__pageCheck,url:location.href,canvases:document.querySelectorAll('#game').length,scripts:[...document.querySelectorAll('script[type=module]')].filter(s=>!s.src.includes('/@vite/client')).length,heading:document.querySelector('h1').textContent,old:/INITIALIZE BRIEFING|ENTER THE FOUNDRY/.test(document.body.textContent),hidden:document.getElementById('engineLoading').hidden})`)
        assert.equal(check.canvases, 1); assert.equal(check.scripts, 1); assert.equal(check.check.gameContexts, 1, JSON.stringify(check))
        assert.match(check.heading, /THE FOUNDRY/); assert.equal(check.old, false); assert.equal(check.hidden, true)
        assert.match(check.url, /routecheck=1#dashboard$/)
        if (route === '/play.html') assert.ok(!check.url.includes('/play.html'))
        assert.ok(check.check.paints.every(p => p.position === 'fixed' && p.css && p.background !== 'rgb(255, 255, 255)'), JSON.stringify(check))
        assert.equal(check.check.shifts, 0, JSON.stringify(check))
      }
      console.log('PASS refresh / hard refresh / throttled first paint:', origin + route)
    }
  }
  await host.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 })
  await host.send('Page.navigate', { url: 'http://127.0.0.1:5190/?qa' })
  await host.until('window.__qa && document.body.dataset.engine==="ready"')
  await host.evaluate('document.getElementById("hostBtn").click()')
  const code = await host.until('blackoutDiagnostics().conn === "CONNECTED" && blackoutDiagnostics().room')
  await guest.send('Page.navigate', { url: 'http://127.0.0.1:5190/play.html?qa' })
  await guest.until('window.__qa && document.body.dataset.engine==="ready"')
  await guest.evaluate(`document.getElementById('roomCode').value=${JSON.stringify(code)};document.getElementById('joinBtn').click()`)
  await guest.until('blackoutDiagnostics().conn === "CONNECTED" && blackoutDiagnostics().players.length === 2')
  await host.until('blackoutDiagnostics().players.length === 2')
  await host.evaluate('document.getElementById("startBtn").click()')
  await host.until('blackoutDiagnostics().phase === "playing"')
  await guest.until('blackoutDiagnostics().phase === "playing"')
  for (const page of [host, guest]) {
    await page.evaluate('__qa.control();__qa.fire(true)')
    await page.until('blackoutDiagnostics().me.ammo[0]<30')
    await page.evaluate('__qa.fire(false)')
  }
  console.log('PASS Host / Join / match / host and guest firing over real WebRTC')
  await guest.evaluate('document.getElementById("exitBtn").click()')
  await host.evaluate('document.getElementById("exitBtn").click(); document.getElementById("practiceBtn").click()')
  await host.until('blackoutDiagnostics().phase === "playing" && blackoutDiagnostics().players.length === 6')
  await host.evaluate('__qa.control();__qa.fire(true)')
  await host.until('blackoutDiagnostics().me.ammo[0]<30')
  await host.evaluate('__qa.fire(false)')
  console.log('PASS Solo Training / 5 bots / firing')
  assert.deepEqual(host.errors, []); assert.deepEqual(guest.errors, [])
  assert.deepEqual(host.failures, []); assert.deepEqual(guest.failures, [])
  console.log('PASS no browser exceptions, console errors or HTTP errors')
} finally {
  for (const page of [host, guest]) if (page) { await page.evaluate('window.__qa && document.getElementById("exitBtn").click()').catch(() => {}); await page.close() }
  if (dev) await dev.close()
  if (prod) await new Promise(r => prod.httpServer.close(r))
  if (stopSignal) await stopSignal()
}
