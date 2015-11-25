angular.module('starExample', [])
.directive('rating', starRating);

function starRating() {
    console.log("Hello World");
    return {
        templateUrl: 'partials/stars.html'
    };
}