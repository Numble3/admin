import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: 'src', replacement: resolve(__dirname, 'src') }],
  },
  // server: {
  //   host: '0.0.0.0',
  // },
});
