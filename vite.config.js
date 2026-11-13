import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: { input: { briefing: 'index.html', play: 'play.html' } },
  },
})
