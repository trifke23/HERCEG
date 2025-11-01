import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative base so docs/index.html can be opened directly without a server
  base: "./",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.JPG'],
  build: {
    // Output static files to repository root /docs for GitHub Pages
    outDir: '../docs',
    emptyOutDir: true,
  },
});
