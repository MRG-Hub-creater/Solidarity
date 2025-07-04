import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

    build:{
      outDir:'dist',
    },

    server: {
    allowedHosts: ['violet-spoons-rest.loca.lt', 'localhost', '127.0.0.1'],port:5173
  },
})

