describe('Star Rating Test', function() {
    beforeEach(module('starExample'));

    it('should have a clickable star', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');

        expect(browser.getTime().toEqual('2000'));
    });
});