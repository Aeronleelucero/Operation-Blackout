# Portfolio — Aeron Lee Vincent Lucero

Professional portfolio of **Aeron Lee Vincent Lucero**, software developer and
Computer Science graduate. Built with React, Vite, Three.js, React Three Fiber,
Drei and GSAP ScrollTrigger.

The portfolio combines an interactive 3D environment with readable HTML content,
a **Midnight Purple / Neon Lavender** theme, live website previews, a recognition
gallery, and a downloadable CV plus printable resume. It adapts to desktop,
tablet, and mobile screens and provides a CSS fallback when WebGL is unavailable.

## Contents

- [About the developer](#about-the-developer)
- [Portfolio experience](#portfolio-experience)
- [Projects](#projects)
- [Recognition gallery](#recognition-gallery)
- [Design system](#design-system)
- [Technology stack](#technology-stack)
- [Getting started](#getting-started)
- [Editing the content](#editing-the-content)
- [CV and printable resume](#cv-download-and-printable-resume)
- [Architecture](#architecture)
- [Performance and accessibility](#performance-and-accessibility)
- [Validation](#validation)
- [Deployment](#deployment)

## About the developer

Aeron is based in **Maco, Davao de Oro, Philippines**. His work and interests
include software engineering, backend development, artificial intelligence,
computer vision, and cybersecurity. The portfolio presents practical web and
mobile applications, database-backed systems, and interactive browser experiences.

Education includes ICT at STI College of Tagum (2020–2022) and a Bachelor of
Science in Computer Science at the University of Mindanao Tagum College (2022–2026).

- [GitHub — Aeronleelucero](https://github.com/Aeronleelucero)
- [LinkedIn — Aeron Lee Vincent Lucero](https://www.linkedin.com/in/aeron-lee-vincent-lucero-884908351/)

## Portfolio experience

The page is normal, semantic HTML. Behind it, one persistent WebGL canvas
holds a continuous world; scrolling flies the camera from station to station:

| Chapter | 3D station |
| --- | --- |
| 01 Introduction | Name, professional summary, location, CV download, and project shortcut. **Digital Core**: iridescent faceted shell, violet heart, three orbital rings and a layered plume of feathers; tilts toward the pointer, glows on hover, and unfolds on click or via the keyboard-accessible "Digital Core" button |
| 02 About | Portrait and introduction; the core opens like an iris to reveal its illuminated inner gyroscope ring, and closes again as you scroll on (a click overrides this until you reach another section) |
| 03 Education | A rail of years with gates at 2020 / 2022 / 2026 that light up as you travel through time |
| 04 Expertise | A constellation: one node per category, one satellite per technology. Hover or select a category to bring it forward |
| 05 Projects | Featured first: **Aqua**, followed by **Operation Blackout**. Both mount their deployed sites in scaled iframes on hover and open a near full-screen interactive view with *Visit Site* on click. Each has its own emblem: underwater portal (Aqua), targeting reticle (Blackout). The original projects follow: QR Attendance, HERD-VISION, PAWS4PALS, Student Information System, CarMaLuTao |
| 06 Credentials & Recognition | A filterable gallery of certificates, competition participation, and workshop documentation, accompanied by an ascending 3D helix |
| 07 Contact | The camera rewinds over the whole lit path back to the Digital Core |

A violet-to-lavender "data conduit" rises from a port beneath the Digital Core and runs beneath every station (along the plinths, under the constellation), lighting up behind you as you go.

## Projects

Project content and ordering come from [projects.js](src/data/projects.js).
Aqua remains first, followed by Operation Blackout and the five original CV projects.
Source/demo links with no confirmed URL remain hidden.

### 1. Aqua

**Category:** Interactive 3D Web Experience

An immersive underwater world featuring realistic animated fish, natural swimming
behavior, and interactive exploration. Its featured card displays a real captured
poster at rest, the deployed underwater experience on hover, and an interactive
near full-screen modal when opened. An underwater portal represents it in the
portfolio's 3D scene.

**Technologies:** React, Three.js, React Three Fiber, WebGL, GSAP.

**Live website:** [Open Aqua](https://aqua-theta-umber.vercel.app/)

### 2. Operation Blackout

**Category:** Interactive 3D Web Experience / Browser Game

An immersive, futuristic browser-based experience featuring an interactive command
dashboard, real-time gameplay elements, and a visually engaging interface. The
current deployment presents **the Foundry**, a browser FPS with a 3D arena,
multiplayer room controls, and solo training with five bots.

Blackout uses the same live-preview components as Aqua, with its own Foundry
poster, entry hint, and targeting-reticle emblem. Its expanded iframe supports
pointer lock for aiming. Current FPS movement uses keyboard and mouse, while the
embedded menu remains usable by touch.

**Verified technologies:** JavaScript, Three.js, WebGL, WebRTC, PeerJS, Vite.
These were checked against the separate Blackout source and its deployed bundle;
the portfolio does not claim that Blackout uses React or React Three Fiber.

**Live website:** [Open Operation Blackout](https://operation-blackout-lake.vercel.app/)

### 3. QR Attendance System

**Category:** Mobile · Offline-first

A mobile attendance application supporting event-based QR scanning and offline
operation. Its React Native application connects to a Laravel backend, stores
attendance locally in SQLite, and tracks pending records for later synchronization.
Features include scanner authentication and web-based event management for
departments, employees, and participants.

**Technologies:** React Native, Laravel, SQLite.

### 4. HERD-VISION — AI Lameness Detection

**Category:** AI · Computer Vision · NAFAMCO 2026

An AI-assisted dairy-cow lameness detection and body-condition scoring system
developed using YOLOv8 pose estimation and temporal models. Its FastAPI backend
provides REST APIs and WebSocket streaming, and its React/TypeScript frontend
supports processing and inference monitoring. SQLite provides lightweight local
storage, and the system was packaged as a Windows desktop application.

The portfolio's pose emblem is a stylized illustration. Screenshot annotations
are drawn only from real inference output for the exact image; the current
inference data is `null`.

**Technologies:** Python, YOLOv8 Pose Estimation, FastAPI, React, TypeScript, Vite,
SQLite.

### 5. PAWS4PALS Inventory System

**Category:** Inventory System

An inventory-management application for a local pet shop, with features for
tracking supplies, sales, and stock levels. An inventory-rack emblem accompanies
the project in the 3D environment.

**Technologies:** React, TypeScript, SQLite.

### 6. Student Information System

**Category:** Records Management

A student-record management application with create, read, update, and delete
functionality, represented in the portfolio by a stack of record cards.

**Technologies:** Python, SQLite.

### 7. CarMaLuTao Online Store

**Category:** E-commerce · Web

A responsive online store featuring product listings, shopping cart,
authentication, order tracking, and an administration panel. Its portfolio exhibit
uses a shopping-cart emblem.

**Technologies:** PHP, CSS, MySQL.

## Recognition gallery

Image-backed recognition records are maintained in
[recognition.js](src/data/recognition.js), separately from the chronological
milestones in [achievements.js](src/data/achievements.js).

| Entry | Description |
| --- | --- |
| **Hack4Gov — Team SysCall** | Group-photo documentation of team participation in the Hack4Gov event. |
| **UPLB COSS Game Jam 2026** | Certificate of Appreciation for participation in the online workshop and competition, dated July 27, 2026. |
| **Knowledge Sharing on Digital Transformation** | Documentation of a Municipal Government of Maco activity covering data-center management, operational protocols, and IT infrastructure. Image credits are retained in the data. |
| **Datheon Python Programming Internship** | Certificate of Completion for a four-week internship, dated October 18, 2025. Its printed verification link is displayed without claiming independent verification. |

Visitors can filter by **All**, **Certifications**, **Competitions**, and
**Workshops & Seminars**. Wide screens use a spatial exhibition; tablets and phones
use a card grid. Opening an item displays its full image in a separate recognition
modal. Certificate previews preserve the document rather than cropping it.
Unstated dates remain `null`, and new records should be backed by supplied evidence.

## Design system

The Midnight Purple / Neon Lavender palette uses dark glass surfaces and
restrained lighting while preserving the portfolio's existing layout and animations.

| Theme variable | Color | Purpose |
| --- | --- | --- |
| `--bg-primary` | `#0B0720` | Main midnight-purple background |
| `--bg-secondary` | `#25134D` | Deep-purple panels and secondary surfaces |
| `--accent-primary` | `#6A2FC8` | Electric-purple buttons and active indicators |
| `--accent-secondary` | `#9D71E8` | Soft-violet borders, glow, and secondary accents |
| `--accent-highlight` | `#D1B8FF` | Lavender headings and keyboard focus indicators |
| `--text-primary` | `#F2E9FF` | Light text and primary button labels |

- HTML: six source tokens in `src/styles/tokens.css`: `--bg-primary`,
  `--bg-secondary`, `--accent-primary`, `--accent-secondary`,
  `--accent-highlight`, and `--text-primary`. Existing semantic and RGB aliases
  consume these colors; muted text, frames and hover fills use derived tones.
- Primary button labels retain at least 4.5:1 contrast in normal and hover states;
  lighter lavender is used for headings, navigation and keyboard focus.
- 3D: the matching `THEME` / `PALETTE` in `src/three/materials.js` colors shared
  metals, glass, glow and particles. Existing lights in `Environment.jsx` use
  violet and lavender, with unchanged positions, intensities and render passes.
  The plume, conduit and floor grid share that palette. No bloom is added.
- Live project content keeps its own colors: no tinting filter or shade covers
  Aqua or Operation Blackout. Only the surrounding card and modal are themed.
- The printable resume retains its separate light-on-paper style.

Primary buttons transition to a restrained violet blend over 450ms. The measured
normal/hover button-label contrast was approximately **6.26:1 / 5.34:1**; tested
text tokens also exceeded 4.5:1 on the two source background colors. These
measurements do not constitute a full accessibility audit.

Keep CSS colors, RGB aliases, and the Three.js palette synchronized when changing
the theme. Typography uses **Archivo**, **Inter**, and **JetBrains Mono**, loaded
through the font stylesheet in [index.html](index.html). The favicon and browser
theme color also use the purple palette.

## Technology stack

These are the portfolio's technologies, separate from those of its showcased projects.

| Technology | Role |
| --- | --- |
| React 19 and React DOM | Components, content rendering, and interface state |
| Vite 8 and its React plugin | Development server and production build |
| Three.js | 3D geometry, materials, lighting, fog, and shaders |
| React Three Fiber | React integration and scene render loop |
| Drei | Scene helpers, procedural environment, and performance monitoring |
| GSAP / ScrollTrigger | Opening sequences, reveals, and scroll-driven timelines |
| Lucide React | Interface icons |
| Plain CSS | Theme variables, responsive layouts, glass surfaces, and transitions |
| ESLint | JavaScript, React Hooks, and React Refresh checks |

Exact versions are recorded in [package.json](package.json) and
[package-lock.json](package-lock.json). The portfolio is a static frontend and
does not require a separate backend service to run.

## Getting started

Use npm and a Node.js version supported by the installed toolchain. The current
Vite and React plugin packages require **Node.js 20.19+ on the 20.x line, or
Node.js 22.12+**.

```bash
cd ~/repos/Portfolio/aeron-3d-cv
npm ci            # install the dependency versions in package-lock.json
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve dist/, normally http://localhost:4173
npm run lint
```

Use the actual URL printed by Vite if a default port is already in use. There is
currently no `npm test` script. Live project previews require access to their
external deployments; this repository does not bundle those applications.

## Editing the content

Most content lives in `src/data/`. CV-derived entries should stay consistent with
`public/files/Aeron-Lucero-CV.pdf`; portfolio-only projects and recognition records
are maintained separately. The interface, 3D stations, and printable resume read
the relevant data from these files.

| File | Contents |
| --- | --- |
| `profile.js` | Name, headline, location, about, summary, photo, **contact links**, CV paths |
| `education.js` | Education records (chronological) |
| `skills.js` | Skill categories and technologies |
| `projects.js` | Projects, stacks and **GitHub / demo links** |
| `achievements.js` | Milestones, awards, competitions, experience |
| `recognition.js` | Image-backed certificates, competition/workshop records, categories, thumbnails, and credits |
| `herdVisionInference.js` | HERD-VISION overlay — **real model output only** (currently `null`) |

Fields set to `null` (GitHub, LinkedIn, project links) are **hidden** in the
UI. Fill them in with real, confirmed values only.

### Featured live projects

`LivePreviewCard` and `LiveSiteModal` are shared by Aqua and Operation Blackout.
Projects tracks the selected project and its opening button, so each modal uses
the correct URL and restores focus to the correct card. Add future live projects
with a `live` object in `projects.js`; keep `inResume: false` for work outside the CV.

- Previews mount only on mouse hover while the card is reported on screen.
  IntersectionObserver uses a `0.15` threshold to track viewport visibility.
  They render at 1280 × 800 and scale to the card, without receiving pointer or
  keyboard focus. A six-second idle grace period avoids reloading on quick
  rehovers. Visibility updates remove offscreen preview iframes.
- Opening the single modal removes all hover iframes in the same render. The
  portfolio's WebGL scene pauses, background scrolling is locked, and the native
  modal dialog makes the background inert. Focus guards wrap Tab navigation
  across the cross-origin iframe boundary without inspecting its document.
- The modal occupies 95vw × 95dvh, or the full viewport at 560px or less. Close,
  backdrop click, and Escape outside the iframe restore scrolling and focus.
  Cross-origin iframe keystrokes do not reliably reach the parent; use the
  persistent Close control when the embedded game consumes Escape or Tab.
- Touch users tap to open; reduced motion removes decorative scale and entrance
  animation. The deployed application's own control and motion support still
  governs its embedded content; Blackout's current FPS movement uses a keyboard
  and mouse, while its menu controls remain usable by touch.
- Blackout alone enables sandbox pointer lock for aiming and delegates clipboard
  writing for its room-code action. Aqua retains its existing iframe permissions.
- Blackout's stack is verified from the separate `Operation-Blackout` checkout:
  JavaScript, Three.js/WebGL, WebRTC/PeerJS, and Vite. Its deployed bundle matches
  that checkout's build. Its poster is a real capture of the deployed Foundry menu.

On November 16, 2026, the Blackout deployment returned HTTP 200 without
`X-Frame-Options` or a `Content-Security-Policy` / `frame-ancestors` restriction.
A Chromium sandboxed-iframe check rendered its live Foundry menu with no console
errors. This is a dated verification, not a guarantee about future deployments.
Recheck headers and actual rendering if embedding stops working; correct the
deployment's framing policy where appropriate rather than bypassing it with a proxy.

### Adding a project

1. Edit the `projects` array in `src/data/projects.js`. Keep Aqua first and
   Operation Blackout second; array order controls the HTML list and 3D exhibits.
2. Supply a unique `id`, title, category, summary, highlights array, verified stack,
   and links. Use `null` for unavailable URLs rather than placeholder links.
3. Choose an existing `emblem` key, or create an emblem and register it in
   `src/three/objects/ProjectGallery.jsx`.
4. For a live project, supply `live.url`, `live.poster`, and `live.title`.
   Optional `kind`, `openHint`, `pointerLock`, and `allow` fields configure the
   shared components. Grant permissions only when the embedded application needs them.
5. Set `inResume: false` for a portfolio-only project outside the CV.
6. Verify asset paths, iframe compatibility, responsive behavior, and keyboard controls.

Project numbering and total counts are generated automatically.

### Images

- `public/images/aeron-lucero.jpg` (+ `-480.jpg`): web portrait cropped from
  the camera original, which is kept out of the site in `source-assets/`.
- `public/images/herd-vision-cow.png`: HERD-VISION project image. Optional;
  configured in the data but not currently shipped. The inference panel appears
  only once the real file loads. Its bounding box /
  keypoint overlay is drawn only from `src/data/herdVisionInference.js`.
- The 3D HERD-VISION emblem is a stylized illustration of the project's
  13-keypoint pose schema, not model output.
- `public/images/projects/`: real captured posters for Aqua and Operation Blackout.
- `public/images/recognition/`: original recognition images and lightweight WebP
  thumbnails. Preserve document proportions and image credits when replacing them.

## CV download and printable resume

- **Download CV**: `public/files/Aeron-Lucero-CV.pdf` is the real CV, linked from
  the hero, navigation, contact section, footer and resume page with
  `download="Aeron-Lucero-CV.pdf"`. Files in `public/` are copied to `dist/`
  as-is, so the link keeps working after deployment. Replace the file at the
  same path to update it. Its text must stay consistent with `src/data/`
  (the project bullets and summary are copied from it verbatim). The
  pre-edit original is kept in `source-assets/` (not deployed).
- **Printable resume**: `/resume.html` is generated from `src/data`, with a
  *Print Resume* button (print / save as PDF). Projects marked `inResume: false`,
  including Aqua and Blackout, are excluded. Updating the PDF and editing the
  HTML data are separate tasks; neither automatically rewrites the other.

## Architecture

```
src/
  animations/   scrollConfig.js (stations + ScrollTrigger → station index),
                cameraTimeline.js (camera keyframes), sceneTimeline.js (lights, fog, reveals)
  three/        Scene.jsx (the single Canvas), Experience.jsx, CameraController.jsx,
                Environment.jsx (procedural env map, lights, fog), worldLayout.js,
                materials.js, objects/ (Digital Core, conduit, timeline, constellation,
                project emblems, tower, particles, grid)
  sections/     Hero, About, Education, Skills, Projects, Achievements, Contact
  components/   layout/ (nav, chapter rail, footer, fallbacks), ui/ (buttons, tags…),
                live/ (shared website previews), recognition/ (gallery + image modal)
  hooks/        device profile, reveal-on-scroll, active chapter, HTML↔3D interaction
  data/         portfolio content (mirrors the CV)
  resume/       printable resume page
```

**How scroll drives the scene.** Elements marked `data-station` are scroll
stations. A single ScrollTrigger converts the scroll position into a
fractional station index (e.g. `4.3`). Each frame, `CameraController` damps
toward that value and scrubs two paused GSAP timelines (camera rig and scene
state) whose time equals the station index. 3D components read the animated
values in `useFrame`, avoiding React state updates for every animation frame.
Navigation, filters, and other interface state still update normally.

Project and education stations are generated from the data files, so adding a
project in `projects.js` adds its 3D station automatically. For a new kind of
station, add a `data-station` element, then its id to `STATIONS` and a keyframe
in both `cameraTimeline.js` and `sceneTimeline.js`.

## Performance and accessibility

- One persistent portfolio WebGL renderer; its 3D bundle is code-split and loads
  after the content.
- Adaptive quality: particle counts, DPR and antialiasing scale with device
  tier, and `PerformanceMonitor` drops DPR if the frame rate falls.
- No HDR downloads: reflections come from a procedural Lightformer environment.
- `prefers-reduced-motion`: idle motion, parallax and reveals are disabled,
  and the canvas renders on demand only.
- No WebGL2, or a GPU error: a static CSS backdrop is shown instead, and all
  portfolio content stays usable. Embedded applications have their own GPU and
  browser requirements.
- Semantic landmarks, skip link, keyboard-accessible navigation and skill
  toggles, `aria-current` chapter state, and a downloadable PDF CV plus print resume.

## Validation

Run the configured checks after changing application code:

```bash
npm run lint
npm run build
npm run preview
```

Then inspect the running application in a browser:

1. Confirm all seven projects, their order, section navigation, and 3D exhibits.
2. Hover both featured cards and verify that the actual websites render without tinting.
3. Open each modal and check Visit Site, Close, backdrop closing, Escape outside
   the iframe, focus/scroll restoration, and removal of hover iframes.
4. Exercise supported embedded controls, including Blackout's pointer lock and
   gameplay on a suitable keyboard/mouse device.
5. Check desktop, tablet, and mobile layouts, touch navigation, visible focus,
   reduced motion, recognition filters, and the printable resume.
6. Inspect console/network errors and confirm offscreen previews are removed
   after the visibility observer updates.

During the live-project and theme work on **November 16, 2026**, lint and production
build checks passed. Chromium checks covered both live sites, focus and iframe
cleanup, text/button contrast, desktop/tablet/mobile layouts, and the resume route.
Theme QA used software WebGL and emulated touch devices; desktop captures used
the existing adaptive four-core profile with reduced motion. Normal-motion button
transitions were checked separately. A 320px fallback check passed after a
full-WebGL browser run was interrupted by browser shutdown. Hardware GPU frame
rates and physical mobile devices were not benchmarked.

These are historical results. Re-run relevant checks after source or deployment
changes; no permanent automated browser test runner is configured in `package.json`.

## Deployment

`npm run build` outputs a static site in `dist/` (two pages: `index.html` and
`resume.html`). Deploy it to any static host (Vercel, Netlify, GitHub Pages,
Cloudflare Pages).

The current configuration assumes hosting at the domain root. A subdirectory
deployment requires reviewing Vite's base path and the root-relative image/CV
URLs in the data. Preserve direct access to `/resume.html` and deploy the assets
and `public/` files copied into `dist/` along with the HTML pages.

Aqua and Operation Blackout remain separate deployments. Publishing this portfolio
does not rebuild or publish either embedded application.
