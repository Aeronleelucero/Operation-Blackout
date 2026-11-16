// Original synthesized sound effects (Web Audio). No external samples.
export class Sound {
  constructor() { this.ctx = null; this.enabled = true; this.volume = 0.8 }

  ensure() {
    if (!this.enabled) return null
    try {
      if (!this.ctx) {
        this.ctx = new AudioContext()
        this.master = this.ctx.createGain()
        this.master.gain.value = this.volume
        const comp = this.ctx.createDynamicsCompressor()
        comp.threshold.value = -14; comp.ratio.value = 4
        this.master.connect(comp).connect(this.ctx.destination)
        const len = this.ctx.sampleRate
        this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
        const d = this.noise.getChannelData(0)
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
      }
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return this.ctx
    } catch { return null }
  }

  out(pan = 0, gain = 1) {
    const g = this.ctx.createGain()
    g.gain.value = gain
    if (pan && this.ctx.createStereoPanner) {
      const p = this.ctx.createStereoPanner()
      p.pan.value = Math.max(-1, Math.min(1, pan))
      g.connect(p).connect(this.master)
    } else g.connect(this.master)
    return g
  }

  noiseBurst(dest, { t = 0, dur = 0.1, gain = 0.5, type = 'bandpass', freq = 1800, q = 0.8, sweep = null, attack = 0.002 } = {}) {
    const c = this.ctx, now = c.currentTime + t
    const src = c.createBufferSource()
    src.buffer = this.noise
    src.playbackRate.value = 0.8 + Math.random() * 0.4
    const f = c.createBiquadFilter()
    f.type = type; f.frequency.setValueAtTime(freq, now); f.Q.value = q
    if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, now + dur)
    const g = c.createGain()
    g.gain.setValueAtTime(0.0001, now)
    g.gain.exponentialRampToValueAtTime(gain, now + attack)
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
    src.connect(f).connect(g).connect(dest)
    src.start(now, Math.random() * 0.5)
    src.stop(now + dur + 0.05)
  }

  tone(dest, { t = 0, dur = 0.1, gain = 0.3, freq = 440, end = null, type = 'sine', attack = 0.003 } = {}) {
    const c = this.ctx, now = c.currentTime + t
    const o = c.createOscillator(), g = c.createGain()
    o.type = type
    o.frequency.setValueAtTime(freq, now)
    if (end) o.frequency.exponentialRampToValueAtTime(end, now + dur)
    g.gain.setValueAtTime(0.0001, now)
    g.gain.exponentialRampToValueAtTime(gain, now + attack)
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
    o.connect(g).connect(dest)
    o.start(now); o.stop(now + dur + 0.05)
  }

  // weapon: 0 rifle, 1 pistol. distance in meters (0 = local), pan -1..1
  shot(weapon = 0, distance = 0, pan = 0) {
    if (!this.ensure()) return
    const far = Math.min(1, distance / 60)
    const gain = distance ? Math.max(0.04, 0.55 / (1 + distance * 0.12)) : 0.6
    const dest = this.out(pan, gain)
    let d = dest
    if (distance > 4) {
      const lp = this.ctx.createBiquadFilter()
      lp.type = 'lowpass'; lp.frequency.value = 7000 - far * 5600
      lp.connect(dest); d = lp
    }
    const p = weapon === 1
    this.noiseBurst(d, { dur: p ? 0.07 : 0.09, gain: 0.9, freq: p ? 2600 : 2000, q: 0.6, sweep: 700 })
    this.noiseBurst(d, { dur: p ? 0.22 : 0.32, gain: 0.35, type: 'lowpass', freq: 1400, sweep: 200, attack: 0.004 })
    this.tone(d, { dur: 0.13, gain: p ? 0.5 : 0.75, freq: p ? 190 : 140, end: 42, type: 'sine' })
    this.tone(d, { dur: 0.04, gain: 0.18, freq: p ? 1300 : 900, end: 300, type: 'square' })
    if (!distance) this.noiseBurst(d, { t: 0.05, dur: 0.035, gain: 0.07, freq: 5200, q: 4 }) // mechanism
  }

  swing() { if (!this.ensure()) return; const d = this.out(0.1, 0.4); this.noiseBurst(d, { dur: 0.18, gain: 0.6, freq: 900, q: 0.7, sweep: 3200, attack: 0.02 }) }
  pickup() { if (!this.ensure()) return; const d = this.out(0, 0.4); this.tone(d, { dur: 0.08, gain: 0.25, freq: 660, type: 'triangle' }); this.tone(d, { t: 0.07, dur: 0.12, gain: 0.25, freq: 990, type: 'triangle' }); this.noiseBurst(d, { t: 0.02, dur: 0.06, gain: 0.4, freq: 2400, q: 3 }) }

  dry() { if (!this.ensure()) return; const d = this.out(0, 0.5); this.tone(d, { dur: 0.03, gain: 0.3, freq: 2400, end: 1200, type: 'square' }) }

  reload(weapon = 0) {
    if (!this.ensure()) return
    const d = this.out(0.15, 0.5)
    const T = weapon === 1 ? [0.14, 0.75, 0.98] : [0.25, 1.15, 1.55]
    // mag release + out
    this.noiseBurst(d, { t: T[0], dur: 0.05, gain: 0.5, freq: 3200, q: 3 })
    this.tone(d, { t: T[0], dur: 0.06, gain: 0.12, freq: 1700, end: 900, type: 'triangle' })
    // mag seat (double click)
    this.noiseBurst(d, { t: T[1], dur: 0.04, gain: 0.6, freq: 2400, q: 4 })
    this.noiseBurst(d, { t: T[1] + 0.06, dur: 0.05, gain: 0.7, freq: 1600, q: 3 })
    // charging handle / slide
    this.noiseBurst(d, { t: T[2], dur: 0.12, gain: 0.35, freq: 1200, q: 1, sweep: 3800 })
    this.noiseBurst(d, { t: T[2] + 0.15, dur: 0.05, gain: 0.7, freq: 2800, q: 3 })
  }

  swap() { if (!this.ensure()) return; const d = this.out(0, 0.35); this.noiseBurst(d, { dur: 0.08, gain: 0.5, freq: 2200, q: 2 }); this.noiseBurst(d, { t: 0.14, dur: 0.05, gain: 0.5, freq: 3000, q: 3 }) }

  step(speed = 1) { if (!this.ensure()) return; const d = this.out((Math.random() - 0.5) * 0.2, 0.18 * speed); this.noiseBurst(d, { dur: 0.07, gain: 0.6, type: 'lowpass', freq: 480 + Math.random() * 200, sweep: 120 }) }
  jump() { if (!this.ensure()) return; const d = this.out(0, 0.2); this.noiseBurst(d, { dur: 0.1, gain: 0.5, type: 'lowpass', freq: 700, sweep: 200 }) }
  land(impact = 8) { if (!this.ensure()) return; const d = this.out(0, Math.min(0.45, 0.1 + impact * 0.025)); this.noiseBurst(d, { dur: 0.14, gain: 0.8, type: 'lowpass', freq: 380, sweep: 90 }); this.tone(d, { dur: 0.1, gain: 0.3, freq: 90, end: 40 }) }
  slide() { if (!this.ensure()) return; const d = this.out(0, 0.25); this.noiseBurst(d, { dur: 0.55, gain: 0.4, freq: 900, q: 0.6, sweep: 300, attack: 0.03 }) }

  hit(head = false) {
    if (!this.ensure()) return
    const d = this.out(0, 0.5)
    this.tone(d, { dur: 0.05, gain: 0.35, freq: head ? 1900 : 1250, end: head ? 1700 : 1000, type: 'triangle' })
    if (head) this.tone(d, { t: 0.03, dur: 0.18, gain: 0.25, freq: 2600, end: 2500, type: 'sine' })
  }

  kill(streak = 1) {
    if (!this.ensure()) return
    const d = this.out(0, 0.45)
    const base = 520 + Math.min(streak, 6) * 40
    this.tone(d, { dur: 0.09, gain: 0.3, freq: base, type: 'triangle' })
    this.tone(d, { t: 0.08, dur: 0.18, gain: 0.3, freq: base * 1.5, type: 'triangle' })
  }

  hurt() { if (!this.ensure()) return; const d = this.out(0, 0.5); this.tone(d, { dur: 0.16, gain: 0.5, freq: 110, end: 55, type: 'sawtooth' }); this.noiseBurst(d, { dur: 0.1, gain: 0.3, type: 'lowpass', freq: 600 }) }
  beep(high = false) { if (!this.ensure()) return; const d = this.out(0, 0.35); this.tone(d, { dur: high ? 0.35 : 0.12, gain: 0.35, freq: high ? 1320 : 880, type: 'square' }) }
  ui() { if (!this.ensure()) return; const d = this.out(0, 0.25); this.tone(d, { dur: 0.05, gain: 0.2, freq: 660, end: 990, type: 'triangle' }) }
  death() { if (!this.ensure()) return; const d = this.out(0, 0.5); this.tone(d, { dur: 0.6, gain: 0.35, freq: 300, end: 70, type: 'triangle' }) }
}
