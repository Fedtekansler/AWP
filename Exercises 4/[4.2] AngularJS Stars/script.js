angular.module('starExample', [])
    .controller('ctrl', starControl)
    .directive('rating', starRating);

function starControl() {
    this.rating = 5;
}

function starRating() {
    console.log("Hello World");
    return {
        templateUrl: 'partials/stars.html',
        controller: 'ctrl',
        scope: {
            max: '=?' // optional (default is 5)
        },
        link: function(scope, element, attributes, ctrl) {
            if (scope.max == undefined) {
                scope.max = 5;
            }

            scope.stars = new Array(5);

            scope.toggle = function(index) {
                console.log(index);
                console.log(ctrl.rating);
            }
        }
    };
}