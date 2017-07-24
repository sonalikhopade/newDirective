import { AbPage } from './app.po';

describe('ab App', () => {
  let page: AbPage;

  beforeEach(() => {
    page = new AbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
