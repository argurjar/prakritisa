import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // default 500 KB → ab 2 MB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          axios: ['axios'],
          framer: ['framer-motion'],
          'react-icons': ['react-icons'],
          'react-router-dom': ['react-router-dom'],
          'react-toastify': ['react-toastify'],
          swiper: ['swiper'],
          // aur installed packages jo chahoge add kar sakte ho
        },
      },
    },
  },
})
