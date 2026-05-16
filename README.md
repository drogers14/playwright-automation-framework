<!-- # playwright-automation-framework
a Demo Playwright Automation Framework to support SauceDemo testing -->

# Playwright Automation Framework

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

## Framework Architecture
### pages/
Contains reusable Page Object Models responsible for encapsulating selectors, page actions, and validation logic across application workflows.

Examples include:

- Login Page
- Product List Page
- Product Details Page
- Cart Page
- Checkout Flow
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

## Future Improvements
- AI-assisted test generation
- visual regression
- synthetic monitoring

