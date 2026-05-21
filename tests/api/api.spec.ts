import { test, expect } from '@playwright/test';

test('inventory API returns products', async ({ request }) => {
  const response = await request.get(
    '/collections/all'
  );

  expect(response.status()).toBe(200);
});

/* failing test on purpose */
// test('False URL ', async ({ request }) => {
//     const response = await request.get(
//       '/collections/frontpag'
//     );
  
//     expect(response.status()).toBe(200);
//   });
/* intercept requests */