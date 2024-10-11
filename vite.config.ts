import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Jhon-20.github.io/jhon-y-carmen',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Crea un chunk para las dependencias
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
