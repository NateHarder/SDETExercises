const { browser } = require("protractor");

describe('Protractor Exercise', function() {
    it('should fail to log in.', function() {
      browser.waitForAngularEnabled(false);
      browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html');
      element.all((by.css('.boxed_style li h2'))).get(1).click();
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
        browser.sleep(3000);
        element(by.id("username")).sendKeys("angular");
        element(by.id("password")).sendKeys("password1");            
        element(by.id("formly_1_input_username_0")).sendKeys("angular");
        element(by.css('.btn')).click();
        browser.sleep(5000);
        expect(element(by.css('.alert-danger')).getText()).toEqual("Username or password is incorrect");
      });
    })
})