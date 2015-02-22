var API_URL = "http://127.0.0.1:5000";

angular.module('starter')

    .controller('MainCtrl', [ '$scope', 'fileUpload', function($scope, fileUpload) {
        $scope.hiddenSpinner = true;
        $scope.hiddenErrorMessage = true;

        $scope.hideErrorMessage = function () {
            $scope.hiddenErrorMessage = true;
        }

        $scope.uploadFile = function () {
            $scope.hiddenSpinner = false;
            $scope.hiddenErrorMessage = true;
            var file = $scope.myFile;
            console.log('file is ' + JSON.stringify(file));
            var uploadUrl = API_URL + "/api/upload";
            fileUpload.uploadFileToUrl(file, uploadUrl, function (data) {
                $scope.hiddenSpinner = true;
                if (data === -1) {
                    $scope.hiddenErrorMessage = false;
                }
            });
        };


        $(document).on('change', '.btn-file :file', function () {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);

        });

        $(document).ready(function () {
            $('.btn-file :file').on('fileselect', function (event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if (input.length) {
                    input.val(log);
                } else {
                    if (log) alert(log);
                }

            });
        });
    }])

    .controller('ResultCtrl', [ '$scope', '$stateParams', function($scope,$stateParams){
        $scope.filename = $stateParams._filename;
        $scope.file = API_URL+"/api/uploads/"+$stateParams._filename;
    }]);