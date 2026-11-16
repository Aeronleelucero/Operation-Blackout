// Operation: Blackout — client. Renders the arena, predicts the local player with the shared
// simulation, reconciles against host snapshots, interpolates remote players and drives the HUD.
import * as T from 'three'
import './game.css'
import { buildArena } from './arena.js'
import { Viewmodel } from './viewmodel.js'
import { makeSoldier } from './soldier.js'
import { Effects } from './effects.js'
import { Sound } from './audio.js'
import { Room, CONN } from './network.js'
import { Predictor, Interpolator } from './prediction.js'
import { quantizeAngle } from './protocol.js'
import { INTERP_DELAY } from './authority.js'
import { DT, WEAPONS, PLAYER, rayWorld, rayPlayers, clamp, currentSpread, pickups } from './world.js'

const $ = id => document.getElementById(id)
const canvas = $('game')
const qs = new URLSearchParams(location.search)

// ------------------------------------------------------------------------------------ renderer
let renderer
try {
  renderer = new T.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false })
} catch (error) {
  $('loadStatus').textContent = 'WebGL could not start. Enable hardware acceleration and reload.'
  throw error
}
renderer.outputColorSpace = T.SRGBColorSpace
renderer.toneMapping = T.NeutralToneMapping
renderer.toneMappingExposure = 1.05
renderer.shadowMap.enabled = true
renderer.shadowMap.type = T.PCFSoftShadowMap
renderer.autoClear = false

const settings = { sensitivity: 1.6, fov: 90, quality: 'auto', sound: true }
try {
  settings.sensitivity = clamp(Number(localStorage.getItem('ob-sensitivity')) || 1.6, 0.5, 3)
  settings.fov = clamp(Number(localStorage.getItem('ob-fov')) || 90, 70, 110)
  settings.quality = localStorage.getItem('ob-quality') || 'auto'
  $('name').value = localStorage.getItem('ob-name') || 'Strike One'
} catch {}

const scene = new T.Scene()
const camera = new T.PerspectiveCamera(74, 1, 0.05, 900)
camera.rotation.order = 'YXZ'
scene.add(camera)
const world = buildArena(scene, settings.quality)
const view = new Viewmodel(renderer)
const effects = new Effects(scene)
const sound = new Sound()
let pixelRatio = Math.min(devicePixelRatio, settings.quality === 'high' ? 2 : 1.5)

// Ammo resupply crates (one shared geometry/material set; visibility follows host state).
const pickupMeshes = (() => {
  const box = new T.BoxGeometry(0.7, 0.42, 0.45), band = new T.BoxGeometry(0.72, 0.1, 0.47)
  const body = new T.MeshLambertMaterial({ color: '#3f5a37' }), stripe = new T.MeshLambertMaterial({ color: '#e7c14a', emissive: '#6a5410' })
  const ring = new T.Mesh(new T.RingGeometry(0.55, 0.7, 28).rotateX(-Math.PI / 2), new T.MeshBasicMaterial({ color: '#ffd76a', transparent: true, opacity: 0.55, depthWrite: false }))
  return pickups.map(p => {
    const g = new T.Group()
    const crate = new T.Mesh(box, body), b = new T.Mesh(band, stripe)
    crate.castShadow = true
    g.add(crate, b)
    const r = ring.clone()
    r.position.y = -0.33
    g.add(r)
    g.position.set(p.x, p.y + 0.45, p.z)
    scene.add(g)
    return g
  })
})()

// ------------------------------------------------------------------------------------ state
const predictor = new Predictor()
const interp = new Interpolator(INTERP_DELAY)
let state, previousPhase, roundKey, serverMe, me
let outbox = []
let renderPrev = new T.Vector3(), renderCur = new T.Vector3(), smoothOffset = new T.Vector3()
let acc = 0
let yaw = 0, pitch = 0, kick = 0, kickYaw = 0, shake = 0, roll = 0
let slot = 0
let playing = false, paused = false, locked = false, dragLook = false, qaControl = false, inLobbyView = false
let fireHeld = false, aimHeld = false
const latch = { fire: false, jump: false, reload: false } // taps survive until the next simulation tick
let lookDX = 0, lookDY = 0
let eyeHeight = PLAYER.height - PLAYER.eye, landDip = 0, stepDist = 0
let deathAt = 0, killerName = '', killerId = null
let uiClock = 0, frames = 0, frameTime = 0, fps = 60, frameMs = 16, lastTime = performance.now()
let noticeUntil = 0, hitUntil = 0, damageUntil = 0
let lastAttempt = null       // { host, code } for the retry button
let netWindow = { t: performance.now(), bytesIn: 0, bytesOut: 0, snapshots: 0, inRate: 0, outRate: 0, snapRate: 0 }
const keys = new Set()
const soldiers = new Map()
const seenEvents = new Set()
const tmpV = new T.Vector3(), tmpV2 = new T.Vector3()
const nowSec = () => performance.now() / 1000
const renderTime = () => interp.renderTime(nowSec())

// Everything that belongs to one room/match session. Called whenever we enter practice, host,
// join, leave, or lose a connection, so nothing (prediction, snapshots, event ids, phase, round,
// remote players, HUD feeds) can leak from a previous session into the next.
function resetSession() {
  effects.clear()
  state = { phase: 'menu', players: [], events: [], pickups: 0 }
  previousPhase = 'menu'
  roundKey = null
  serverMe = me = null
  predictor.reset()
  interp.reset()
  outbox = []
  acc = 0
  slot = 0
  kick = kickYaw = shake = roll = landDip = 0
  smoothOffset.set(0, 0, 0)
  seenEvents.clear()
  deathAt = 0; killerName = ''; killerId = null
  hitUntil = damageUntil = noticeUntil = 0
  inLobbyView = false
  for (const m of soldiers.values()) { scene.remove(m.root); m.dispose() }
  soldiers.clear()
  for (const id of ['killFeed', 'chatLog', 'elim', 'dmgDirs', 'leaders']) $(id).replaceChildren()
  $('notice').textContent = ''
  $('death').hidden = true
  $('netBanner').hidden = true
}
resetSession()

// ------------------------------------------------------------------------------------ UI helpers
function notice(text, seconds = 2, big = false) {
  $('notice').textContent = text
  $('notice').classList.toggle('big', big)
  noticeUntil = performance.now() + seconds * 1000
}
function chat(name, text, system = false) {
  const row = document.createElement('div'), b = document.createElement('b')
  if (system) row.className = 'sys'
  b.textContent = name + '  '
  row.append(b, document.createTextNode(text))
  $('chatLog').append(row)
  while ($('chatLog').children.length > 7) $('chatLog').firstChild.remove()
}
function elimination(name, head) {
  const row = document.createElement('div')
  row.className = 'row' + (head ? ' hs' : '')
  const small = document.createElement('small'), strong = document.createElement('span'), em = document.createElement('em')
  small.textContent = head ? 'HEADSHOT' : 'ELIMINATED'
  strong.textContent = name
  em.textContent = head ? '+150' : '+100'
  row.append(small, strong, em)
  $('elim').replaceChildren(row)
  clearTimeout(elimination.t)
  elimination.t = setTimeout(() => row.remove(), 1800)
}
function damageDirection(from) {
  if (!from || !me) return
  const a = Math.atan2(from.x - me.x, from.z - me.z)
  const rel = a - yaw + Math.PI
  const i = document.createElement('i')
  i.style.transform = `rotate(${-rel}rad)`
  $('dmgDirs').append(i)
  setTimeout(() => { i.style.opacity = '0' }, 500)
  setTimeout(() => i.remove(), 1200)
  while ($('dmgDirs').children.length > 4) $('dmgDirs').firstChild.remove()
}
const sorted = () => [...state.players].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths || b.score - a.score)
function rankRows(element, limit) {
  element.replaceChildren()
  sorted().slice(0, limit).forEach((p, i) => {
    const row = document.createElement('div')
    row.className = 'rank-row' + (p.id === room.id ? ' self' : '') + (i === 0 ? ' lead' : '')
    for (const [cls, text, tag] of [['rank', String(i + 1), 'span'], ['callsign', p.name + (p.connected === false ? ' ⚠' : ''), 'span'], ['', String(p.kills), 'strong'], ['', String(p.deaths), 'small']]) {
      const e = document.createElement(tag); e.className = cls; e.textContent = text; row.append(e)
    }
    element.append(row)
  })
}
function scoreRows(element) {
  element.replaceChildren()
  sorted().forEach((p, i) => {
    const row = document.createElement('div')
    row.className = 'score-row' + (p.id === room.id ? ' self' : '')
    const ping = p.bot ? 'BOT' : p.connected === false ? 'LOST' : p.id === room.id && room.isHost ? 'HOST' : (p.ping || 0) + ''
    const cells = [String(i + 1), p.name, String(p.kills), String(p.deaths), String(p.score), ping].map(t => { const s = document.createElement('span'); s.textContent = t; return s })
    cells[0].className = 'rank'
    row.append(...cells)
    element.append(row)
  })
}
const WEAPON_TAGS = ['VX-7', 'P-11', 'KX-3']
function killFeed(e) {
  const row = document.createElement('div')
  if (e.by === room.id) row.className = 'mine'
  else if (e.id === room.id) row.className = 'victim'
  const k = document.createElement('span'), w = document.createElement('span'), v = document.createElement('span')
  k.className = 'k'; w.className = 'w'; v.className = 'v'
  k.textContent = e.killer
  w.textContent = WEAPON_TAGS[e.w] || '✕'
  v.textContent = e.name
  row.append(k, w)
  if (e.part === 'head') { const hs = document.createElement('span'); hs.className = 'hs'; hs.textContent = '⌖'; row.append(hs) }
  row.append(v)
  $('killFeed').prepend(row)
  while ($('killFeed').children.length > 5) $('killFeed').lastChild.remove()
  setTimeout(() => row.remove(), 6500)
}

// ------------------------------------------------------------------------------------ network
const room = new Room({
  onState,
  onEvents: (list, sid) => { if (interp.sid !== null && sid === interp.sid) for (const e of list) handleEvent(e) },
  onStatus: text => { $('networkStatus').textContent = text },
  onChat: (name, text) => chat(name, text),
  onConnection,
})

function onConnection(conn, reason) {
  $('retryBtn').hidden = !(conn === CONN.ERROR || conn === CONN.DISCONNECTED) || !lastAttempt
  $('netBanner').hidden = conn !== CONN.RECONNECTING || !playing
  if (conn === CONN.RECONNECTING) chat('SYSTEM', 'Connection lost — reconnecting…', true)
  if (conn === CONN.CONNECTED && onConnection.previous === CONN.RECONNECTING) chat('SYSTEM', 'Reconnected.', true)
  if (conn === CONN.DISCONNECTED || conn === CONN.ERROR) {
    // Networking is already torn down by Room; return the UI to a clean menu with the reason.
    toMenu()
    $('networkStatus').textContent = (reason || 'Disconnected.').toUpperCase()
  }
  onConnection.previous = conn
  roster()
}

function roster() {
  const el = $('roster')
  el.replaceChildren()
  for (const p of state.players) {
    const span = document.createElement('span')
    span.textContent = p.name + (p.id === room.id ? ' (YOU)' : '')
    if (room.isHost ? p.id === room.id : p === state.players[0]) span.classList.add('host')
    el.append(span)
  }
  const inRoom = !!room.code && (room.conn === CONN.CONNECTED || room.conn === CONN.RECONNECTING || room.conn === CONN.CONNECTING)
  $('lobby').hidden = !inRoom
  $('codeDisplay').textContent = room.code
  const canStart = room.isHost && (state.phase === 'lobby' || state.phase === 'ended' || state.phase === 'menu')
  $('startBtn').hidden = !canStart
  $('lobbyHint').hidden = room.isHost
  $('lobbyHint').textContent = state.phase === 'countdown' || state.phase === 'playing' ? 'Match in progress — joining…' : 'Waiting for the host to start the match…'
  $('practiceBtn').hidden = inRoom
  $('roomBadge').textContent = room.code ? 'ROOM ' + room.code : 'TRAINING'
}

function onState(next) {
  if (!interp.push(next, nowSec())) return // other session, duplicate or out-of-order snapshot
  state = next
  const key = next.sid + ':' + next.round
  if (key !== roundKey) {
    // New round in this session: drop round-scoped prediction (sequence numbers continue).
    effects.clear()
    roundKey = key
    predictor.pending = []
    predictor.me = me = null
  }
  for (const e of next.events || []) handleEvent(e)
  serverMe = state.players.find(p => p.id === room.id) || null
  if (serverMe) reconcile(serverMe)
  else predictor.me = me = null

  for (const p of next.players) {
    if (p.id === room.id || soldiers.has(p.id)) continue
    const model = makeSoldier(p.color)
    model.root.position.set(p.x, p.y, p.z)
    scene.add(model.root)
    soldiers.set(p.id, model)
  }
  for (const [id, model] of soldiers) if (!next.players.some(p => p.id === id)) { scene.remove(model.root); model.dispose(); soldiers.delete(id) }

  pickupMeshes.forEach((m, i) => { m.visible = ((next.pickups || 0) >> i) & 1 })

  if (next.phase === 'countdown' || next.phase === 'playing') {
    if (!playing) enterMatch()
    if (next.phase === 'countdown') {
      const n = Math.max(1, Math.ceil(next.countdown))
      if ($('notice').textContent !== String(n)) { notice(String(n), 0.9, true); sound.beep(false) }
    } else if (previousPhase === 'countdown') { notice('GO!', 0.9, true); sound.beep(true) }
  }
  if (next.phase === 'ended' && previousPhase !== 'ended') showResults()
  if (next.phase === 'lobby' && previousPhase !== 'lobby' && previousPhase !== 'menu') showLobby()
  if (next.phase === 'lobby' || !playing) roster()
  previousPhase = next.phase
}

function reconcile(server) {
  const old = me ? { x: me.x, y: me.y, z: me.z } : null
  const r = predictor.reconcile(server, state.phase === 'playing', performance.now())
  me = predictor.me
  if (r.viewReset) {
    smoothOffset.set(0, 0, 0)
    renderPrev.set(me.x, me.y, me.z)
    if (me.hp > 0) { yaw = me.yaw; pitch = me.pitch }
  } else if (r.error && old) {
    if (r.snapped) { smoothOffset.set(0, 0, 0); renderPrev.set(me.x, me.y, me.z) }
    else { smoothOffset.add(tmpV.set(r.error.x, r.error.y, r.error.z)); renderPrev.sub(tmpV) }
  }
  me.yaw = yaw
  me.pitch = pitch
}

function handleEvent(e) {
  if (seenEvents.has(e.eventId)) return
  seenEvents.add(e.eventId)
  if (seenEvents.size > 3000) seenEvents.delete(seenEvents.values().next().value)
  const time = performance.now() / 1000
  switch (e.type) {
    case 'shot': {
      // Reliable events may arrive after a stalled link; never replay old shot visuals.
      if (Number.isFinite(e.t) && interp.hostNow(nowSec()) - e.t > 0.45) break
      const point = new T.Vector3(e.point.x, e.point.y, e.point.z)
      if (e.id === room.id) {
        if (e.hit) {
          hitUntil = performance.now() + 140
          $('hitmarker').className = e.part === 'head' ? 'head' : ''
          sound.hit(e.part === 'head')
          soldiers.get(e.hit)?.hit()
          effects.blood(point, new T.Vector3(e.point.x - e.o.x, e.point.y - e.o.y, e.point.z - e.o.z).normalize(), e.part === 'head')
        }
        break
      }
      const model = soldiers.get(e.id)
      let from = new T.Vector3(e.o.x, e.o.y - 0.2, e.o.z)
      if (model) {
        model.flashAt = time
        model.root.updateMatrixWorld(true)
        from = new T.Vector3(0.06, 1.33, -0.95).applyMatrix4(model.root.matrixWorld)
        effects.muzzle(from)
      }
      effects.tracer(from, point, 220)
      if (e.hit) { effects.blood(point, point.clone().sub(from).normalize(), e.part === 'head'); soldiers.get(e.hit)?.hit() }
      else effects.impact(point, e.n)
      if (me) {
        const d = Math.hypot(e.o.x - me.x, e.o.z - me.z)
        const rel = Math.atan2(e.o.x - me.x, e.o.z - me.z) - yaw
        if (d < 90) sound.shot(e.w, Math.max(1, d), Math.sin(-rel) * 0.8)
      }
      break
    }
    case 'melee':
      if (e.id === room.id && e.hit) { hitUntil = performance.now() + 160; $('hitmarker').className = e.part === 'head' ? 'head' : ''; sound.hit(e.part === 'head') }
      if (e.hit) soldiers.get(e.hit)?.hit()
      if (e.id !== room.id && me) { const p = state.players.find(q => q.id === e.id); if (p && Math.hypot(p.x - me.x, p.z - me.z) < 10) sound.swing() }
      break
    case 'damage':
      if (e.id === room.id) { damageUntil = performance.now() + 220; shake = Math.min(1, shake + 0.35); sound.hurt(); damageDirection(e.from) }
      break
    case 'kill': {
      killFeed(e)
      const victimModel = soldiers.get(e.id)
      if (victimModel) effects.death(victimModel.root.position, victimModel.color)
      if (e.by === room.id && e.id !== room.id) {
        elimination(e.name, e.part === 'head')
        sound.kill(e.streak)
        $('hitmarker').className = 'kill'
        hitUntil = performance.now() + 260
        if (e.streak >= 3) notice(['', '', '', 'TRIPLE KILL', 'RAMPAGE', 'UNSTOPPABLE'][Math.min(e.streak, 5)] || 'UNSTOPPABLE', 1.6)
      }
      if (e.id === room.id) { deathAt = performance.now(); killerName = e.by ? e.killer : 'THE FOUNDRY'; killerId = e.by; sound.death() }
      break
    }
    case 'respawn':
      effects.respawn({ x: e.x, y: e.y, z: e.z })
      if (e.id === room.id) { landDip = 0.05; killerId = null }
      break
    case 'pickup':
      if (e.id === room.id) { notice('+ AMMO RESUPPLIED', 1.2); sound.pickup() }
      break
    case 'reload':
      if (e.id !== room.id && me) { const p = state.players.find(q => q.id === e.id); if (p && Math.hypot(p.x - me.x, p.z - me.z) < 12) sound.reload(e.w) }
      break
    case 'join': chat('SYSTEM', e.name + ' joined the room.', true); break
    case 'leave': chat('SYSTEM', e.name + ' left the room.', true); break
    case 'dropped': chat('SYSTEM', e.name + ' lost connection…', true); break
    case 'reconnect': chat('SYSTEM', e.name + ' reconnected.', true); break
  }
}

// ------------------------------------------------------------------------------------ input
function controlling() {
  return playing && !paused && $('chatInput').hidden && (locked || dragLook || qaControl) && me && me.hp > 0 && state.phase === 'playing'
}
const empty = (p, i) => !WEAPONS[i].melee && p.ammo[i] + p.reserve[i] === 0
function command() {
  const on = controlling()
  yaw = Math.atan2(Math.sin(yaw), Math.cos(yaw)) // keep yaw in (−π, π]: the host's modulo is then a no-op
  // Never leave the player without an attack: a dry gun falls through to the next usable weapon.
  if (on && (fireHeld || latch.fire) && me && empty(me, slot) && me.reload <= 0) {
    slot = slot === 0 && !empty(me, 1) ? 1 : 2
    notice(slot === 1 ? 'RIFLE DRY · SIDEARM' : 'OUT OF AMMO · KNIFE', 1.2)
  }
  const cmd = {
    seq: predictor.nextSeq(performance.now()),
    w: on && keys.has('KeyW'), s: on && keys.has('KeyS'), a: on && keys.has('KeyA'), d: on && keys.has('KeyD'),
    jump: on && (keys.has('Space') || latch.jump),
    sprint: on && (keys.has('ShiftLeft') || keys.has('ShiftRight')),
    crouch: on && (keys.has('ControlLeft') || keys.has('ControlRight') || keys.has('KeyC')),
    reload: on && (keys.has('KeyR') || latch.reload),
    fire: on && (fireHeld || latch.fire),
    aim: on && aimHeld,
    // Angles are quantised to the wire precision before we simulate, keeping host and client identical.
    slot, yaw: quantizeAngle(yaw), pitch: quantizeAngle(clamp(pitch, -1.5, 1.5)), viewTime: Math.round(renderTime() * 1000) / 1000,
  }
  latch.fire = latch.jump = latch.reload = false
  return cmd
}

// Will the host simulate a command generated now? During the countdown we predict GO from the
// host clock: the command reaches the host about one RTT after our estimate of host "now".
function commandIsLive() {
  if (state.phase === 'playing') return true
  if (state.phase !== 'countdown' || !Number.isFinite(state.t)) return false
  return interp.hostNow(nowSec()) + (serverMe?.ping || 0) / 1000 >= state.t + state.countdown
}

function release() {
  keys.clear()
  fireHeld = aimHeld = dragLook = false
  latch.fire = latch.jump = latch.reload = false
  document.body.classList.remove('playing')
  if (document.pointerLockElement === canvas) document.exitPointerLock()
}
async function capture() {
  sound.ensure()
  sound.ui()
  paused = false
  $('pause').hidden = true
  document.body.classList.add('playing')
  try {
    await canvas.requestPointerLock({ unadjustedMovement: true })
  } catch {
    try { await canvas.requestPointerLock() } catch { notice('Click and drag to look', 3) }
  }
}
function pause(deploy = false) {
  if (!playing) return
  paused = true
  release()
  $('pauseTag').textContent = deploy ? 'MATCH LIVE' : 'TACTICAL LINK'
  $('pauseTitle').textContent = deploy ? 'DEPLOY.' : 'PAUSED.'
  $('pauseText').textContent = deploy ? 'The match is running. Click below to lock your aim and drop in.' : 'The multiplayer match continues while you are paused.'
  $('resumeBtn').textContent = deploy ? 'DEPLOY →' : 'RETURN TO MATCH'
  $('pause').hidden = false
}
function enterMatch() {
  playing = true
  inLobbyView = false
  $('menu').hidden = true
  $('results').hidden = true
  $('hud').hidden = false
  $('avatar').textContent = ($('name').value || 'OB').slice(0, 2).toUpperCase()
  if (!locked) pause(true)
}
function showResults() {
  release()
  playing = false
  paused = false
  $('pause').hidden = true
  $('hud').hidden = true
  $('results').hidden = false
  const winner = sorted()[0]
  $('winner').textContent = winner ? (winner.id === room.id ? 'VICTORY.' : winner.name.toUpperCase() + ' WINS') : 'MATCH OVER'
  scoreRows($('resultRows'))
  const multiplayer = !!room.code
  $('restartBtn').hidden = !room.isHost
  $('restartHint').hidden = room.isHost
  $('lobbyBtn').hidden = !multiplayer
  $('resultExit').textContent = multiplayer ? 'LEAVE ROOM' : 'BACK TO MENU'
}
// Back to the current room's lobby without dropping the connection.
function showLobby() {
  release()
  playing = false
  paused = false
  inLobbyView = true
  $('pause').hidden = true
  $('results').hidden = true
  $('hud').hidden = true
  $('menu').hidden = false
  roster()
}
// UI-only return to the main menu (networking is handled by the caller / Room).
function toMenu() {
  playing = false
  paused = false
  release()
  resetSession()
  $('menu').hidden = false; $('hud').hidden = true; $('pause').hidden = true; $('results').hidden = true
  roster()
}
function leaveRoom() {
  room.cleanup()
  toMenu()
  $('networkStatus').textContent = '12 OPERATIVES MAX · PEER HOSTED'
}
const callsign = () => ($('name').value || 'Strike One').trim().slice(0, 18) || 'Strike One'

async function join(host, code) {
  lastAttempt = { host, code }
  resetSession()
  sound.ensure()
  try { await room.open(host, code, callsign()); roster() } catch (e) { $('networkStatus').textContent = e.message }
}
$('practiceBtn').onclick = () => { lastAttempt = null; resetSession(); room.practice(callsign()); capture() }
$('hostBtn').onclick = () => join(true, '')
$('joinBtn').onclick = () => join(false, $('roomCode').value)
$('retryBtn').onclick = () => lastAttempt && join(lastAttempt.host, lastAttempt.code)
$('roomCode').addEventListener('keydown', e => { if (e.key === 'Enter') $('joinBtn').click() })
$('roomCode').addEventListener('input', e => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '') })
$('startBtn').onclick = () => { room.start(); capture() }
$('restartBtn').onclick = () => { room.start(); capture() }
$('lobbyBtn').onclick = () => { if (room.isHost) room.returnToLobby(); else showLobby() }
$('resumeBtn').onclick = capture
$('exitBtn').onclick = leaveRoom
$('resultExit').onclick = leaveRoom
$('leaveBtn').onclick = leaveRoom
$('copyCode').onclick = async () => {
  try { await navigator.clipboard.writeText(room.code); $('copyCode').textContent = 'COPIED' } catch { $('networkStatus').textContent = 'ROOM CODE: ' + room.code }
  setTimeout(() => { $('copyCode').textContent = 'COPY CODE' }, 1500)
}
$('fullscreenBtn').onclick = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => notice('Fullscreen unavailable', 2)))

$('sensitivity').value = settings.sensitivity
$('sensValue').textContent = settings.sensitivity.toFixed(1) + '×'
$('sensitivity').oninput = e => { settings.sensitivity = Number(e.target.value); $('sensValue').textContent = settings.sensitivity.toFixed(1) + '×'; try { localStorage.setItem('ob-sensitivity', settings.sensitivity) } catch {} }
$('fov').value = settings.fov
$('fovValue').textContent = settings.fov + '°'
$('fov').oninput = e => { settings.fov = Number(e.target.value); $('fovValue').textContent = settings.fov + '°'; try { localStorage.setItem('ob-fov', settings.fov) } catch {} }
$('quality').value = settings.quality
$('quality').onchange = e => {
  settings.quality = e.target.value
  pixelRatio = settings.quality === 'low' ? 1 : Math.min(devicePixelRatio, settings.quality === 'high' ? 2 : 1.5)
  renderer.shadowMap.enabled = settings.quality !== 'low'
  world.setShadows(settings.quality !== 'low')
  scene.traverse(o => { if (o.material) o.material.needsUpdate = true })
  try { localStorage.setItem('ob-quality', settings.quality) } catch {}
  resize()
}
$('name').onchange = e => { try { localStorage.setItem('ob-name', e.target.value) } catch {} }
$('sound').onchange = e => { sound.enabled = e.target.checked }

document.addEventListener('pointerlockchange', () => {
  const was = locked
  locked = document.pointerLockElement === canvas
  if (was && !locked && playing && $('chatInput').hidden) pause()
})
document.addEventListener('pointerlockerror', () => notice('Drag to look · pointer lock is restricted here', 3))
document.addEventListener('mousemove', e => {
  if (!playing || paused || !$('chatInput').hidden || (!locked && !dragLook)) return
  const dx = clamp(e.movementX || 0, -400, 400), dy = clamp(e.movementY || 0, -400, 400)
  const ads = me?.aiming ? WEAPONS[me.weapon].adsSens : 1
  const s = 0.00165 * settings.sensitivity * ads * (settings.fov / 90)
  yaw -= dx * s
  pitch = clamp(pitch - dy * s, -1.5, 1.5)
  lookDX += dx; lookDY += dy
})
canvas.addEventListener('mousedown', e => {
  if (!playing || paused) return
  if (!locked) { capture(); return }
  if (e.button === 0) { fireHeld = true; latch.fire = true }
  if (e.button === 2) aimHeld = true
})
document.addEventListener('mouseup', e => { dragLook = false; if (e.button === 0) fireHeld = false; if (e.button === 2) aimHeld = false })
canvas.addEventListener('contextmenu', e => e.preventDefault())
document.addEventListener('wheel', e => { if (controlling()) slot = (slot + (e.deltaY > 0 ? 1 : 2)) % 3 }, { passive: true })
document.addEventListener('keydown', e => {
  if (e.target.matches('input,select')) {
    if (e.target === $('chatInput')) {
      if (e.code === 'Enter') { room.chat(e.target.value); e.target.value = ''; e.target.hidden = true; capture() }
      if (e.code === 'Escape') { e.target.hidden = true; capture() }
    }
    return
  }
  if (e.code === 'F3') { e.preventDefault(); $('netStats').hidden = !$('netStats').hidden }
  if (!playing) return
  if (e.code === 'Enter') { keys.clear(); fireHeld = aimHeld = false; $('chatInput').hidden = false; document.exitPointerLock?.(); $('chatInput').focus(); return }
  if (['Tab', 'Space', 'ControlLeft', 'ControlRight', 'KeyW', 'KeyS', 'KeyA', 'KeyD'].includes(e.code)) e.preventDefault()
  if (e.code === 'Tab') { $('scoreOverlay').hidden = false; scoreRows($('scoreRows')) }
  if (e.code === 'Escape') pause()
  if (e.code === 'KeyR') latch.reload = true
  if (e.code === 'Space') latch.jump = true
  if (e.code === 'Digit1') slot = 0
  if (e.code === 'Digit2') slot = 1
  if (e.code === 'Digit3') slot = 2
  if (e.code === 'KeyQ') slot = slot === 0 ? 1 : 0
  keys.add(e.code)
})
document.addEventListener('keyup', e => { keys.delete(e.code); if (e.code === 'Tab') $('scoreOverlay').hidden = true })
window.addEventListener('blur', () => { keys.clear(); fireHeld = aimHeld = false; if (playing && !qaControl) pause() })
// Ctrl is crouch/slide, and Ctrl+W would close the tab mid-fight: confirm before leaving a match.
window.addEventListener('beforeunload', e => { if (playing) { e.preventDefault(); e.returnValue = '' } })
window.addEventListener('pagehide', () => room.cleanup())
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) navigator.keyboard?.lock?.(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ControlLeft', 'ControlRight', 'Space', 'Tab']).catch(() => {})
  else navigator.keyboard?.unlock?.()
})

function resize() {
  renderer.setPixelRatio(pixelRatio)
  renderer.setSize(innerWidth, innerHeight)
  camera.aspect = view.camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  view.camera.updateProjectionMatrix()
}
window.addEventListener('resize', resize)
resize()

// Horizontal FOV is specified for a 4:3 frame (classic "90"), and expanded for wider screens.
const verticalFov = hfov => T.MathUtils.radToDeg(2 * Math.atan(Math.tan(T.MathUtils.degToRad(hfov) / 2) * 0.75))

// ------------------------------------------------------------------------------------ local effects
function localFire(ev) {
  if (ev.melee) { view.fire(); sound.swing(); return }
  const W = WEAPONS[me.weapon]
  view.fire()
  sound.shot(me.weapon)
  kick += 0.02 * (me.aiming ? 0.5 : 1)
  kickYaw += (Math.random() - 0.5) * 0.006
  // Predicted tracer/impact (the host decides hits; recoil/spread come from the shared simulation).
  const wall = rayWorld(ev.origin, ev.dir, W.range)
  const poses = []
  for (const p of state.players) if (p.id !== room.id && p.hp > 0 && p.connected !== false) { const pose = interp.sample(p.id, renderTime()); if (pose) poses.push(pose) }
  const hit = rayPlayers(ev.origin, ev.dir, wall.t, poses)
  const t = hit.target ? hit.t : wall.t
  const end = tmpV2.set(ev.origin.x + ev.dir.x * t, ev.origin.y + ev.dir.y * t, ev.origin.z + ev.dir.z * t).clone()
  const muzzle = view.muzzleWorld(camera)
  effects.tracer(muzzle, end, 300)
  effects.muzzle(muzzle, true)
  if (!hit.target && t < W.range - 0.5) effects.impact(end, wall.normal)
}

function localEvents(ev) {
  if (!ev) return
  if (ev.fired) localFire(ev)
  if (ev.empty) sound.dry()
  if (ev.reloadStart) sound.reload(me.weapon)
  if (ev.swapped) sound.swap()
  if (ev.jumped) { sound.jump(); view.jump() }
  if (ev.landed) { sound.land(ev.impact); view.land(ev.impact); landDip = Math.min(0.12, ev.impact * 0.008) }
  if (ev.slid) sound.slide()
}

// ------------------------------------------------------------------------------------ HUD
function hud() {
  const seconds = Math.ceil(state.timer || 0)
  $('timer').textContent = String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0')
  $('timer').parentElement.classList.toggle('low', seconds <= 30 && state.phase === 'playing')
  $('modeSub').textContent = 'FOUNDRY · FIRST TO ' + (state.limit || 30)
  const ranks = sorted()
  if (serverMe) {
    $('myScore').textContent = serverMe.kills
    $('leadScore').textContent = ranks[0]?.kills ?? 0
    $('kd').textContent = serverMe.kills + ' / ' + serverMe.deaths
    $('playerLabel').textContent = serverMe.name.toUpperCase()
  }
  const ping = room.isHost ? 0 : serverMe?.ping || 0
  $('telemetry').textContent = fps + ' FPS · ' + (room.isHost ? (room.code ? 'HOST · 0 MS' : 'LOCAL') : ping + ' MS')
  $('pingDot').className = ping > 150 ? 'bad' : ping > 80 ? 'mid' : ''
  rankRows($('leaders'), 6)
  if (!$('scoreOverlay').hidden) { scoreRows($('scoreRows')); $('scoreMeta').textContent = (room.code ? 'ROOM ' + room.code : 'TRAINING') + ' · ' + state.players.length + '/12' }
  if (me) {
    const hp = Math.max(0, Math.ceil(me.hp))
    $('health').textContent = hp
    $('healthFill').style.width = hp + '%'
    $('healthFill').parentElement.classList.toggle('low', hp <= 30)
    $('armorFill').style.width = (me.armor / 50) * 100 + '%'
    const W = WEAPONS[me.weapon]
    $('ammo').textContent = W.melee ? '∞' : me.ammo[me.weapon]
    $('ammo').classList.toggle('low', !W.melee && me.ammo[me.weapon] <= Math.ceil(W.mag * 0.2))
    $('reserve').textContent = W.melee ? '' : '/ ' + me.reserve[me.weapon]
    $('weaponName').textContent = W.name
    $('fireMode').textContent = W.melee ? 'MELEE' : (W.auto ? 'AUTO' : 'SEMI') + ' · ' + W.caliber
    for (let i = 0; i < 3; i++) $('slot' + i).classList.toggle('active', me.weapon === i)
    for (let i = 0; i < 2; i++) $('slotAmmo' + i).textContent = me.ammo[i] + me.reserve[i] === 0 ? 'EMPTY' : me.ammo[i]
    $('reloadBar').classList.toggle('on', me.reload > 0)
    $('reloadFill').style.width = (me.reload > 0 ? (1 - me.reload / W.reload) * 100 : 0) + '%'
    $('death').hidden = me.hp > 0
    if (me.hp <= 0) {
      $('deathBy').textContent = killerName || '—'
      $('deathTimer').textContent = 'RESPAWNING IN ' + Math.max(1, Math.ceil(serverMe?.respawn ?? 0))
      const k = killerId && state.players.find(p => p.id === killerId)
      $('spectating').textContent = k && k.hp > 0 ? 'SPECTATING ' + k.name.toUpperCase() : ''
    }
    $('spawnShield').hidden = !(me.protect > 0 && me.hp > 0 && state.phase === 'playing')
  }
  if (!$('netStats').hidden) {
    const now = performance.now(), m = room.metrics, ps = predictor.stats
    if (now - netWindow.t > 1000) {
      const dt = (now - netWindow.t) / 1000
      Object.assign(netWindow, { inRate: (m.bytesIn - netWindow.bytesIn) / dt, outRate: (m.bytesOut - netWindow.bytesOut) / dt, snapRate: (m.snapshots - netWindow.snapshots) / dt, t: now, bytesIn: m.bytesIn, bytesOut: m.bytesOut, snapshots: m.snapshots })
    }
    $('netStats').textContent = [
      `fps ${fps}  frame ${frameMs.toFixed(1)} ms  conn ${room.conn}`,
      `ping ${ping} ms  ack delay ${ps.ackDelayMs.toFixed(0)} ms  pending ${predictor.pending.length}`,
      `correction last ${(ps.lastError * 100).toFixed(1)} cm  max ${(ps.maxError * 100).toFixed(1)} cm  avg ${(ps.samples ? ps.sumError / ps.samples * 100 : 0).toFixed(2)} cm  snaps ${ps.snaps}`,
      `snapshots in ${interp.stats.accepted}  stale ${interp.stats.rejectedStale}  foreign ${interp.stats.rejectedSession}`,
      room.isHost ? `host tick ${m.tickMs.toFixed(3)} ms (max ${m.tickMaxMs.toFixed(2)})  snapshot ${m.snapshotBytes} B  ${netWindow.snapRate.toFixed(0)}/s` : `state channel ${m.stateChannel ? 'unreliable' : 'reliable fallback'}`,
      `net out ${(netWindow.outRate / 1024).toFixed(1)} KB/s  in ${(netWindow.inRate / 1024).toFixed(1)} KB/s  dropped ${m.dropped}  rejected ${m.rejected}`,
      `gpu geo ${renderer.info.memory.geometries}  tex ${renderer.info.memory.textures}  calls ${renderer.info.render.calls}`,
    ].join('\n')
  }
}

// ------------------------------------------------------------------------------------ frame loop
function frame(now) {
  requestAnimationFrame(frame)
  const realDt = Math.max(0, (now - lastTime) / 1000)
  const dt = Math.min(0.05, realDt) // animation step (smooth even after a hitch)
  lastTime = now
  const time = now / 1000
  // Age existing effects before prediction creates this frame's new shots.
  effects.update(realDt)

  // Fixed-step local prediction (simulation keeps real time on slow frames, up to 15 catch-up ticks).
  acc += Math.min(0.25, realDt)
  let steps = 0
  while (acc >= DT && steps < 15) {
    acc -= DT
    steps++
    if (!playing || !me) continue
    renderPrev.set(me.x, me.y, me.z)
    const cmd = command()
    localEvents(predictor.step(cmd, commandIsLive()))
    outbox.push(cmd)
  }
  if (steps === 15) acc = 0
  room.sendCommands(outbox.splice(0), predictor.pending)

  kick = T.MathUtils.damp(kick, 0, 18, dt)
  kickYaw = T.MathUtils.damp(kickYaw, 0, 14, dt)
  shake = Math.max(0, shake - dt * 2.5)
  landDip = T.MathUtils.damp(landDip, 0, 9, dt)
  smoothOffset.multiplyScalar(Math.exp(-14 * dt))

  if (playing && me) {
    me.yaw = yaw
    const alpha = acc / DT
    renderCur.set(me.x, me.y, me.z)
    const pos = tmpV.lerpVectors(renderPrev, renderCur, alpha).add(smoothOffset)
    eyeHeight = T.MathUtils.damp(eyeHeight, me.height - PLAYER.eye, 16, dt)
    const speed = Math.hypot(me.vx, me.vz)
    if (me.ground && me.hp > 0 && me.slide <= 0) {
      stepDist += speed * dt
      if (stepDist > (me.sprinting ? 2.6 : 2.2)) { stepDist = 0; if (!me.crouched) sound.step(Math.min(1.2, speed / 8)) }
    }
    const dead = me.hp <= 0
    const deadMs = dead ? performance.now() - deathAt : 0
    const deadK = dead ? Math.min(1, deadMs / 600) : 0
    roll = T.MathUtils.damp(roll, (me.slide > 0 ? 0.06 : 0) + deadK * 0.5, 8, dt)
    const killer = dead && killerId && killerId !== room.id ? state.players.find(p => p.id === killerId) : null
    if (killer && killer.hp > 0 && deadMs > 900) {
      // Spectator camera: chase the killer from behind and above.
      const k = interp.sample(killer.id, renderTime()) || killer
      const target = tmpV2.set(k.x + Math.sin(k.yaw) * 3.4, k.y + 2.6, k.z + Math.cos(k.yaw) * 3.4)
      camera.position.lerp(target, 1 - Math.exp(-5 * dt))
      camera.lookAt(k.x, k.y + 1.3, k.z)
      roll = 0
    } else {
      camera.position.set(pos.x, pos.y + eyeHeight - landDip - deadK * (eyeHeight - 0.35), pos.z)
      const sh = shake * shake
      // Recoil comes from the predicted (authoritative) state; kick/shake are camera-only.
      camera.rotation.set(clamp(pitch + (me.recoil || 0) + kick + (Math.random() - 0.5) * sh * 0.02, -1.55, 1.55), yaw + (me.recoilYaw || 0) + kickYaw + (Math.random() - 0.5) * sh * 0.02, roll)
    }
    const zoom = me.aiming ? WEAPONS[me.weapon].adsZoom : 1
    const targetFov = verticalFov(settings.fov) / zoom + (me.sprinting ? 3 : 0) + (me.slide > 0 ? 5 : 0)
    camera.fov = T.MathUtils.damp(camera.fov, targetFov, 14, dt)
    camera.updateProjectionMatrix()
    view.setWeapon(me.weapon)
    const side = me.vx * Math.cos(yaw) - me.vz * Math.sin(yaw)
    const W = WEAPONS[me.weapon]
    view.update(dt, {
      speed, ground: me.ground, sprinting: me.sprinting, aiming: me.aiming, crouched: me.crouched, swap: me.swap, dead,
      lookDX, lookDY, strafe: side, reloadT: me.reload > 0 && W.reload ? 1 - me.reload / W.reload : -1,
    })
    lookDX = lookDY = 0
    const gap = 6 + currentSpread(me) * 520 + (me.cooldown > 0 ? 3 : 0)
    $('crosshair').style.opacity = String(Math.max(0, 1 - view.aim * 1.6) * (dead ? 0 : 1))
    for (const [cls, x, y] of [['ch-l', -gap - 9, 0], ['ch-r', gap, 0], ['ch-t', 0, -gap - 9], ['ch-b', 0, gap]]) {
      const el = $('crosshair').querySelector('.' + cls)
      if (x) el.style.left = x + 'px'; else el.style.top = y + 'px'
    }
  } else {
    const a = time * 0.05
    camera.position.set(Math.sin(a) * 30, 14 + Math.sin(time * 0.1) * 2, Math.cos(a) * 30)
    camera.lookAt(0, 2, 0)
    camera.fov = 60
    camera.updateProjectionMatrix()
  }

  const rt = renderTime()
  for (const p of state.players) {
    const model = soldiers.get(p.id)
    if (!model) continue
    const pose = interp.sampleSmoothed(p.id, rt) || p
    model.update(pose, dt, time, camera.position)
    if (pose.connected === false) model.root.visible = false
  }
  for (const m of pickupMeshes) if (m.visible) { m.rotation.y = time * 1.2; m.children[0].position.y = m.children[1].position.y = Math.sin(time * 2.4) * 0.05 }

  renderer.clear()
  renderer.render(scene, camera)
  if (playing && me && view.lowered < 0.98) {
    renderer.clearDepth()
    renderer.render(view.scene, view.camera)
  }

  $('hitmarker').style.opacity = now < hitUntil ? '1' : '0'
  $('damage').style.opacity = now < damageUntil ? '0.75' : me && me.hp > 0 && me.hp <= 30 ? String(0.25 + Math.sin(time * 4) * 0.1) : '0'
  if (now > noticeUntil && $('notice').textContent) $('notice').textContent = ''
  uiClock += dt
  if (uiClock > 0.1 && playing) { hud(); uiClock = 0 }

  frames++
  frameTime += realDt
  frameMs = frameMs * 0.9 + realDt * 1000 * 0.1
  if (frameTime > 1) {
    fps = Math.round(frames / frameTime)
    if (settings.quality === 'auto' && playing) {
      if (fps < 50 && pixelRatio > 0.75) { pixelRatio = Math.max(0.75, pixelRatio - 0.15); resize() }
      else if (fps > 58 && pixelRatio < Math.min(devicePixelRatio, 1.5)) { pixelRatio = Math.min(Math.min(devicePixelRatio, 1.5), pixelRatio + 0.05); resize() }
    }
    frames = 0
    frameTime = 0
  }
}

$('loadStatus').textContent = '3D ENGINE READY · FOUNDRY ARENA · VX-7 / P-11 / KX-3'
requestAnimationFrame(frame)

// Read-only telemetry for reproducible browser validation.
window.blackoutDiagnostics = () => ({
  renderer: { ...renderer.info.render }, memory: { ...renderer.info.memory }, programs: renderer.info.programs?.length, phase: state.phase, room: room.code, isHost: room.isHost, fps, locked,
  effects: { tracers: effects.t.filter(t => t.life > 0).length, emitted: effects.tracerCount, max: effects.maxT },
  conn: room.conn, sid: interp.sid, round: state.round, soldiers: soldiers.size,
  me: me && { x: me.x, y: me.y, z: me.z, hp: me.hp, ammo: me.ammo, reserve: me.reserve, weapon: me.weapon, ground: me.ground, aiming: me.aiming, kills: serverMe?.kills, height: me.height, slide: me.slide, protect: me.protect },
  pending: predictor.pending.length, prediction: { ...predictor.stats }, interpolation: { ...interp.stats }, net: { ...room.metrics },
  paused, playing, chatHidden: $('chatInput').hidden, qaControl, inLobbyView,
  players: state.players.map(p => ({ id: p.id, name: p.name, x: p.x, y: p.y, z: p.z, hp: p.hp, kills: p.kills, deaths: p.deaths, connected: p.connected })),
})

// Development-only QA hooks: drive input without pointer lock in headless browsers.
if (import.meta.env.DEV && qs.has('qa')) {
  window.__qa = {
    control(on = true) { qaControl = on; paused = false; $('pause').hidden = true },
    look(y, p) { yaw = y; pitch = p },
    key(code, down) { if (down) { keys.add(code); if (code === 'Space') latch.jump = true } else keys.delete(code) },
    fire(on) { fireHeld = on; if (on) latch.fire = true },
    aim(on) { aimHeld = on },
    slot(i) { slot = i },
    reload() { latch.reload = true },
    command(type, data) { room.command(type, data) },
    addBots(n) { for (let i = 0; i < n; i++) room.command('add', { id: 'qa-bot-' + (__qa.botSeq = (__qa.botSeq || 0) + 1), name: 'QA' + __qa.botSeq, bot: true }) },
    removeBots() { for (const p of state.players) if (p.id.startsWith('qa-bot-')) room.command('remove', { id: p.id }) },
    dropLink() { room.dropLinkForTest() },
    roomCode: () => room.code,
    roomId: () => room.id,
    state: () => state,
    me: () => me,
  }
}
