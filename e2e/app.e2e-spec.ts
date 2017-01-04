import { CityroastPage } from './app.po';

describe('cityroast App', function() {
  let page: CityroastPage;

  beforeEach(() => {
    page = new CityroastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
