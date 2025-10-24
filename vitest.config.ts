import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      viewport: { height: 1000, width: 1000 },
      instances: [
        {
          browser: 'chromium',
          // https://vitest.dev/guide/browser/playwright.html#configuring-playwright
        },
      ],
    },
    globals: true,
  },
});
