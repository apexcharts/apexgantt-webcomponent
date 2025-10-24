import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'dev'),

  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ApexGanttChart',
      fileName: (format, name) => `${name}.${format}.min.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^lit/, /^apex/],
    },
  },
});
