import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // or standard tailwind setup
import path from 'path';

export default defineConfig({
  // Use '/' if deploying to username.github.io directly,
  // OR '/repo-name/' if deploying to username.github.io/repo-name
  base: '/', 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});