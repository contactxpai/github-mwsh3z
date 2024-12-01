import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/submit-form': {
        target: 'https://hooks.zapier.com/hooks/catch/20833354/2iundv1/',
        changeOrigin: true,
        rewrite: (path) => '',
      }
    }
  }
});
