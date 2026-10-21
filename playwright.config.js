import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4173/portfolio/',
    reuseExistingServer: !process.env.CI,
  },
  use: { baseURL: 'http://localhost:4173/portfolio/' },
});
