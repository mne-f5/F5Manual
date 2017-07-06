angular.module('MainModule').controller('MainController', function ($scope, $location, menuFactory, smoothScroll) {

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

    function hasClass(element, cls) {
        var c = element[0].className;
        return c.indexOf(cls) > -1;
    }



    window.onscroll = function () {

        var distance = window.pageYOffset,
            bubble = document.getElementsByClassName('up');

        if (distance > 200) {

            if (hasClass(bubble, 'appear')) {
                return false;
            }
            else {
                bubble[0].className += ' appear';
            }

        }
        else {
            if (hasClass(bubble, 'appear')) {
                bubble[0].classList.remove('appear');
            }
            else {
                return false;
            }
        }
    };

    $scope.toTop = function () {
        smoothScroll.scroll(0);
    };

});