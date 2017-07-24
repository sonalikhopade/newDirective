import { GridImagePage } from './app.po';

describe('grid-image App', () => {
  let page: GridImagePage;

  beforeEach(() => {
    page = new GridImagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
