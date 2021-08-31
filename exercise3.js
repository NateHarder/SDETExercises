const { browser, element } = require("protractor");
const { get } = require("selenium-webdriver/http");

function findAdmin(){
  return element.all(by.repeater('dataRow in displayedCollection')).filter(function(row){
    return row.all(by.tagName('td')).get(2).getText().then(function(name){
      return name === 'admin'; 
    });
  }).get(0);
};


describe('Protractor Exercise', function() {
    it('should delete admin user', function() {
      browser.waitForAngularEnabled(false);
      browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html');
      element.all((by.css('.boxed_style li h2'))).get(6).click();
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(3000);
        findAdmin().element(by.css('.icon-remove')).click();
        element(by.css('.modal-footer .btn + .btn')).click();
        expect(findAdmin().isPresent()).toBe(false);
      });
    })
})