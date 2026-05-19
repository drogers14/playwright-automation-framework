import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Reporter to use
  reporter: 'html',
  use: {
    baseURL: 'https://sauce-demo.myshopify.com/',
    video: 'retain-on-failure',
    // storageState: 'state.json',
  },
})