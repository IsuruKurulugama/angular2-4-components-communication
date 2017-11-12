import { CommunicateBetweenComponentsPage } from './app.po';

describe('communicate-between-components App', () => {
  let page: CommunicateBetweenComponentsPage;

  beforeEach(() => {
    page = new CommunicateBetweenComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
