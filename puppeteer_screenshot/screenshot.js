const puppeteer = require('puppeteer');

module.exports.screenshot = (link, filename) => {
    const main = async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
        })
        await page.goto(link)
        await page.screenshot({ path: `./puppeteer_screenshot/${filename}.png` })

        await browser.close()
    }

    main();

}