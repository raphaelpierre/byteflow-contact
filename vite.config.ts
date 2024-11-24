import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/byteflow-contact/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    
  },

});
