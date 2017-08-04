import { AngularYoutubePocPage } from './app.po';

describe('angular-youtube-poc App', () => {
  let page: AngularYoutubePocPage;

  beforeEach(() => {
    page = new AngularYoutubePocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
