import { chromium, test, expect } from '@playwright/test'
import { writeFileSync } from 'node:fs'
import lighthouse from 'lighthouse'
import { runPerformanceAuditInDesktop } from "../../common/utils/page.ts";
import { desktopConfig } from "../../common/helpers/page.ts";

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
      output: ['html', 'json'],
      logLevel: 'error',
    })
    // Save HTML report
    const [htmlReport, jsonReport] = result.report;

    writeFileSync('lighthouse-report.html', htmlReport);
    writeFileSync('lighthouse-report.json', jsonReport);
    const perfScore = result.lhr.categories.performance.score * 100

    await browser.close()

    // Assert minimum performance score
    expect(perfScore).toBeGreaterThanOrEqual(80)
  })
})

// test(
//     `Validate All Webpages' performance `,
//     { tag: ["@perfWeb"] },
//     async ({ page }) => {
        
//       await runPerformanceAuditInDesktop(
//         page,
//         `${test.info().title}-performance`,
//         desktopConfig,
//         `performance-reports`,
//       );
//     },
//   );