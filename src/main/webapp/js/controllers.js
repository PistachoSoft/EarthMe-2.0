angular.module('starter')

    .service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl){
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).success(function(){

            }).error(function(){

            });
        }
    }])

    .controller('MainCtrl', [ '$scope', 'fileUpload', function($scope, fileUpload){
        $scope.uploadFile = function(){
            var file = $scope.myFile;
            console.log('file is ' + JSON.stringify(file));
            var uploadUrl = "http://127.0.0.1:5000/api/upload";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };
    }]);