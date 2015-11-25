angular.module('starExample', [])
    .controller('ctrl', starControl)
    .directive('rating', starRating);

function starControl() {
    this.rating = 3;
}

function starRating() {
    console.log("Hello World");
    return {
        templateUrl: 'partials/stars.html',
        controller: 'ctrl',
        scope: {
            ratingValue: '=ngModel',
            max: '=?' // optional (default is 5)
        },
        link: function(scope, element, attributes, ctrl) {
            if (scope.max == undefined) {
                scope.max = 5;
            }

            scope.stars = new Array(5);

            scope.toggle = function(index) {
                //console.log(index);
                //console.log(scope.ratingValue);
                scope.ratingValue = index + 1;
            }

            scope.$watch('ratingValue', function(newValue, oldValue) {
                console.log("Old value is " + oldValue);
                console.log("New value is " + newValue);
            });
        }
    };
}