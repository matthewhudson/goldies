import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    // Tests such as isUrl's expect the page to be http://localhost
    environmentOptions: { jsdom: { url: 'http://localhost' } },
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['node_modules/', 'dist/', 'src/**/*.d.ts'],
    },
  },
});
