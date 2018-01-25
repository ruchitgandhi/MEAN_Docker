import { AppPage } from './app.po';

describe('todoapp-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
    
    it('should add new todo', () => {
        page.navigateTo();
        var titleElement = page.getTitleElement();
        var descElement = page.getDescElement();
        var addButton = page.getAddButton();

        titleElement.sendKeys('Test Title');
        descElement.sendKeys('Test Description');
        addButton.click();
        page.navigateTo();
        const row = page.getFirstTodo().getText();
          expect(row).toContain("Test Title");
          expect(row).toContain("Test Description");
      });
});
