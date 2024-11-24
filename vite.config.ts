import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//
export default defineConfig({
  base: '/byteflow-contact/',
  homepage: 'http://.github.io/raphaelpierre'
  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
    
  },

});
