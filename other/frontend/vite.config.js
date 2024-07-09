import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Adjust the port number if needed
    open: true, // Whether to open the browser when Vite starts
  },
  build: {
    outDir: 'dist', // Specify the output directory for production builds
    assetsDir: 'assets', // Specify the assets directory for bundled assets
    sourcemap: true, // Enable source maps for better debugging
  },
  optimizeDeps: {
    include: ['axios'], // Specify dependencies for Vite to optimize
  },
});
