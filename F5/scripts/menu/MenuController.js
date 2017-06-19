angular.module('MenuModule').controller('MenuController', function ($scope, $location, menuFactory) {
    $scope.menuList = menuFactory.getMenuItems();

    $scope.dropdown = function (name) {
        menuFactory.setActiveCategory(name)
    }

    $scope.goTo = function (path) {
        var menu = $('.fill');
        var body = $('body');

        $location.path(path);
        menuFactory.setActiveItem(path);

        if (menu.hasClass('open')) {
            menu.removeClass('open');
            body.removeClass('no-overflow');
        }
                
    }


    $scope.showMenu = function () {
        var menu = $('.fill');
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

    //$scope.toggleMenu = function () {
    //    $scope.overlay = document.getElementsByClassName("main-wrapper")[0];
    //    $scope.menu = document.getElementsByClassName("navigation-menu")[0];

    //    if ($scope.menu.classList.contains("opened")) {
    //        $scope.menu.classList.remove("opened");
    //        $scope.overlay.classList.remove("with-overlay");
    //    }
    //    else {
    //        $scope.menu.className += " opened";
    //        $scope.overlay.className += " with-overlay";
    //    }

    //};

});
