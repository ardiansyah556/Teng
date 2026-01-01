import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// These are needed for ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// In Vercel, the server file (this file) is inside the 'dist' folder after build.
// The 'dist' folder also contains the client assets from Vite.
// So, we'll serve static files directly from the 'dist' folder.
const staticPath = path.resolve(__dirname, '..', 'dist');

// Serve static files (like CSS, JS, images)
app.use(express.static(staticPath));

// For any other request, serve the main index.html file.
// This allows your React router to handle the routes on the client-side.
app.get('*', (_req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Export the app for Vercel to use.
// Vercel will handle the server creation and listening.
export default app;
