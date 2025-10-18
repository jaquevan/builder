const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  // Fullscreen desktop sizes
  { name: 'Fullscreen-1080p', width: 1920, height: 1080 },
  { name: 'Fullscreen-1440p', width: 2560, height: 1440 },
  { name: 'Fullscreen-4K', width: 3840, height: 2160 },

  // Standard window sizes
  { name: 'Window-Large', width: 1440, height: 900 },
  { name: 'Window-Medium', width: 1280, height: 800 },
  { name: 'Window-Small', width: 1024, height: 768 },

  // Half-window sizes
  { name: 'Half-Window-1920', width: 960, height: 1080 },
  { name: 'Half-Window-1440', width: 720, height: 900 },

  // Common Mac sizes
  { name: 'MacBook-Air-13', width: 1440, height: 900 },
  { name: 'MacBook-Pro-14', width: 1512, height: 982 },
  { name: 'MacBook-Pro-16', width: 1728, height: 1117 },
  { name: 'iMac-24', width: 1920, height: 1080 },

  // Common Windows sizes
  { name: 'Windows-1366x768', width: 1366, height: 768 },
  { name: 'Windows-1920x1080', width: 1920, height: 1080 },
  { name: 'Windows-2560x1440', width: 2560, height: 1440 }
];

async function testDesktopResponsiveness() {
  const browser = await chromium.launch({ headless: true });
  const screenshotDir = path.join(__dirname, 'desktop-screenshots');

  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  // Test both landing page and about page
  const pages = [
    { name: 'landing', url: 'http://localhost:3001/' },
    { name: 'about', url: 'http://localhost:3001/about' }
  ];

  for (const pageInfo of pages) {
    console.log(`\n========== Testing ${pageInfo.name.toUpperCase()} Page ==========`);

    for (const viewport of viewports) {
      console.log(`\n=== Testing ${viewport.name} (${viewport.width}x${viewport.height}) ===`);

      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1
      });

      const page = await context.newPage();

      // Navigate to the page
      await page.goto(pageInfo.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000); // Wait for animations

      // Light mode screenshot
      const lightModePath = path.join(
        screenshotDir,
        `${pageInfo.name}-${viewport.name}-light.png`
      );
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

      // Check for layout issues
      const layoutInfo = await page.evaluate(() => {
        const issues = [];

        // Check for elements exceeding viewport width
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > window.innerWidth) {
            const tagName = el.tagName.toLowerCase();
            const className = el.className ? `.${el.className.split(' ')[0]}` : '';
            issues.push({
              element: `${tagName}${className}`,
              exceeds: rect.right - window.innerWidth
            });
          }
        });

        return {
          viewportWidth: window.innerWidth,
          issuesCount: issues.length,
          topIssues: issues.slice(0, 5)
        };
      });
      console.log(`Layout info:`, JSON.stringify(layoutInfo, null, 2));

      // Toggle to dark mode if possible
      const darkModeToggle = await page.locator('button[aria-label*="theme" i], button[class*="theme" i]').first();
      const darkModeExists = await darkModeToggle.count() > 0;

      if (darkModeExists) {
        await darkModeToggle.click();
        await page.waitForTimeout(500);

        const darkModePath = path.join(
          screenshotDir,
          `${pageInfo.name}-${viewport.name}-dark.png`
        );
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
  }

  await browser.close();
  console.log('\n✓ Desktop responsiveness testing complete!');
}

testDesktopResponsiveness().catch(console.error);
