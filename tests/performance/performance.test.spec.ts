import { chromium, test, expect } from '@playwright/test'
import lighthouse from 'lighthouse'

const PORT = 9222

test.describe('Lighthouse Audits', () => {
  test('homepage meets performance threshold', async () => {
    const browser = await chromium.launch({
      args: [`--remote-debugging-port=${PORT}`],
    })

    const page = await browser.newPage()
    await page.goto('https://sauce-demo.myshopify.com/', { waitUntil: 'networkidle' })

    const result = await lighthouse('https://sauce-demo.myshopify.com/', {
      port: PORT,
      logLevel: 'error',
    })

    const perfScore = result.lhr.categories.performance.score * 100

    await browser.close()

    // Assert minimum performance score
    expect(perfScore).toBeGreaterThanOrEqual(80)
  })
})