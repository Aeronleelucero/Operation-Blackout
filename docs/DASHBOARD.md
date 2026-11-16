# Foundry dashboard entry

`index.html` owns the dashboard markup. Both `/` and `/index.html` serve that file.
`play.html` redirects to `./` using `location.replace`, preserving query parameters and fragments;
it has no game module or canvas. Static hosts only need to serve the files in `dist/`.
Vite uses relative asset paths, including when hosted under a directory prefix.

The HTML head links `src/game/game.css` directly. Vite serves it as a render-blocking stylesheet
in development and extracts a hashed stylesheet for production. The game does not import or
inject its main CSS. The original Barlow Condensed and IBM Plex Mono fonts are self-hosted;
`font-display: optional` prevents a delayed font swap. Font licenses ship in `font-licenses/`.
The existing dashboard stays visible and styled while its arena loads. The loading indicator
is removed after the first arena render, without a fixed timer.

## Checks

```sh
npm test
npm run build
npm run dev -- --host 0.0.0.0 --port 5180
npm run preview -- --host 0.0.0.0
```

For browser regressions, start an installed Chromium or Chromium headless shell with
`--remote-debugging-port=9230`, then run:

```sh
node scripts/browser/dashboard.mjs http://127.0.0.1:9230
```

The browser harness starts isolated dev and production-preview servers on ports 5190/5191,
checks all three URLs under throttling and normal/hard refreshes, observes first contentful
paint and layout shifts, and counts game WebGL contexts. It uses a local signaling fixture
on port 9191 for real host/guest WebRTC data channels; no production signaling settings change.
It also runs Solo Training with five bots. The local signaling fixture is for tests only.
