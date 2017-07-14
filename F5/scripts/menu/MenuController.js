angular.module('MenuModule').controller('MenuController', function ($scope, $location, menuFactory, smoothScroll, loader, $window) {
    $scope.menuList = menuFactory.getMenuItems();
    var url = 'http://localhost/f5/#!';

    $scope.dropdown = function (name) {
        menuFactory.setActiveCategory(name)
    }

    $scope.goTo = function (path) {

        var menu = $('.slide');
        var body = $('body');

        if (path === '/ui-kit') {
            var prevPath = null;


            loader.loading();
            loader.seeKit();


            $scope.$on('$routeChangeSuccess', function (event, current, previous) {
                prevPath = previous.$$route.originalPath;
                loader.setPrevPath(prevPath);
                if (current.$$route.originalPath === '/ui-kit') {
                    smoothScroll.setElements();
                }
            });

            $location.path(path);
            menuFactory.setActiveItem(path);

        }
        else {
            if (path && path.indexOf('/kit/') > -1) {
                var res = path.replace('/kit/', '');
                var el = document.getElementById(res);

                smoothScroll.scroll(res);
                menuFactory.setActiveItem(path);
            }
            else {
                if (path && path.indexOf('/example/') > -1) {
                    var res = path.replace('/example', '');
                    $window.open(url + res, '_blank');
                }
                else {
                    $location.path(path);
                    menuFactory.setActiveItem(path);
                }
               
            }
        }

        if (menu.hasClass('open') && path) {
            menu.removeClass('open');
            body.removeClass('no-overflow');
        }

    }


    $scope.showMenu = function () {
        var menu = $('.slide');
        var body = $('body');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
            body.removeClass('no-overflow');
        }
        else {
            menu.addClass('open');
            body.addClass('no-overflow');
        }
    };

});
