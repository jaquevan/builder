const { chromium } = require('playwright');

async function debugCity() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
  });

  const page = await context.newPage();
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Check what's happening with the city wrapper and track container
  const debugInfo = await page.evaluate(() => {
    const cityWrapper = document.querySelector('[class*="CityWrapper"]');
    const trackContainer = document.querySelector('[class*="TrackContainer"]');
    const trainContainer = document.querySelector('[class*="TrainContainer"]');

    const results = {
      bodyHeight: document.body.scrollHeight,
      viewportHeight: window.innerHeight,
      cityWrapper: null,
      trackContainer: null,
      trainContainer: null
    };

    if (cityWrapper) {
      const rect = cityWrapper.getBoundingClientRect();
      const styles = window.getComputedStyle(cityWrapper);
      results.cityWrapper = {
        rect: {
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height,
          width: rect.width
        },
        styles: {
          display: styles.display,
          marginTop: styles.marginTop,
          height: styles.height,
          maxHeight: styles.maxHeight,
          visibility: styles.visibility,
          overflow: styles.overflow
        },
        html: cityWrapper.outerHTML.substring(0, 200)
      };
    }

    if (trackContainer) {
      const rect = trackContainer.getBoundingClientRect();
      const styles = window.getComputedStyle(trackContainer);
      results.trackContainer = {
        rect: {
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height,
          width: rect.width
        },
        styles: {
          display: styles.display,
          height: styles.height,
          backgroundImage: styles.backgroundImage ? 'SET' : 'NOT SET',
          backgroundSize: styles.backgroundSize,
          visibility: styles.visibility,
          marginTop: styles.marginTop,
          marginBottom: styles.marginBottom
        }
      };
    }

    if (trainContainer) {
      const rect = trainContainer.getBoundingClientRect();
      results.trainContainer = {
        rect: {
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height
        },
        childCount: trainContainer.children.length
      };
    }

    return results;
  });

  console.log('Debug Info:', JSON.stringify(debugInfo, null, 2));

  // Take a screenshot
  await page.screenshot({
    path: 'debug-mobile.png',
    fullPage: true
  });

  console.log('\nScreenshot saved as debug-mobile.png');
  console.log('Browser window will stay open for 10 seconds for inspection...');
  await page.waitForTimeout(10000);

  await browser.close();
}

debugCity().catch(console.error);
