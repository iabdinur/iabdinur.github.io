import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync } from 'fs'

// Base path configuration
// Defaults to '/' for user pages (iabdinur.github.io) and local development
// For project pages, set VITE_BASE_PATH=/project-name/
const base = process.env.VITE_BASE_PATH || '/'

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const copy404Plugin = () => {
  return {
    name: 'copy-404',
    closeBundle() {
      try {
        copyFileSync('dist/index.html', 'dist/404.html')
        console.log('✓ Copied index.html to 404.html for GitHub Pages')
      } catch (error) {
        console.error('Failed to copy 404.html:', error)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copy404Plugin()],
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

