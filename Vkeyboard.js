const {firefox} = require('@playwright/test');
( async ()=> {
    const browser = await firefox.launch({ headless: false, slowMo:1000});
    const page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/key_presses");
    //logic to handle frames
    
    await page.click('input');
    await page.keyboard.type('one does not simply');
    await page.keyboard.down('Shift');
    for(let i=0; i<'simply'.length;i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace');
    await browser.close();
    
})()
