import { defineConfig } from 'vite'

export default defineConfig({
  base: '/sons-of-the-land/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})