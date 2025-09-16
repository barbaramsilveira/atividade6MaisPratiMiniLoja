import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'; // ← Import correto para v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← Adicione como plugin do Vite
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tailwind': path.resolve(__dirname, './03-tailwind/src'),
    },
  },
});