import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3420
  },
  build: {
    // Output directory for the production build
    outDir: 'build',
    // Copy the assets from public folder to build folder
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'src/assets/*', dest: 'build' },
          ],
        }),
      ],
    },
  },  
})
