import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'dev'),

  build: {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ApexGanttChart',
      fileName: 'index.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^lit/, /^apex/],
    },
  },
});
