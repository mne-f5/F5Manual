angular.module('MenuModule').controller('MenuController', function ($scope, $location, menuFactory) {
    $scope.menuList = menuFactory.getMenuItems();

    $scope.dropdown = function (name) {
        menuFactory.setActiveCategory(name)
    }

    $scope.go = function (path) {
        $location.path(path);
        menuFactory.setSelectedMenuItem(path);

        angular.forEach($scope.menuList, function (value) {
            angular.forEach(value.firstLevel, function (menuItem) {
                if (menuItem.path === menuFactory.getSelectedMenuItem() && !menuItem.submenu) {
                    menuItem.active = true;
                }
                else {
                    menuItem.active = false;
                    angular.forEach(menuItem.submenu, function (submenu) {
                        if (submenu.path === menuFactory.getSelectedMenuItem()) {
                            submenu.active = true;
                        }
                        else {
                            submenu.active = false;
                        }
                    });
                }
            });
        });
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
