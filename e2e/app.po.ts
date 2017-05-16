import { browser, by, element } from 'protractor';

export class BrandGuidelinesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bb-root h1')).getText();
  }
}
