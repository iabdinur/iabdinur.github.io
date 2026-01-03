import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Use base path only for GitHub Pages deployment
// For local development and preview, use '/' so routes work correctly
// Set VITE_BASE_PATH env variable to override (e.g., for GitHub Pages: VITE_BASE_PATH=/iabdinur.github.io/)
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Allow access from network devices
    port: 5173,
    open: true,
  },
  base,
})

