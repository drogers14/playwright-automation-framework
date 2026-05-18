import { test, expect } from '@playwright/test';
import { CartPage } from '../../pages/checkout/cart.page.ts';

// const cartPage = new CartPage(page);
test('add item to cart', async ({ page }, testInfo) =>{
    await page.goto('https://sauce-demo.myshopify.com/')
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Sauce Demo/);
    const product = page.locator('#product-1');
    await product.click();
    // Expects page to have a heading with the name of Grey jacket.
    await expect(page.getByRole('heading', { name: 'Grey jacket' })).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });



});