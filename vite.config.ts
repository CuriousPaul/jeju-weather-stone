import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['jeju-weather-stone-production.up.railway.app']
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['jeju-weather-stone-production.up.railway.app']
  }
})
