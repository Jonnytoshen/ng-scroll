import { NgScrollPage } from './app.po';

describe('ng-scroll App', () => {
  let page: NgScrollPage;

  beforeEach(() => {
    page = new NgScrollPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
