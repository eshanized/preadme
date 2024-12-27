import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from optimization
  },
  base: '/preadme/', // Set the base path for GitHub Pages
  build: {
    outDir: 'dist', // The directory where the build output will go (default: dist)
    rollupOptions: {
      output: {
        entryFileNames: 'script.js', // Ensure the main script is named script.js
        chunkFileNames: 'script.js', // Ensure chunks are named script.js
        assetFileNames: 'style.css', // Ensure CSS is named style.css
      },
    },
  },
});
