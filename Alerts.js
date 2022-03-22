const {firefox} = require('@playwright/test');
( async ()=> {
    const browser = await firefox.launch({ headless: false, slowMo:1000});
    const page = await browser.newPage();
    await page.goto("https://demoqa.com/alerts");
    // handle alerts
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');
 

   
    await browser.close();
    
})()
