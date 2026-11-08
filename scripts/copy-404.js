import fs from 'node:fs';
import path from 'node:path';

const distPath = path.resolve(import.meta.dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Copied dist/index.html -> dist/404.html for GitHub Pages routing support.');
}
