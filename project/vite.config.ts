import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path to your GitHub repository name.
  // If your repo name differs, change "/HERCEG/" accordingly.
  base: "/HERCEG/",
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
