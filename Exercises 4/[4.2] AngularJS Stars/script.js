/**
 * Created by Victor on 24-11-2015.
 */

angular.module('components', [])
    .directive('rating', function(){
        return{
            restrict: 'E',
            scope:{
                //why can't i bind my stars?
               stars:'bind'
            },
            templateUrl: 'partials/Stars.html'
        }
    });

angular.module('StarRating', ['components'])

function StarCtrl($scope){
    $scope.totalStars = function(){

    };
}