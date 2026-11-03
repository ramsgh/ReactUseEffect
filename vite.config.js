import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const mockUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Brian Smith', email: 'brian@example.com' },
  { id: 3, name: 'Carla Diaz', email: 'carla@example.com' }
];

const mockPosts = [
  { id: 1, title: 'Understanding useEffect' },
  { id: 2, title: 'Why cleanup matters' },
  { id: 3, title: 'Custom hooks simplify logic' }
];

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url, 'http://localhost');

          if (url.pathname === '/api/users') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(mockUsers));
            return;
          }

          if (url.pathname === '/api/posts') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(mockPosts));
            return;
          }

          next();
        });
      }
    }
  ],
  server: {
    host: '0.0.0.0',
    port: 4173
  }
});
