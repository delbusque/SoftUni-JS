// npx playwright codegen http://localhost:3000

const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser;
let page;

describe('Softuni test', function() {
    this.timeout(50000)
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

    it('Should load books page', async() => {
        await page.goto('http://localhost:3000/');
        await page.click('text=Books');

        let anchor = await page.textContent('h5');
        let count = await page.evaluate(() => {
            let booksElement = document.querySelector('.books-div');
            return booksElement.children.length;
        })
        expect(anchor.trim()).to.be.equal('- Books')
    })

    it('Should count books', async() => {
        await page.goto('http://localhost:3000/');
        await page.click('text=Books');

        let count = await page.evaluate(() => {
            let booksElement = document.querySelector('.books-div');
            return booksElement.children.length;
        })
        console.log(count);
        expect(count).to.be.greaterThan(0)
    })
})