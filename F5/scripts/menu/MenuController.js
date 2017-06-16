angular.module('MenuModule').controller('MenuController', function ($scope, $location, menuFactory) {
    $scope.menuList = menuFactory.getMenuItems();

    $scope.dropdown = function (name) {
        menuFactory.setActiveCategory(name)
    }

    $scope.goTo = function (path) {
        $location.path(path);
        menuFactory.setActiveItem(path);
    }


    $scope.showMenu = function () {
        var menu = $('.fill');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
        }
        else {
            menu.addClass('open');
        }
    }

    $scope.toggleMenu = function () {
        $scope.overlay = document.getElementsByClassName("main-wrapper")[0];
        $scope.menu = document.getElementsByClassName("navigation-menu")[0];

        if ($scope.menu.classList.contains("opened")) {
            $scope.menu.classList.remove("opened");
            $scope.overlay.classList.remove("with-overlay");
        }
        else {
            $scope.menu.className += " opened";
            $scope.overlay.className += " with-overlay";
        }

    };

});
