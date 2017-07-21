import { SuperSetPage } from './app.po';

describe('super-set App', () => {
  let page: SuperSetPage;

  beforeEach(() => {
    page = new SuperSetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
