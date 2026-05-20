import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Reporter to use
  reporter: [["line"], ["allure-playwright",
      {
        resultsDir: "allure-results",
        detail: true,
        suiteTitle: true,
}],['html'],],
  retries: 2,
  use: {
    baseURL: 'https://sauce-demo.myshopify.com/',
    video: 'retain-on-failure',
    
    // storageState: 'state.json',
  },
})