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
  },
  plugins: [
    ViteVisualizer({
      // Opções de configuração do plugin visualizer
      open: true, // Se deve abrir o relatório automaticamente após a build
      filename: 'bundle-report.html', // Nome do arquivo gerado
    }),
  ],
});
