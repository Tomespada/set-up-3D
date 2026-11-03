import { defineConfig } from 'vite';

export default defineConfig({
  // Rutas relativas para que funcione automáticamente en cualquier repositorio de GitHub Pages
  base: './',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'esnext'
  }
});
