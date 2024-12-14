import { defineConfig } from 'vite';
import ViteVisualizer from 'vite-bundle-visualizer';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'babylon-loaders': ['@babylonjs/loaders/glTF'],
          'core': ['@babylonjs/core'],
        },
      },
    },
  }
});
