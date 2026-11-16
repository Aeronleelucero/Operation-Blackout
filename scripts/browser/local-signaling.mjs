// Local PeerJS signaling fixture. Relays negotiation only; game traffic uses real WebRTC.
import http from 'node:http'
import { createHash, randomUUID } from 'node:crypto'
export async function signalingFixture(port) {
  const peers = new Map()
  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(req.url.includes('/id') ? randomUUID() : '{}')
  })
  const frame = data => {
    const b = Buffer.from(JSON.stringify(data))
    const header = b.length < 126 ? Buffer.from([0x81, b.length]) : Buffer.from([0x81, 126, b.length >> 8, b.length & 255])
    return Buffer.concat([header, b])
  }
  server.on('upgrade', (req, socket) => {
    const id = new URL(req.url, 'http://localhost').searchParams.get('id')
    const accept = createHash('sha1').update(req.headers['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64')
    socket.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${accept}\r\n\r\n`)
    peers.set(id, socket)
    socket.write(frame({ type: 'OPEN' }))
    let buffer = Buffer.alloc(0)
    socket.on('data', chunk => {
      buffer = Buffer.concat([buffer, chunk])
      while (buffer.length >= 2) {
        const opcode = buffer[0] & 15, masked = buffer[1] & 128
        let len = buffer[1] & 127, offset = 2
        if (len === 126) { if (buffer.length < 4) return; len = buffer.readUInt16BE(2); offset = 4 }
        if (len === 127) { socket.destroy(); return }
        const maskOffset = offset; if (masked) offset += 4
        if (buffer.length < offset + len) return
        const payload = Buffer.from(buffer.subarray(offset, offset + len))
        if (masked) for (let i = 0; i < len; i++) payload[i] ^= buffer[maskOffset + i % 4]
        buffer = buffer.subarray(offset + len)
        if (opcode === 8) { socket.end(); return }
        if (opcode !== 1) continue
        let m
        try { m = JSON.parse(payload) } catch { continue }
        if (m.dst) {
          const target = peers.get(m.dst)
          if (target) target.write(frame({ ...m, src: id }))
          else socket.write(frame({ type: 'EXPIRE', src: m.dst, dst: id }))
        }
      }
    })
    socket.on('error', () => {})
    socket.on('close', () => { if (peers.get(id) === socket) peers.delete(id) })
  })
  await new Promise(r => server.listen(port, '127.0.0.1', r))
  return async () => { for (const s of peers.values()) s.destroy(); await new Promise(r => server.close(r)) }
}
