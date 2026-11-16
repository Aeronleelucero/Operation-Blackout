# Operation: Blackout — Multiplayer architecture

## Topology
Peer-hosted rooms over WebRTC (PeerJS for signalling). The hosting browser runs the
authoritative simulation (`src/game/authority.js`) in a Web Worker; every client — including
the host's own view — talks to it only through sequenced input commands and receives snapshots
and events back.

```
client ──{type:'c'} cmds (unreliable, redundant)──▶ host Room ──▶ Worker: Authority (60 Hz)
client ◀──{type:'s'} snapshots (unreliable, 30 Hz)── host Room ◀── snapshot()
client ◀──{type:'ev'} events (reliable, ordered)─── host Room
```

| Module | Role |
|---|---|
| `world.js` | Shared deterministic simulation: map, collision, movement, weapons, recoil, spread |
| `authority.js` | Match state, spawning, hit validation with lag compensation, pickups, bots |
| `protocol.js` | Versioned wire format, compact encodings, validation, rate limiting |
| `network.js` | PeerJS transport, connection state machine, heartbeat, reconnect |
| `prediction.js` | Client prediction/reconciliation and snapshot interpolation |

## Transport
* **Reliable/ordered** PeerJS DataConnection: handshake (`welcome`, protocol version), events
  (kills, shots, pickups), chat, heartbeats.
* **Unreliable/unordered** negotiated `RTCDataChannel` (`maxRetransmits: 0`) on the same peer
  connection: snapshots and input commands. PeerJS's own `reliable: false` only sets
  `ordered: false` and still retransmits, so it cannot drop stale state; this extra channel can.
* If the unreliable channel cannot open, both fall back to the reliable channel. Disposable
  state is then **dropped** whenever the send buffer exceeds 32 KB instead of queueing behind it.
* Snapshots are encoded per recipient: the recipient's own player is sent at full precision so
  prediction replays are bit-exact; everyone else is rounded to mm/ms.

## Prediction, reconciliation, interpolation
* Inputs are fixed 1/60 s commands with monotonically increasing `seq`. Angles are quantised to
  wire precision *before* the client simulates them.
* The host processes each command exactly once (stale/duplicate `seq` rejected) and reports the
  last processed `ack` per player. Input credit allows catching up after a hiccup but never
  more than real time over a one-second window (no speed hacks).
* The client keeps unacknowledged commands, rebuilds from the authoritative state on every
  snapshot and replays them. Corrections are smoothed; > 2.5 m snaps. During the countdown the
  client predicts the GO moment from the host clock + RTT so the first moments of a round match.
* Remote players are interpolated at an adaptive delay (100–200 ms, tracks measured jitter);
  out-of-order, duplicate and foreign-session snapshots are ignored; extrapolation ≤ 150 ms;
  a render-only smoother absorbs discontinuities.

## Hit validation
Hitscan and knife hits are resolved only on the authority, from the shooter's authoritative
position, weapon, ammo, fire-rate timers, spread and recoil (recoil and spread live in the shared
simulation state, so a modified client cannot remove them). Targets are rewound to the
command's `viewTime`, clamped to `RTT (measured by the host) + max interpolation delay + 50 ms`
and never more than 450 ms.

## Connection lifecycle
`IDLE → CONNECTING → CONNECTED ⇄ RECONNECTING → DISCONNECTED`, plus terminal `ERROR`.
* Host pings every second (also measures RTT); either side declares a link lost after 6 s of silence.
* A dropped player stays in the match for 15 s (frozen and untargetable). The client retries with
  the same player token and resumes the same player, score included.
* Leaving sends `bye`, so departures are immediate; a host leaving moves every client to
  `DISCONNECTED` with a reason and a Retry button.
* Admission: protocol version must match, room capacity is 12, names are sanitised, command/chat
  messages are rate-limited, and peers sending repeated malformed messages are kicked.

## Security limits of peer hosting
The host runs the authority, so **a modified host client can cheat** (edit health, positions,
hit results). Clients are protected from each other; nobody is protected from the host. Play with
people you trust, or run the authority on a server (below).

## Moving to a dedicated server
`Authority`, `world.js` and `protocol.js` have no DOM or PeerJS dependencies. A server needs to:
1. Run `Authority.tick()` at 60 Hz and call `snapshot()` at 30 Hz.
2. Accept `{type:'c'}` messages, validate with `parseClientMessage`, and call `queue()`.
3. Send `encodeSnapshot(snap, playerId)` (unreliable/unordered — WebTransport datagrams or a
   WebRTC data channel) and `{type:'ev'}` (reliable).
4. Measure RTT and call `setRtt()`.
Clients then swap `Room` for a client of that transport; prediction and rendering stay unchanged.

## Deployment configuration (no secrets in source)
| Variable | Purpose |
|---|---|
| `VITE_ICE_CONFIG_URL` | Endpoint returning `{"iceServers":[...]}` with short-lived TURN credentials, fetched at runtime |
| `VITE_PEER_HOST`, `VITE_PEER_PORT`, `VITE_PEER_PATH`, `VITE_PEER_SECURE` | Optional self-hosted PeerJS signalling server |

Without `VITE_ICE_CONFIG_URL` only public STUN is used; players behind symmetric NATs need TURN.
Never put TURN usernames/passwords in `VITE_*` variables — they are embedded in the bundle.

## Network requirements (measured in `scripts/net.test.mjs`)
| Players | Snapshot | Down per client | Up per client |
|---|---|---|---|
| 2 | ~0.44 KB | ~15 KB/s | ~8–12 KB/s |
| 12 | ~2.1 KB | ~63 KB/s | ~9 KB/s |

The host's upstream scales with players (≈ 63 KB/s × 11 clients at 12 players ≈ 0.7 MB/s).

## Testing
```
npm test            # all node tests (simulation, authority, protocol, prediction, network simulator)
npm run test:game   # simulation/authority only
npm run test:net    # protocol + network simulator (prints latency/jitter/bandwidth metrics)
```
Press **F3** in game for live FPS, ping, ack delay, correction distance, snapshot size,
throughput, host tick time and GPU resource counts.
