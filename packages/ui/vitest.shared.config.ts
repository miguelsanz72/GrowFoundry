import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@growfoundry/ui': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
    },
  },
});
