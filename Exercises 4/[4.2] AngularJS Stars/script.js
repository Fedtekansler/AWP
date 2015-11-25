angular.module('starExample', [])
    .controller('ctrl', starControl)
    .directive('rating', starRating);

// The controller defined for the body element of the module.
function starControl() {
    // The starting rating is set to 3.
    this.rating = 3;
}

function starRating() {
    return {
        templateUrl: 'partials/stars.html', // A template is loaded with tags defined in link.
        scope: {
            ratingValue: '=ngModel',
            max: '=?' // Max is set in the given template to 5
        },
        link: function(scope, element, attributes) {
            // We go through a loop up to max to add number of stars and color the stars depending on rating value.
            function update() {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            }

            scope.toggle = function(index) {
                // This function is attached as an onclick, where add one to make up for the index.
                scope.ratingValue = index + 1;
            };

            scope.$watch('ratingValue', function(newValue, oldValue) {
                // This is used for callback. We just simply update the view on any change to the value.
                if (newValue) {
                    update();
                }
            });
        }
    };
}