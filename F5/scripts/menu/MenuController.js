angular.module('MenuModule').controller('MenuController', function ($scope, $location, menuFactory) {
    $scope.menuList = menuFactory.getMenuItems();

    $scope.dropdown = function (name) {
        menuFactory.setActiveCategory(name)
    }

    $scope.goTo = function (path) {
        var menu = $('.slide');
        var body = $('body');

        $location.path(path);
        menuFactory.setActiveItem(path);

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
    }

});
