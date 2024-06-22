import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'http://184.94.212.7:4000', // Your backend server URL
      changeOrigin: true,      
    }
  }
})
