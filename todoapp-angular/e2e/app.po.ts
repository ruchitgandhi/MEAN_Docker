import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
    
    getTitleElement() {
    return element(by.id('title'));
  }
    
    getDescElement() {
    return element(by.id('description'));
  }
    
    getAddButton() {
    return element(by.buttonText('Add'));
  }
    
    getFirstTodo(){
        return element.all(by.css('.todo')).first();
    }
}
