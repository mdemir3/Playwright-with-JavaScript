const {firefox} = require('@playwright/test');
( async ()=> {
    const browser = await firefox.launch({ headless: false, slowMo:1000});
    const page = await browser.newPage();
    await page.goto("https://demoqa.com/frames");
    //logic to handle frames
    const frame1 = await page.frame({url: /\/sample/});
    const head = await frame1.$('h1');
    console.log(await head.innerText());
   
    await browser.close();
    
})()
