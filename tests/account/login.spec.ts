import { test, expect } from '@playwright/test';

test('user can login to account', async ({ page }, testInfo) => {

    await page.goto('/account/login');
})

test('user can sign up for new account', async ({ page }, testInfo) => {
    await page.goto('/account/register');

})