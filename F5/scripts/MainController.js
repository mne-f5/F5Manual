angular.module('MainModule').controller('MainController', function ($scope, $location, menuFactory, smoothScroll, loader) {

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
            bubble = document.getElementsByClassName('up'),
            sections = smoothScroll.getElements(),
            li = document.getElementsByClassName('menu'),
            menu = li[0].children[2],
            page = window.location.hash;


        if (page === '#!/ui-kit') {

            for (i = 0; i < sections.length; i++) {
                if (sections[i].position - 50 <= distance && sections[i].position + sections[i].height > distance) {
                    menu.children[1].children[i + 1].children[0].className += ' active';
                }
                else {
                    menu.children[1].children[i + 1].children[0].classList.remove('active');
                }
            }

            if (distance > 200) {
                bubble[0].className += ' appear';
            }
            else {
                bubble[0].classList.remove('appear');
            }
        }
        else {
            if (distance > 200) {
                bubble[0].className += ' appear';
            }
            else {
                bubble[0].classList.remove('appear');
            }
        }
 
    };
    

    $scope.toTop = function () {
        smoothScroll.scroll(0);
    };

    $scope.goBack = function () {
        loader.loading();
        loader.removeLoader();
        $location.path(loader.getPrevPath());
        menuFactory.setActiveItem(loader.getPrevPath());

    };

});