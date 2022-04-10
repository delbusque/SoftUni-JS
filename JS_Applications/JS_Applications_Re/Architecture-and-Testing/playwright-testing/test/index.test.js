const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser;
let page;

describe('Softuni test', function() {
    this.timeout(100000)

    before(async() => {
        browser = await chromium.launch()
    })
    after(async() => {
        await browser.close();
    })

    beforeEach(async() => {
        page = await browser.newPage()
    })
    this.afterEach(async() => {
        await page.close()
    })

    it('Should load trainers page', async() => {

        await page.goto('https://softuni.bg')
        await page.click('text=Преподаватели')

        let heading = await page.textContent('.trainers-page-content-header-info-title')

        expect(heading.trim()).to.be.equal('Преподаватели')
    })
})