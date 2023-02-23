import { chromium, Browser } from "playwright";

export class BrowserInstance {
  private static instance: Browser;
  private constructor() { }

  public static async getInstance() {
    if (!BrowserInstance.instance) {
      console.log('============getInstance============');
      BrowserInstance.instance = await chromium.launch({
        headless: false,
        slowMo: 50,
      });
    }

    return BrowserInstance.instance;
  }
}
