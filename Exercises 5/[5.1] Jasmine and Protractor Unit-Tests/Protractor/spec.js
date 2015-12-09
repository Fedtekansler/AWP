describe('Angular Star Rating', function() {
    it('should have a title', function() {
        browser.get('index.html');

        expect(browser.getTitle()).toEqual('AngularJS Stars');
    });
	
	it('should have default rating 3', function(){
		browser.get('index.html');
		var rating = element(by.css('p'));
		expect(rating.getText()).toEqual("Rating: 3");
	});
	
	it('should change rating when a star is clicked', function(){
		browser.get('index.html');
		
		// Click 2nd star
		element.all(by.repeater('star in stars track by $index')).get(1).click();
		
		// Rating should be 2 now
		var rating = element(by.css('p'));
		expect(rating.getText()).toEqual("Rating: 2");
	});
});