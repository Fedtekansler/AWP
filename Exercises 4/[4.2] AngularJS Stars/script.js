angular.module('starExample', [])
.directive('rating', starRating);

function starRating() {
    console.log("Hello World");
    return {
        templateUrl: 'partials/stars.html',
        link: function(scope, element, attributes) {
            scope.toggle = function(index) {
                console.log("On click works");
            }
        }
    };
}