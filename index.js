const { pdf } = require("./puppeteer_pdf/pdf");
const { screenshot } = require("./puppeteer_screenshot/screenshot");
const { signin } = require("./puppeteer_signin/signin");

// screenshot('https://fb.com', 'facebook-shot');
// pdf('https://fb.com', 'downloaded_file', 'A3');
signin()