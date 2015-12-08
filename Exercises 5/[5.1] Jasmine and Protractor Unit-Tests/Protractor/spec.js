describe('Row Manager App', function() {
    it('should have a title', function() {
        browser.get('index.html');

        expect(browser.getTitle()).toEqual('AngularJS Stars');
    });
	
	/*it('', function(){
		browser.get('index.html');
		
		expect();
	});*/
});