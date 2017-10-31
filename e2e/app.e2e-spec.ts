import { OnlineTradePage } from './app.po';

describe('online-trade App', () => {
  let page: OnlineTradePage;

  beforeEach(() => {
    page = new OnlineTradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
