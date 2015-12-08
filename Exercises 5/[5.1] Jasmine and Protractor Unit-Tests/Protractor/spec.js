describe('Row Manager App', function() {
	browser.ignoreSynchronization = true; // Don't wait for angular to do it's thing..
    it('should have a title', function() {
        browser.get('index.html');

        expect(browser.getTitle()).toEqual('jQuery Row Manager');
    });
});