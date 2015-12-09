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
		element.all(by.repeater('star in stars track by $index')).get(2-1).click();
		
		// Rating should be 2 now
		var rating = element(by.css('p'));
		expect(rating.getText()).toEqual("Rating: 2");
	});
	
	it('should change star colors when rating changes', function(){
		browser.get('index.html');
		
		var stars = element.all(by.repeater('star in stars track by $index'));
		
		// Click 5th star
		stars.get(5-1).click();
		
		// 5 stars should be full/yellow now
		var yellowStars = stars.filter(function(star){
			return star.getAttribute('class').then(function(classes){
				return classes.indexOf('filled') > -1;
			});
		});
		expect(yellowStars.count()).toEqual(5);
	});
});