const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'Window-Large-1440x900', width: 1440, height: 900 },
  { name: 'Window-Medium-1280x800', width: 1280, height: 800 },
  { name: 'Fullscreen-1920x1080', width: 1920, height: 1080 },
  { name: 'Half-Window-960x1080', width: 960, height: 1080 },
];

async function takeFinalScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const screenshotDir = path.join(__dirname, 'final-screenshots');

  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  // Only landing page
  const url = 'http://localhost:3001/';

  for (const viewport of viewports) {
    console.log(`Taking screenshot: ${viewport.name}`);

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });

    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const screenshotPath = path.join(screenshotDir, `landing-${viewport.name}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    await context.close();
  }

  await browser.close();
  console.log('\n✓ Screenshots saved to final-screenshots/');
}

takeFinalScreenshots().catch(console.error);
