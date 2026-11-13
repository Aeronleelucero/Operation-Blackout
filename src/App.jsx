import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Activity, ArrowDown, Check, ChevronRight, Crosshair, Eye, Gauge,
  Headphones, LocateFixed, LockKeyhole, Menu, Radio, Shield, Volume2, VolumeX, X,
} from 'lucide-react'
import * as THREE from 'three'

const LOADOUTS = [
  { id: 'viper', code: 'VX-7', name: 'Viper', type: 'Adaptive carbine', stat: '82', accent: '#a9ff35', note: 'Balanced / suppressed' },
  { id: 'lance', code: 'LR-12', name: 'Lance', type: 'Precision rifle', stat: '94', accent: '#45e6ff', note: 'Long range / thermal' },
  { id: 'wraith', code: 'WR-4', name: 'Wraith', type: 'Close assault', stat: '89', accent: '#ff5c49', note: 'High mobility / breach' },
]

const OBJECTIVES = [
  { id: '01', title: 'Sever the grid', tag: 'SABOTAGE', x: 23, y: 72, detail: 'Disable the northern relay to black out perimeter surveillance.' },
  { id: '02', title: 'Breach the spire', tag: 'INFILTRATE', x: 61, y: 40, detail: 'Enter through maintenance level B7. No surface exposure.' },
  { id: '03', title: 'Extract the signal', tag: 'RECOVER', x: 78, y: 68, detail: 'Secure the Kestrel core before the 04:00 purge cycle.' },
]

function useCompact() {
  const [compact, setCompact] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)')
    const update = () => setCompact(query.matches)
    update(); query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  return compact
}

function Countdown() {
  const [seconds, setSeconds] = useState(7138)
  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000)
    return () => clearInterval(timer)
  }, [])
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return <span aria-label={`${h} hours ${m} minutes ${s} seconds`}>{h}:{m}:{s}</span>
}

function Reticle() {
  return <div className="reticle" aria-hidden="true"><i /><i /><span /></div>
}

function Weapon({ loadout, reducedMotion }) {
  const group = useRef()
  const accent = loadout.accent
  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.22 - 0.35, 3, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, state.pointer.y * 0.09 + 0.04, 3, delta)
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, state.pointer.y * 0.1, 2, delta)
  })
  const metal = { color: '#17201d', metalness: .9, roughness: .24 }
  return (
    <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={reducedMotion ? 0 : .08} floatIntensity={reducedMotion ? 0 : .2}>
      <group ref={group} rotation={[0.04, -0.35, -0.08]} scale={loadout.id === 'lance' ? 1.08 : loadout.id === 'wraith' ? .93 : 1}>
        <mesh position={[0, 0, 0]}><boxGeometry args={[3.7, .55, .58]} /><meshStandardMaterial {...metal} /></mesh>
        <mesh position={[-1.52, -.45, 0]} rotation={[0, 0, -.13]}><boxGeometry args={[.7, 1.25, .5]} /><meshStandardMaterial {...metal} /></mesh>
        <mesh position={[-.35, -.66, 0]} rotation={[0, 0, -.16]}><boxGeometry args={[.52, 1.02, .44]} /><meshStandardMaterial color="#0d1210" metalness={.55} roughness={.42} /></mesh>
        <mesh position={[2.35, .06, 0]}><cylinderGeometry args={[.12, .15, 1.5, 10]} /><meshStandardMaterial color="#0a0d0c" metalness={1} roughness={.2} /></mesh>
        <mesh position={[3.08, .06, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[.18, .18, .2, 10]} /><meshStandardMaterial color="#111815" metalness={.9} /></mesh>
        <mesh position={[.15, .43, 0]}><boxGeometry args={[1.25, .18, .18]} /><meshStandardMaterial color="#29342f" metalness={.85} roughness={.3} /></mesh>
        <mesh position={[.65, .62, 0]}><cylinderGeometry args={[.22, .26, .74, 12]} /><meshStandardMaterial color="#080b0a" metalness={.8} roughness={.26} /></mesh>
        <mesh position={[-.55, .31, .3]}><boxGeometry args={[1.15, .05, .04]} /><meshBasicMaterial color={accent} toneMapped={false} /></mesh>
        <mesh position={[1.2, -.05, .31]}><boxGeometry args={[.7, .08, .04]} /><meshBasicMaterial color={accent} toneMapped={false} /></mesh>
        <mesh position={[-.65, .05, .3]}><boxGeometry args={[.26, .17, .04]} /><MeshTransmissionMaterial transmission={.65} thickness={.1} color={accent} /></mesh>
        {loadout.id === 'lance' && <mesh position={[2.5, .06, 0]}><cylinderGeometry args={[.1, .1, 2.3, 10]} /><meshStandardMaterial color="#141b18" metalness={1} /></mesh>}
        {loadout.id === 'wraith' && <mesh position={[1.55, -.42, 0]} rotation={[0, 0, .25]}><boxGeometry args={[.2, .82, .26]} /><meshStandardMaterial color="#111814" metalness={.7} /></mesh>}
      </group>
    </Float>
  )
}

function Scene({ loadout, reducedMotion }) {
  return (
    <Canvas camera={{ position: [0, 0.1, 6.6], fov: 38 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={['#050807', 6, 15]} />
      <ambientLight intensity={.35} />
      <directionalLight position={[4, 4, 5]} intensity={2.2} color="#dfffd0" />
      <pointLight position={[-3, 1, 2]} intensity={18} distance={6} color={loadout.accent} />
      <pointLight position={[2, -2, 1]} intensity={10} distance={5} color="#45e6ff" />
      <Suspense fallback={null}>
        <Weapon loadout={loadout} reducedMotion={reducedMotion} />
        <Sparkles count={reducedMotion ? 20 : 70} scale={[9, 4, 3]} size={1.2} speed={reducedMotion ? 0 : .22} color={loadout.accent} opacity={.4} />
        <Environment preset="warehouse" environmentIntensity={.3} />
      </Suspense>
    </Canvas>
  )
}

function BracketLabel({ children, tone = 'green' }) {
  return <span className={`bracket-label ${tone}`}>[ {children} ]</span>
}

function StatBar({ label, value, accent }) {
  return (
    <div className="stat-row">
      <span>{label}</span><div className="stat-track"><motion.i initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: .8 }} style={{ background: accent }} /></div><b>{value}</b>
    </div>
  )
}

function TopNav({ sound, setSound, open, setOpen }) {
  return (
    <header className="top-nav">
      <a className="brand" href="#top" aria-label="Operation Blackout home"><span>OB</span><div>BLACKOUT<small>STRIKE UNIT</small></div></a>
      <nav className={open ? 'open' : ''} aria-label="Primary navigation">
        <a href="#briefing" onClick={() => setOpen(false)}>Briefing</a>
        <a href="#loadout" onClick={() => setOpen(false)}>Loadout</a>
        <a href="#objectives" onClick={() => setOpen(false)}>Objectives</a>
      </nav>
      <div className="nav-tools">
        <button className="icon-button" onClick={() => setSound(!sound)} aria-label={sound ? 'Mute interface audio' : 'Enable interface audio'}>{sound ? <Volume2 /> : <VolumeX />}</button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        <span className="live-dot">LIVE LINK</span>
      </div>
    </header>
  )
}

function Hero({ loadout, reducedMotion }) {
  return (
    <section className="hero" id="top">
      <div className="scene-wrap" aria-label={`Interactive 3D model of the ${loadout.name} ${loadout.type}`}><Scene loadout={loadout} reducedMotion={reducedMotion} /></div>
      <div className="terrain-lines" aria-hidden="true" />
      <Reticle />
      <div className="hero-copy">
        <BracketLabel>CLASSIFIED / EYES ONLY</BracketLabel>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>OPERATION<br /><em>BLACKOUT</em></motion.h1>
        <p>Enter the dead zone. Cut the signal.<br />Leave no trace.</p>
        <a className="primary-cta" href="#briefing"><span>Initialize briefing</span><ChevronRight /></a>
      </div>
      <aside className="hero-telemetry hud-panel">
        <span className="panel-corner tl" /><span className="panel-corner br" />
        <div><small>MISSION CLOCK</small><strong className="danger-text"><Countdown /></strong></div>
        <div><small>THEATER</small><strong>NIGHTGLASS</strong></div>
        <div><small>COORDINATES</small><strong>68.21N / 33.04E</strong></div>
      </aside>
      <div className="squad-strip">
        <div className="squad-icons"><span>A1</span><span>K2</span><span>V4</span><span className="offline">—</span></div>
        <div><small>STRIKE TEAM</small><b>3 / 4 ONLINE</b></div>
      </div>
      <a className="scroll-cue" href="#briefing"><span>SCROLL TO DESCEND</span><ArrowDown /></a>
    </section>
  )
}

function Briefing() {
  return (
    <section className="section briefing" id="briefing">
      <div className="section-index">01 — MISSION BRIEF</div>
      <div className="brief-grid">
        <div>
          <BracketLabel tone="cyan">PRIORITY DIRECTIVE</BracketLabel>
          <h2>THE CITY WENT DARK<br /><em>ON PURPOSE.</em></h2>
        </div>
        <div className="brief-copy">
          <p>At 0217, every civilian channel inside Sector Nine fell silent. A hostile cell known as Meridian is using the blackout to extract an experimental signal core.</p>
          <p>Your unit has one window before the network purge. Infiltrate the zone, sever their uplink, and recover the core.</p>
          <div className="risk-line"><Shield /><span><small>THREAT LEVEL</small><b>OMEGA / EXTREME</b></span><div className="risk-pips">● ● ● ● <i>●</i></div></div>
        </div>
      </div>
      <div className="data-ticker"><span>SAT-LINK // ENCRYPTED</span><span>WEATHER // ION STORM</span><span>VISIBILITY // 18%</span><span>ROE // DISCRETIONARY</span></div>
    </section>
  )
}

function Loadout({ activeId, setActiveId }) {
  const active = LOADOUTS.find((item) => item.id === activeId)
  return (
    <section className="section loadout-section" id="loadout">
      <div className="section-index">02 — ARMORY ACCESS</div>
      <div className="section-heading"><div><BracketLabel>CONFIGURE</BracketLabel><h2>SELECT YOUR<br /><em>PRIMARY.</em></h2></div><p>Field kits are calibrated for zero-light conditions. Select a platform to update the live 3D preview above.</p></div>
      <div className="loadout-grid">
        <div className="loadout-list" role="tablist" aria-label="Primary weapon selection">
          {LOADOUTS.map((item, index) => (
            <button key={item.id} role="tab" aria-selected={item.id === activeId} className={item.id === activeId ? 'active' : ''} onClick={() => setActiveId(item.id)} style={{ '--accent': item.accent }}>
              <span className="loadout-num">0{index + 1}</span><span><small>{item.code} // {item.type}</small><b>{item.name}</b><em>{item.note}</em></span><Crosshair />
            </button>
          ))}
        </div>
        <div className="weapon-card hud-panel" style={{ '--accent': active.accent }}>
          <div className="weapon-silhouette"><span className="weapon-body" /><span className="weapon-stock" /><span className="weapon-barrel" /><i /></div>
          <div className="weapon-meta"><span><small>PLATFORM</small><b>{active.code} / {active.name.toUpperCase()}</b></span><span><small>READINESS</small><b className="signal-text">NOMINAL</b></span></div>
          <StatBar label="CONTROL" value={active.id === 'wraith' ? 71 : 86} accent={active.accent} />
          <StatBar label="OUTPUT" value={Number(active.stat)} accent={active.accent} />
          <StatBar label="MOBILITY" value={active.id === 'lance' ? 54 : active.id === 'wraith' ? 95 : 78} accent={active.accent} />
          <div className="attachments"><button><Eye />OPTIC: NV-6</button><button><Activity />MOD: PULSE</button><button><Gauge />MAG: 36</button></div>
        </div>
      </div>
    </section>
  )
}

function MissionMap({ selected, setSelected }) {
  const objective = OBJECTIVES.find((item) => item.id === selected)
  return (
    <section className="section map-section" id="objectives">
      <div className="section-index">03 — TACTICAL OVERVIEW</div>
      <div className="section-heading"><div><BracketLabel tone="cyan">SECTOR NINE</BracketLabel><h2>THREE TARGETS.<br /><em>ONE WINDOW.</em></h2></div><p>Select an objective to inspect the route. Objectives must be completed in sequence before extraction is authorized.</p></div>
      <div className="map-layout">
        <div className="tactical-map">
          <div className="map-grid" /><div className="map-river" /><div className="map-zone z1" /><div className="map-zone z2" />
          <div className="route-line" />
          {OBJECTIVES.map((item) => <button key={item.id} className={`map-pin ${selected === item.id ? 'active' : ''}`} style={{ left: `${item.x}%`, top: `${item.y}%` }} onClick={() => setSelected(item.id)} aria-label={`Objective ${item.id}: ${item.title}`}><span>{item.id}</span><i /></button>)}
          <div className="map-coordinates">GRID 09-B // 68.21N<br />LIVE SATELLITE FEED</div>
          <Crosshair className="map-crosshair" />
        </div>
        <AnimatePresence mode="wait">
          <motion.aside key={selected} className="objective-card" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
            <span className="objective-number">{objective.id}</span><BracketLabel>{objective.tag}</BracketLabel><h3>{objective.title}</h3><p>{objective.detail}</p>
            <div className="objective-status"><LocateFixed /><span><small>STATUS</small><b>AWAITING INSERTION</b></span></div>
            <div className="route-data"><span><small>DISTANCE</small><b>{objective.id === '01' ? '1.8 KM' : objective.id === '02' ? '3.2 KM' : '4.7 KM'}</b></span><span><small>EXPOSURE</small><b>{objective.id === '02' ? 'HIGH' : 'LOW'}</b></span></div>
          </motion.aside>
        </AnimatePresence>
      </div>
    </section>
  )
}

function DeploySection({ onDeploy }) {
  return (
    <section className="deploy-section">
      <div className="deploy-rings" aria-hidden="true"><i /><i /><i /></div>
      <LockKeyhole />
      <BracketLabel>ALL SYSTEMS NOMINAL</BracketLabel>
      <h2>READY TO<br /><em>GO DARK?</em></h2>
      <p>Confirming deployment will lock your selected kit and initiate the insertion sequence.</p>
      <button className="deploy-button" onClick={onDeploy}><span>DEPLOY NOW</span><ChevronRight /></button>
      <small className="legal">SIMULATION // FICTIONAL TRAINING ENVIRONMENT // UNIT 07</small>
    </section>
  )
}

function DeployOverlay({ onClose }) {
  const [stage, setStage] = useState(0)
  useEffect(() => {
    const times = [setTimeout(() => setStage(1), 850), setTimeout(() => setStage(2), 1900), setTimeout(() => setStage(3), 3100)]
    return () => times.forEach(clearTimeout)
  }, [])
  const labels = ['ENCRYPTING LOADOUT', 'UPLINK ESTABLISHED', 'INSERTION VECTOR LOCKED', 'CLEARED FOR DEPLOYMENT']
  return (
    <motion.div className="deploy-overlay" initial={{ clipPath: 'inset(50% 0 50% 0)' }} animate={{ clipPath: 'inset(0% 0 0% 0)' }} exit={{ clipPath: 'inset(50% 0 50% 0)' }} transition={{ duration: .45 }}>
      <div className="deploy-scan" /><Crosshair className="deploy-mark" />
      <div className="deploy-status"><small>OPERATION BLACKOUT // INSERTION</small><h2>{stage < 3 ? 'STAND BY' : 'YOU ARE CLEARED'}</h2><div className="loader"><motion.i animate={{ width: `${(stage + 1) * 25}%` }} /></div><p>{labels[stage]} <span>{String((stage + 1) * 25).padStart(3, '0')}%</span></p>{stage === 3 && <button onClick={onClose}><Check /> RETURN TO BRIEFING</button>}</div>
    </motion.div>
  )
}

export default function App() {
  const [activeId, setActiveId] = useState('viper')
  const [selectedObjective, setSelectedObjective] = useState('01')
  const [sound, setSound] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [deployed, setDeployed] = useState(false)
  const reducedMotion = useReducedMotion()
  const compact = useCompact()
  const loadout = useMemo(() => LOADOUTS.find((item) => item.id === activeId), [activeId])

  useEffect(() => { document.documentElement.style.setProperty('--active-accent', loadout.accent) }, [loadout])
  useEffect(() => { document.body.style.overflow = deployed ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [deployed])

  return (
    <main>
      <a className="skip-link" href="#briefing">Skip to mission briefing</a>
      <TopNav sound={sound} setSound={setSound} open={menuOpen} setOpen={setMenuOpen} />
      <Hero loadout={loadout} reducedMotion={reducedMotion || compact} />
      <Briefing />
      <Loadout activeId={activeId} setActiveId={setActiveId} />
      <MissionMap selected={selectedObjective} setSelected={setSelectedObjective} />
      <DeploySection onDeploy={() => setDeployed(true)} />
      <footer><div className="brand mini"><span>OB</span><div>BLACKOUT<small>STRIKE UNIT</small></div></div><p>Original interactive concept. No affiliation with any existing game or franchise.</p><span>BUILD 07.26 // SECURE</span></footer>
      <div className="scanlines" aria-hidden="true" />
      <AnimatePresence>{deployed && <DeployOverlay onClose={() => setDeployed(false)} />}</AnimatePresence>
    </main>
  )
}
