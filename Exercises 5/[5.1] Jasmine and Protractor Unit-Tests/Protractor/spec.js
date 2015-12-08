var baseUrl = 'http://localhost/AWP/Exercises%205/%5b5.1%5d%20Jasmine%20and%20Protractor%20Unit-Tests/Protractor/app/';

describe('Row Manager App', function() {
	browser.ignoreSynchronization = true; // Don't wait for angular to do it's thing..
    it('should have a title', function() {
        browser.get(baseUrl+'index.html');

        expect(browser.getTitle()).toEqual('jQuery Row Manager');
    });
});