import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '',
  plugins: [tsconfigPaths(), react()],
  publicDir: './public',
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setup-tests.ts',
  },
});
