import express from 'express';
import path from 'path';

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const distPath = path.resolve(import.meta.dirname, 'dist');

// Serve static assets from Vite build directory
app.use(express.static(distPath));

// Fallback to index.html for client-side single-page application routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`✓ Cyberpunk character generator server running on http://0.0.0.0:${port}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
