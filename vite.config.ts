import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = `${fileURLToPath(new URL('./src/', import.meta.url)).replace(/\\/g, '/')}`;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@\/(.*)$/,
        replacement: `${srcPath}$1`,
      },
    ],
  },
});
