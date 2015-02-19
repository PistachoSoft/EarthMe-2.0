angular.module('starter')

    .service('fileUpload', ['$http', '$state', function ($http,$state) {
        this.uploadFileToUrl = function(file, uploadUrl){
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).success(function(data){
                $state.go('result', {_filename: data.filename});
            }).error(function(){
                alert("BOOM!");
            });
        }
    }]);