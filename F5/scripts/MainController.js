angular.module('MainModule').controller('MainController', function ($scope, $location, menuFactory) {

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

    $scope.menuList = menuFactory.getMenuItems();

    $scope.go = function (path) {
        $location.path(path);
        menuFactory.setActiveItem(path);
    }

});