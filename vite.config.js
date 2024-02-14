// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importez path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'), // Alias pour le dossier des composants
      '@styles': path.resolve(__dirname, 'src/styles'), // Alias pour le dossier des styles
      '@datas': path.resolve(__dirname, 'datas'), // Alias pour le dossier datas
      '@pages': path.resolve(__dirname, 'src/pages'), // Alias pour le dossier pages
    },
  },
});
