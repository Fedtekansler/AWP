describe('Angular Star Rating', function() {
    it('should have a title', function() {
        browser.get('index.html');

        expect(browser.getTitle()).toEqual('AngularJS Stars');
    });
	
	it('should have default rating 3', function(){
		browser.get('index.html');
		var rating = element.all(by.css('p')).first();
		expect(rating.getText()).toEqual("Rating: 3");
	});
});