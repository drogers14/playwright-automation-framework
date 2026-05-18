import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginHeader: Locator;
    emailAddressField: Locator;
    passwordField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginHeader = page.locator('h1', {hasText: 'Customer Login'});
        this.emailAddressField = page.getByLabel('Email Address');
        this.passwordField = page.getByLabel('Password');
    }
  
}