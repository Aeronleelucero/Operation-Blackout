import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, access, mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { build } from 'vite'

const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8')

test('canonical homepage contains the original dashboard and early CSS, without briefing content', async () => {
  const html = await read('index.html'), main = await read('src/game/main.js'), css = await read('src/game/game.css')
  for (const id of ['game', 'menu', 'hostBtn', 'joinBtn', 'practiceBtn', 'roomCode', 'sensitivity', 'fov', 'quality', 'sound', 'engineLoading']) assert.ok(html.includes(`id="${id}"`), id)
  assert.match(html, /WELCOME TO<br><em>THE FOUNDRY/)
  assert.doesNotMatch(html, /INITIALIZE BRIEFING|ENTER THE FOUNDRY|src\/main\.jsx|id="root"/i)
  assert.ok(html.indexOf('rel="stylesheet"') < html.indexOf('</head>'))
  assert.match(html, /href="\.\/src\/game\/game\.css"/)
  assert.doesNotMatch(main, /import ['"].*\.css['"]/)
  assert.doesNotMatch(css, /@import|https:\/\//)
  assert.match(css, /font-display: optional/)
  for (const [, path] of css.matchAll(/url\((\.\/fonts\/[^)]+)\)/g)) await access(new URL('../src/game/' + path, import.meta.url))
  assert.equal((html.match(/type="module"/g) || []).length, 1)
  assert.equal((main.match(/new T\.WebGLRenderer\(/g) || []).length, 1)
  assert.match(main, /effects\.update\(realDt\)/)
})

test('legacy play route redirects to the single dashboard and keeps query/hash', async () => {
  const html = await read('play.html')
  assert.match(html, /location\.replace\('\.\/' \+ location\.search \+ location\.hash\)/)
  assert.match(html, /http-equiv="refresh"/)
  assert.doesNotMatch(html, /<canvas|src\/game\/main\.js|id="menu"/)
})

test('production emits root dashboard, legacy route, local CSS/fonts and one game entry', async () => {
  const out = await mkdtemp(join(tmpdir(), 'blackout-dashboard-'))
  try {
    await build({ logLevel: 'silent', build: { outDir: out, emptyOutDir: true } })
    const root = await readFile(join(out, 'index.html'), 'utf8'), legacy = await readFile(join(out, 'play.html'), 'utf8')
    assert.match(root, /id="hostBtn"/)
    assert.doesNotMatch(root, /briefing|src\/main\.jsx/i)
    const cssPath = root.match(/<link[^>]*rel="stylesheet"[^>]*href="([^\"]+)"/)[1]
    const css = await readFile(join(out, cssPath), 'utf8')
    assert.match(css, /\.menu-card/)
    assert.doesNotMatch(css, /fonts\.googleapis|@import/)
    assert.equal((root.match(/type="module"/g) || []).length, 1)
    assert.doesNotMatch(legacy, /type="module"|<canvas/)
    assert.match(legacy, /location\.replace/)
    await access(join(out, 'font-licenses/barlowcondensed-OFL.txt'))
    await access(join(out, 'font-licenses/ibmplexmono-OFL.txt'))
  } finally { await rm(out, { recursive: true, force: true }) }
})
