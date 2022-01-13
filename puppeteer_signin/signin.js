const puppeteer = require('puppeteer')


const SECRET_EMAIL = 'example@gmail.com'
const SECRET_PASSWORD = 'secretpass123'
module.exports.signin = () => {
  const main = async () => {
    const browser = await puppeteer.launch({
      headless: true,
    })
    const page = await browser.newPage()
    await page.goto('https://my.cowrywise.com/login-eoy', { waitUntil: 'networkidle2' })
    await page.waitForSelector('form');
    await page.type('input#email', 'macbrill13@gmail.com');
    await page.waitForSelector('input[name=password]'); 
    await page.click('input[name=password]'); 
    'oluwaseun2@'.split('').forEach(async el => {await page.keyboard.press(el)});
    // await page.type('input', 'oluwaseun2@');
    // await page.$eval('input[name=password]', el => el.value = 'oluwaseun2@');
    // await page.type('input[name=search]', 'Adenosine triphosphate');
    // await page.$eval('input[type=password]', el => el.value = 'oluwaseun2@');
    // await page.click('button#u_0_d_Sb')
    await page.keyboard.press('Enter');
    await page.waitFor(8000);
    await page.evaluate(() => {
      location.reload(true)
   })
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    await page.waitFor(8000);
    await page.waitForSelector('.sweet-modal .sweet-box-actions .sweet-action-close');
    console.log('page', page);
    await page.screenshot({ fullPage: true, path: `./puppeteer_screenshot/new_file.png` });
    await browser.close()
  }

  main()
}
