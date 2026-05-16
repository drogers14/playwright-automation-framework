import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/')
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Sauce Demo/);
});

test('get catalog link', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/');
  
    // Click the catalog link.
    await page.getByRole('link', { name: 'Catalog' }).click();
  
    // Expects page to have a heading with the name of Catalog.
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  });