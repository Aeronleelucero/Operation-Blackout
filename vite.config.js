import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // three.js alone is ~720 kB minified; it is cached separately from game code.
    chunkSizeWarningLimit: 800,
    rollupOptions: { input: { briefing: 'index.html', play: 'play.html' } },
  },
})
