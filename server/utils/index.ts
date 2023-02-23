import { BrowserInstance } from "./browserUtil";
import { Page } from "playwright";
// npx playwright codegen 

export const openPage = async (url: string = "https://etax.sichuan.chinatax.gov.cn:5100/") => {
  console.log('initTask')
  // const browser = await chromium.launch();
  // const browser = await await chromium.launch({
  //   headless: false,
  //   slowMo: 50,
  // });;
  const browser = await BrowserInstance.getInstance();
  const context = await browser.newContext();
  // Create pages, interact with UI elements, assert values
  const page = await context.newPage();
  await page.goto(url);

  // await browser.close();
  return page;
};

export const getDataFromPage = async (page: Page) => {
  const textContent = await page.locator('a').filter({ hasText: '增值税及附加税费申报（一般...' }).textContent();
  console.log(textContent)
  return {
    textContent
  }
};

