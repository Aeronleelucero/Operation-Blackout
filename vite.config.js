import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: { input: { dashboard: 'index.html', play: 'play.html' } },
  },
})
