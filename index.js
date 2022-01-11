const { pdf } = require("./puppeteer_pdf/pdf");
const { screenshot } = require("./puppeteer_screenshot/screenshot");

// screenshot('https://fb.com', 'facebook-shot');
pdf('https://fb.com', 'downloaded_file', 'A3');