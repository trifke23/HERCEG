// Copy docs/index.html to docs/404.html so GitHub Pages
// serves SPA routes correctly under client-side routing.
const fs = require('fs');
const path = require('path');

// Output is configured to ../docs (repo root /docs)
const outDir = path.join(__dirname, '..', '..', 'docs');
const indexPath = path.join(outDir, 'index.html');
const notFoundPath = path.join(outDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('Created docs/404.html for SPA fallback');
} else {
  console.warn('index.html not found in docs/. Did you run build?');
}
