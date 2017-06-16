﻿var app = angular.module('F5', ["ngRoute", 'ui.bootstrap', 'MainModule', 'LoginModule', 'MenuModule', 'GalleryModule', 'KitModule']);
var mainModule = angular.module('MainModule',[]);
var loginModule = angular.module('LoginModule', []);
var menuModule = angular.module('MenuModule', []);
var galleryModule = angular.module('GalleryModule', []);
var kitModule = angular.module('KitModule', []);

app.config(['$routeProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'scripts/login/loginPartial.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'scripts/homePartial.html'
    });

    // BRAND SECTION 

        $routeProvider.when('/identity', {
            templateUrl: 'scripts/brand/identity.html'
        });

        $routeProvider.when('/print-files', {
            templateUrl: 'scripts/brand/print-files.html'
        });

        $routeProvider.when('/photos', {
            templateUrl: 'scripts/brand/gallery/photos.html',
            controller: 'GalleryController'
        });

    // WEB & MOBILE SECTION

        $routeProvider.when('/introduction', {
            templateUrl: 'scripts/manual/introduction.html'
        });

        $routeProvider.when('/designsystem', {
            templateUrl: 'scripts/manual/designsystem.html'
        });

        $routeProvider.when('/grid', {
            templateUrl: 'scripts/manual/grid.html'
        });

        $routeProvider.when('/layout', {
            templateUrl: 'scripts/manual/layout.html'
        });

        $routeProvider.when('/forms', {
            templateUrl: 'scripts/manual/components/forms.html'
        });

        $routeProvider.when('/buttons', {
            templateUrl: 'scripts/manual/components/buttons.html'
        });

        $routeProvider.when('/tables', {
            templateUrl: 'scripts/manual/components/tables.html'
        });

        $routeProvider.when('/components', {
            templateUrl: 'scripts/manual/components/components.html'
        });

        $routeProvider.when('/colors', {
            templateUrl: 'scripts/manual/style/colors.html'
        });

        $routeProvider.when('/icons', {
            templateUrl: 'scripts/manual/style/icons.html'
        });

        $routeProvider.when('/typography', {
            templateUrl: 'scripts/manual/style/typography.html'
        });

        $routeProvider.when('/elements', {
            templateUrl: 'scripts/manual/style/elements.html'
        });

        $routeProvider.when('/animations', {
            templateUrl: 'scripts/manual/motion/animations.html'
        });


    // UI KIT SECTION

        $routeProvider.when('/ui-kit', {
            templateUrl: 'scripts/kit/ui-kit.html',
            controller: 'KitController'
        });

    $routeProvider.otherwise({ redirectTo: '/login' });
}]);

