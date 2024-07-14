import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '',
  plugins: [tsconfigPaths(), react()],
  publicDir: './public',
  test: {
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/dist/**', './src/tests/**'],
    setupFiles: './src/tests/setup-tests.ts',
  },
});
