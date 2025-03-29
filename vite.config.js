import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from other devices in the network
    port: 3000, // You can change the port if needed
    open: true, // Automatically open browser when running the dev server
  },
});
