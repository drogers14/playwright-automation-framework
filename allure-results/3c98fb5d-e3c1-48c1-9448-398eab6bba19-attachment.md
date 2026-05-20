# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/api.spec.ts >> inventory API returns products
- Location: tests/api/api.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('inventory API returns products', async ({ request }) => {
  4 |   const response = await request.get(
  5 |     'https://www.saucedemo.com/inventory.html'
  6 |   );
  7 | 
> 8 |   expect(response.status()).toBe(200);
    |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  9 | });
```