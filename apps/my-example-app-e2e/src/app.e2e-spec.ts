import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be able to run tests', () => {
    page.navigateTo();
    expect(true).toBe(true);
  });
});
