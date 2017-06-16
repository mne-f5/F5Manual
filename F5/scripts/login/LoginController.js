angular.module('LoginModule').controller('LoginController', function ($scope, loginFactory, $location, $timeout) {
    $scope.errorText = 'Incorrect username/password !';
    $scope.error = true;

    $scope.login = function () {
        if (loginFactory.doLogin($scope.username,$scope.password)) {
            $location.path('/home');
        }
        else {
            $scope.error = false;
            $timeout(function () {
                $scope.error = true;
            }, 3000);
        }
        
    }
});