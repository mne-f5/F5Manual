angular.module('MainModule').controller('MainController', function ($scope, $location) {

    $scope.logged = false;


    $scope.$on('$routeChangeStart', function (event, next, current) {
        if (next && next.$$route)
        {
            if (next.$$route.templateUrl !== "scripts/login/loginPartial.html")
            {
                $scope.logged = true;
            }
        }
    });

    $scope.toHome = function (path) {
        $location.path(path);
    }

});