var API_URL = "http://127.0.0.1:5000";

angular.module('starter')

    .controller('MainCtrl', [ '$scope', 'fileUpload', function($scope, fileUpload){
        $scope.hiddenErrorMessage = true;

        $scope.hideErrorMessage = function(){
            $scope.hiddenErrorMessage = true;
        }

        $scope.uploadFile = function(){
            $scope.hiddenErrorMessage = true;
            var file = $scope.myFile;
            console.log('file is ' + JSON.stringify(file));
            var uploadUrl = API_URL+"/api/upload";
            fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
                if(data===-1){
                    $scope.hiddenErrorMessage = false;
                }
            });
        };
    }])

    .controller('ResultCtrl', [ '$scope', '$stateParams', function($scope,$stateParams){
        $scope.filename = $stateParams._filename;
        $scope.file = API_URL+"/api/uploads/"+$stateParams._filename;
    }]);