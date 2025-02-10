import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/preadme/',
  build: {
    outDir: 'dist',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Proper chunking configuration
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'zustand',
            'framer-motion'
          ],
          markdown: [
            'react-markdown',
            'remark-gfm',
            'react-syntax-highlighter'
          ]
        },
        // Ensure proper naming for assets
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Improve CSS handling
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser'
  }
});
