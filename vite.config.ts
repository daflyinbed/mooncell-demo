import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 15173
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    },
  },
  build: {
    cssMinify: false
  }
})
