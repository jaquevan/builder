const { chromium } = require('playwright');

const viewports = [
  { name: 'Window-Large', width: 1440, height: 900 },
  { name: 'Window-Medium', width: 1280, height: 800 },
  { name: 'MacBook-Air-13', width: 1440, height: 900 },
];

async function verifyFixes() {
  const browser = await chromium.launch({ headless: true });

  const pages = [
    { name: 'landing', url: 'http://localhost:3001/' },
    { name: 'about', url: 'http://localhost:3001/about' }
  ];

  for (const pageInfo of pages) {
    console.log(`\n========== Testing ${pageInfo.name.toUpperCase()} Page ==========`);

    for (const viewport of viewports) {
      console.log(`\n=== ${viewport.name} (${viewport.width}x${viewport.height}) ===`);

      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });

      const page = await context.newPage();
      await page.goto(pageInfo.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);

      // Check specific components we fixed
      const componentInfo = await page.evaluate(() => {
        const results = [];

        // Check TopContainer on landing page
        const topContainer = document.querySelector('[class*="TopContainer"]');
        if (topContainer) {
          const rect = topContainer.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          results.push({
            component: 'TopContainer',
            exceeds: rect.right > viewportWidth ? rect.right - viewportWidth : 0,
            width: rect.width,
            viewportWidth: viewportWidth,
            fitsProperly: rect.right <= viewportWidth
          });
        }

        // Check StatusContainer on landing page
        const statusContainer = document.querySelector('[class*="StatusContainer"]');
        if (statusContainer && window.getComputedStyle(statusContainer).display !== 'none') {
          const rect = statusContainer.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          results.push({
            component: 'StatusContainer',
            exceeds: rect.right > viewportWidth ? rect.right - viewportWidth : 0,
            width: rect.width,
            viewportWidth: viewportWidth,
            fitsProperly: rect.right <= viewportWidth
          });
        }

        // Check HeroSection on about page
        const heroSection = document.querySelector('[class*="HeroSection"]');
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          results.push({
            component: 'HeroSection',
            exceeds: rect.right > viewportWidth ? rect.right - viewportWidth : 0,
            width: rect.width,
            viewportWidth: viewportWidth,
            fitsProperly: rect.right <= viewportWidth
          });
        }

        // Check TerminalSection on about page
        const terminalSection = document.querySelector('[class*="TerminalSection"]');
        if (terminalSection) {
          const rect = terminalSection.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          results.push({
            component: 'TerminalSection',
            exceeds: rect.right > viewportWidth ? rect.right - viewportWidth : 0,
            width: rect.width,
            viewportWidth: viewportWidth,
            fitsProperly: rect.right <= viewportWidth
          });
        }

        return results;
      });

      componentInfo.forEach(info => {
        const status = info.fitsProperly ? '✓ PASS' : '✗ FAIL';
        console.log(`${status} ${info.component}: ${info.fitsProperly ? 'fits within viewport' : `exceeds by ${info.exceeds.toFixed(2)}px`}`);
        if (!info.fitsProperly) {
          console.log(`  Width: ${info.width.toFixed(2)}px, Viewport: ${info.viewportWidth}px`);
        }
      });

      await context.close();
    }
  }

  await browser.close();
  console.log('\n✓ Verification complete!');
}

verifyFixes().catch(console.error);
