const puppeteer = require('puppeteer')

module.exports.pdf = (link, filename, format) => {

  const main = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(link, { waitUntil: 'networkidle2' })
    await page.pdf({ path: `./puppeteer_pdf/${filename}.pdf`, format: format })

    await browser.close()
  }

  main()
}