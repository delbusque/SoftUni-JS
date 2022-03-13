const { chromium } = require('playwright-chromium');

(async() => {
    let browser = await chromium.launch({ headless: false, slowMo: 300 })
    let page = await browser.newPage()

    await page.goto('https://sportinglife.com/football')
    await page.screenshot({ path: 'life-screenshot.png' })
    await page.click('text=vidiprinter')

    //await browser.close()
})();