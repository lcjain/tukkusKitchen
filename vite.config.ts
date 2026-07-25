<<<<<<< HEAD
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
=======
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
>>>>>>> 5b94780936c6c309ad377226c1f4ead7cecae470
