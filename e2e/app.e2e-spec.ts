import { BrandGuidelinesPage } from './app.po';

describe('brand-guidelines App', () => {
  let page: BrandGuidelinesPage;

  beforeEach(() => {
    page = new BrandGuidelinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bb works!');
  });
});
