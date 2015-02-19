var API_URL = "http://127.0.0.1:5000";

angular.module('starter')

    .controller('MainCtrl', [ '$scope', 'fileUpload', function($scope, fileUpload){
        $scope.uploadFile = function(){
            var file = $scope.myFile;
            console.log('file is ' + JSON.stringify(file));
            var uploadUrl = API_URL+"/api/upload";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };
    }])

    .controller('ResultCtrl', [ '$scope', '$stateParams', function($scope,$stateParams){
        $scope.file = API_URL+"/api/uploads/"+$stateParams._filename;
    }]);