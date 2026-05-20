<!-- # playwright-automation-framework
a Demo Playwright Automation Framework to support SauceDemo testing -->

# Playwright Automation Framework [![Playwright Tests](https://github.com/drogers14/playwright-automation-framework/actions/workflows/playwright.yaml/badge.svg)](https://github.com/drogers14/playwright-automation-framework/actions/workflows/playwright.yaml)

## Overview
Modern Playwright + TypeScript automation framework designed for scalable E2E and API testing ( SauceDemo ).

## Features
- Page Object Model (POM)
- API validation
- Cross-browser support
- Retry handling
- Parallel execution
- GitHub Actions CI integration
- Trace viewer support
- Screenshot/video capture on failure

### 🚧🔧 Coming soon 🔧🚧
- Appium integration
- Auto Bug Reporting (400 errors, multi-failure)

## Framework Architecture
### pages/
Contains reusable Page Object Models responsible for encapsulating selectors, page actions, and validation logic across application workflows.
Organized by area of interst (Account: login, signup, Checkout: cart, shipping, payment) 
<!-- Pages are organized by functional domain (e.g. Account, Checkout, Orders) to improve maintainability, readability, and test scalability. -->
Examples include:

- Login Page
- Product List Page
- Product Details Page
- Cart Page
- Checkout Flow

**note:**
If a UI element's selector changes, you only update it in one place (the page object) instead of across multiple test files.

### fixtures/
Reusable test setup and shared context for pages, environments, authenticated states, browsers, and test configuration. Provides context for pages and tests (browser, url, device) 
### tests/
Contains test suites organized by feature coverage and user flows.
### config/
Contains Playwright configuration, environment settings, browser configuration, and reusable test settings (timeouts, etc...).

## Running Tests
**Install dependencies:**

npm install

**Run all tests:**

npx playwright test

**Run tests in headed mode:**

npx playwright test --headed

## CI/CD
The framework is designed for CI/CD integration using:

- GitHub Actions
- Jenkins
- Argo CD deployment validation workflows

Automated test execution includes regression validation, reporting, screenshots, traces, and failure artifacts.

## Flaky Test Mitigation Strategies

## Future Improvements
- AI-assisted test generation
- visual regression
- synthetic monitoring
- UI for universal test run

