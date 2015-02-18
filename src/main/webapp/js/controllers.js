angular.module('starter')

    .controller('MainCtrl', [ '$scope', function($scope){
        $scope.imageFile="";

        $scope.submitImage = function(){
            alert($scope.imageFile);
        }
    }]);