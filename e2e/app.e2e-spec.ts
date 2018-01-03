import { PANPage } from './app.po';

describe('pan App', () => {
  let page: PANPage;

  beforeEach(() => {
    page = new PANPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
