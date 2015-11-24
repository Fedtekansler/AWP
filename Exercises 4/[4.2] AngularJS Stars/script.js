/**
 * Created by Victor on 24-11-2015.
 */

angular.module('components', [])
    .directive('rating', function(){
        return{
            restrict: 'E',
            template: '<span> &#9733; </span>'
        }
    });

angular.module('StarRating', ['components'])

function StarCtrl($scope){
    $scope.totalStars = function(){

    };
}