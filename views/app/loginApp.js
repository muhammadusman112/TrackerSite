angular.module("loginApp", [])
    .controller("loginContr", function($scope, $http, $location) {

        $scope.submitResult = {
            email: "",
            password: ""
        };
$scope.myHTML = false;
       
        $scope.submit = function() {

            $http.post('http://localhost:3003/tracker', $scope.submitResult)
                .success(function(data, status, headers, params) {
                 $location.path('/Home/views/home.html');
                   
                     //$scope.submitResult = logResult("DATA LOADED SUCCESSFULLY", data, status, headers, params);

                })
                .error(function(data, status, headers, params) {
                    // $scope.submitResult = logResult("CANNOT GET DATA", data, status, headers, params);
                      $location.path('/Authentication/views/login.html');
                    $scope.myHTML = true;

                    // $scope.data = result;
                });
        };
    });