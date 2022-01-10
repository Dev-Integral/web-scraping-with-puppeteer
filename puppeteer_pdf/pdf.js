const puppeteer = require('puppeteer')

module.exports.pdf=()=>{

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle2' })
  await page.pdf({ path: 'hn.pdf', format: 'A4' })

  await browser.close()
}

main()
}