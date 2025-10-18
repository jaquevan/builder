const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12/13', width: 390, height: 844 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
  { name: 'Samsung Galaxy S20', width: 360, height: 800 }
];

async function testMobileResponsiveness() {
  const browser = await chromium.launch({ headless: true });
  const screenshotDir = path.join(__dirname, 'mobile-screenshots');

  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  for (const viewport of viewports) {
    console.log(`\n=== Testing ${viewport.name} (${viewport.width}x${viewport.height}) ===`);

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 2
    });

    const page = await context.newPage();

    // Navigate to the page
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Wait for animations

    // Light mode screenshot
    const lightModePath = path.join(screenshotDir, `${viewport.name.replace(/\//g, '-')}-light.png`);
    await page.screenshot({
      path: lightModePath,
      fullPage: true
    });
    console.log(`Saved light mode screenshot: ${lightModePath}`);

    // Check for horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    console.log(`Horizontal scroll: ${hasHorizontalScroll ? 'YES ⚠️' : 'NO ✓'}`);

    // Check viewport dimensions
    const dimensions = await page.evaluate(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: document.documentElement.clientHeight
      };
    });
    console.log(`Dimensions:`, dimensions);

    // Check for train element
    const trainInfo = await page.evaluate(() => {
      const train = document.querySelector('[class*="train"]') ||
                    document.querySelector('img[alt*="train" i]') ||
                    document.querySelector('[src*="train"]');
      if (train) {
        const rect = train.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(train);
        return {
          found: true,
          position: {
            top: rect.top,
            left: rect.left,
            bottom: rect.bottom,
            right: rect.right,
            width: rect.width,
            height: rect.height
          },
          styles: {
            position: computedStyle.position,
            bottom: computedStyle.bottom,
            left: computedStyle.left,
            transform: computedStyle.transform
          }
        };
      }
      return { found: false };
    });
    console.log(`Train info:`, JSON.stringify(trainInfo, null, 2));

    // Check GitHub component centering
    const githubInfo = await page.evaluate(() => {
      const github = document.querySelector('[class*="github" i]') ||
                     document.querySelector('[class*="GithubStatus"]');
      if (github) {
        const rect = github.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(github);
        const viewportWidth = window.innerWidth;
        const elementCenter = rect.left + rect.width / 2;
        const viewportCenter = viewportWidth / 2;
        const offset = Math.abs(elementCenter - viewportCenter);

        return {
          found: true,
          centered: offset < 10,
          offset: offset,
          position: {
            left: rect.left,
            width: rect.width,
            centerX: elementCenter
          },
          viewportWidth: viewportWidth,
          styles: {
            textAlign: computedStyle.textAlign,
            display: computedStyle.display,
            justifyContent: computedStyle.justifyContent
          }
        };
      }
      return { found: false };
    });
    console.log(`GitHub component:`, JSON.stringify(githubInfo, null, 2));

    // Check for city image and gaps
    const cityInfo = await page.evaluate(() => {
      const city = document.querySelector('[src*="city"]') ||
                   document.querySelector('img[alt*="city" i]');
      if (city) {
        const rect = city.getBoundingClientRect();
        const parent = city.parentElement;
        const parentRect = parent.getBoundingClientRect();

        // Check for gap below
        const nextSibling = parent.nextElementSibling;
        let gapBelow = 0;
        if (nextSibling) {
          const nextRect = nextSibling.getBoundingClientRect();
          gapBelow = nextRect.top - parentRect.bottom;
        }

        return {
          found: true,
          position: {
            bottom: rect.bottom,
            height: rect.height
          },
          gapBelow: gapBelow,
          parentBottom: parentRect.bottom
        };
      }
      return { found: false };
    });
    console.log(`City image:`, JSON.stringify(cityInfo, null, 2));

    // Toggle to dark mode if possible
    const darkModeToggle = await page.locator('button[aria-label*="theme" i], button[class*="theme" i]').first();
    const darkModeExists = await darkModeToggle.count() > 0;

    if (darkModeExists) {
      await darkModeToggle.click();
      await page.waitForTimeout(500);

      const darkModePath = path.join(screenshotDir, `${viewport.name.replace(/\//g, '-')}-dark.png`);
      await page.screenshot({
        path: darkModePath,
        fullPage: true
      });
      console.log(`Saved dark mode screenshot: ${darkModePath}`);
    } else {
      console.log('Dark mode toggle not found');
    }

    await context.close();
  }

  await browser.close();
  console.log('\n✓ Mobile responsiveness testing complete!');
}

testMobileResponsiveness().catch(console.error);
