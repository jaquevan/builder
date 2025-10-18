const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const devices = {
    mobile: [
        { name: 'iPhone-SE', width: 375, height: 667 },
        { name: 'iPhone-12', width: 390, height: 844 },
        { name: 'Samsung-S20', width: 360, height: 800 },
        { name: 'iPhone-Mini', width: 320, height: 568 },
    ],
    tablet: [
        { name: 'iPad-Mini', width: 768, height: 1024 },
        { name: 'iPad-Air', width: 820, height: 1180 },
        { name: 'Surface-Pro', width: 912, height: 1368 },
    ],
    desktop: [
        { name: 'Desktop-1080p', width: 1920, height: 1080 },
        { name: 'Desktop-1440p', width: 2560, height: 1440 },
        { name: 'Desktop-Small', width: 1366, height: 768 },
        { name: 'Desktop-Medium', width: 1536, height: 864 },
        { name: 'MacBook-Pro-14', width: 1512, height: 982 },
    ]
};

async function testTrainVisibility() {
    const browser = await chromium.launch({ headless: true });
    const screenshotDir = path.join(__dirname, '../train-screenshots');

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
    }

    for (const [category, viewports] of Object.entries(devices)) {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`TESTING ${category.toUpperCase()} DEVICES`);
        console.log('='.repeat(60));

        for (const viewport of viewports) {
            console.log(`\n--- ${viewport.name} (${viewport.width}x${viewport.height}) ---`);

            const context = await browser.newContext({
                viewport: { width: viewport.width, height: viewport.height },
            });

            const page = await context.newPage();
            await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
            await page.waitForTimeout(2000);

            // Get detailed info about train and city
            const analysis = await page.evaluate(() => {
                const trackContainer = document.querySelector('[aria-label*="train"]');
                const trainContainer = trackContainer?.querySelector('[class*="TrainContainer"]');
                const cityWrapper = document.querySelector('[class*="CityWrapper"]');

                const result = {
                    viewport: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        scrollHeight: document.documentElement.scrollHeight,
                    },
                    trackContainer: null,
                    trainContainer: null,
                    cityWrapper: null,
                    trainImages: [],
                };

                if (trackContainer) {
                    const rect = trackContainer.getBoundingClientRect();
                    const styles = window.getComputedStyle(trackContainer);
                    result.trackContainer = {
                        rect: {
                            top: rect.top,
                            bottom: rect.bottom,
                            height: rect.height,
                            width: rect.width,
                        },
                        computedHeight: styles.height,
                        backgroundImage: styles.backgroundImage !== 'none',
                        isVisible: rect.top < window.innerHeight && rect.bottom > 0,
                        visiblePercentage: Math.max(0, Math.min(100,
                            ((Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)) / rect.height) * 100
                        )),
                    };
                }

                if (trainContainer) {
                    const rect = trainContainer.getBoundingClientRect();
                    result.trainContainer = {
                        rect: {
                            top: rect.top,
                            bottom: rect.bottom,
                            height: rect.height,
                        },
                        isVisible: rect.top < window.innerHeight && rect.bottom > 0,
                    };
                }

                if (cityWrapper) {
                    const rect = cityWrapper.getBoundingClientRect();
                    result.cityWrapper = {
                        rect: {
                            top: rect.top,
                            bottom: rect.bottom,
                            height: rect.height,
                        },
                        isVisible: rect.top < window.innerHeight && rect.bottom > 0,
                    };
                }

                // Get all train images
                const trainImgs = trackContainer?.querySelectorAll('img[alt*="Train"]');
                if (trainImgs) {
                    trainImgs.forEach((img, idx) => {
                        const rect = img.getBoundingClientRect();
                        result.trainImages.push({
                            index: idx,
                            width: rect.width,
                            height: rect.height,
                            visible: rect.top < window.innerHeight && rect.bottom > 0,
                        });
                    });
                }

                return result;
            });

            // Print analysis
            console.log('\nViewport Analysis:');
            console.log(`  Size: ${analysis.viewport.width}x${analysis.viewport.height}`);
            console.log(`  Scroll Height: ${analysis.viewport.scrollHeight}px`);

            if (analysis.trackContainer) {
                console.log('\nTrack Container (City):');
                console.log(`  Height: ${analysis.trackContainer.rect.height.toFixed(2)}px`);
                console.log(`  Position: ${analysis.trackContainer.rect.top.toFixed(2)}px to ${analysis.trackContainer.rect.bottom.toFixed(2)}px`);
                console.log(`  Visible: ${analysis.trackContainer.isVisible ? 'YES ✓' : 'NO ✗'}`);
                console.log(`  Visible %: ${analysis.trackContainer.visiblePercentage.toFixed(1)}%`);
                console.log(`  Has Background: ${analysis.trackContainer.backgroundImage ? 'YES' : 'NO'}`);
            }

            if (analysis.trainContainer) {
                console.log('\nTrain Container:');
                console.log(`  Height: ${analysis.trainContainer.rect.height.toFixed(2)}px`);
                console.log(`  Position: ${analysis.trainContainer.rect.top.toFixed(2)}px to ${analysis.trainContainer.rect.bottom.toFixed(2)}px`);
                console.log(`  Visible: ${analysis.trainContainer.isVisible ? 'YES ✓' : 'NO ✗'}`);
            }

            if (analysis.trainImages.length > 0) {
                console.log('\nTrain Cars:');
                analysis.trainImages.forEach(train => {
                    console.log(`  Car ${train.index + 1}: ${train.width.toFixed(0)}x${train.height.toFixed(0)}px - ${train.visible ? 'VISIBLE ✓' : 'HIDDEN ✗'}`);
                });
            } else {
                console.log('\n⚠️  NO TRAIN IMAGES FOUND');
            }

            // Check for issues
            const issues = [];
            if (analysis.trackContainer && !analysis.trackContainer.isVisible) {
                issues.push('Track container not visible in viewport');
            }
            if (analysis.trackContainer && analysis.trackContainer.visiblePercentage < 50) {
                issues.push(`Only ${analysis.trackContainer.visiblePercentage.toFixed(1)}% of city visible`);
            }
            if (analysis.trainContainer && !analysis.trainContainer.isVisible) {
                issues.push('Train not visible in viewport');
            }
            if (analysis.trainImages.some(t => !t.visible)) {
                issues.push('Some train cars not visible');
            }
            if (analysis.trainImages.length === 0) {
                issues.push('No train images found');
            }

            if (issues.length > 0) {
                console.log('\n⚠️  ISSUES DETECTED:');
                issues.forEach(issue => console.log(`    - ${issue}`));
            } else {
                console.log('\n✅ All elements visible and positioned correctly');
            }

            // Take screenshot
            const screenshotPath = path.join(screenshotDir, `${category}-${viewport.name}.png`);
            await page.screenshot({
                path: screenshotPath,
                fullPage: true,
            });
            console.log(`📸 Screenshot: ${screenshotPath}`);

            await context.close();
        }
    }

    await browser.close();
    console.log('\n' + '='.repeat(60));
    console.log('✓ Train visibility testing complete!');
    console.log('='.repeat(60));
}

testTrainVisibility().catch(console.error);
