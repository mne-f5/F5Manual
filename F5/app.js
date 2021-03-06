﻿var app = angular.module('F5', ["ngRoute", 'ui.bootstrap', 'MainModule', 'LoginModule', 'MenuModule', 'GalleryModule', 'KitModule', 'ScrollModule', 'LoaderModule', 'ngFileUpload', 'columnChartModule', 'pieChartModule','donutChartModule', 'lineChartModule', 'geoChartModule']);
var mainModule = angular.module('MainModule',[]);
var loginModule = angular.module('LoginModule', []);
var menuModule = angular.module('MenuModule', []);
var galleryModule = angular.module('GalleryModule', []);
var kitModule = angular.module('KitModule', []);
var scrollModule = angular.module('ScrollModule', []);
var loaderModule = angular.module('LoaderModule', []);
//var barChart = angular.module('barChartModule', []);
//var donutChart = angular.module('donutChartModule', []);
//var lineChart = angular.module('lineChartModule', []);
//var progressChart = angular.module('progressChartModule', []);
//var pieChart = angular.module('pieChartModule', []);
//var map = angular.module('mapModule', []);

var columnChart = angular.module('columnChartModule', []);
var pieChart = angular.module('pieChartModule', []);
var donutChart = angular.module('donutChartModule', []);
var lineChart = angular.module('lineChartModule', []);
var geoChart = angular.module('geoChartModule', []);

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

        $routeProvider.when('/website', {
            templateUrl: 'scripts/brand/website.html'
        });

        $routeProvider.when('/newsletter', {
            templateUrl: 'scripts/brand/newsletter.html'
        });

        $routeProvider.when('/materials', {
            templateUrl: 'scripts/brand/materials.html'
        });

        $routeProvider.when('/apps', {
            templateUrl: 'scripts/brand/apps.html'
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
        
        $routeProvider.when('/tables', {
            templateUrl: 'scripts/manual/components/tables.html'
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


        $routeProvider.when('/animations', {
            templateUrl: 'scripts/manual/motion/animations.html'
        });


    // UI KIT SECTION

        $routeProvider.when('/ui-kit', {
            templateUrl: 'scripts/kit/ui-kit.html',
            controller: 'KitController'
        });

        $routeProvider.when('/top-navbar', {
            templateUrl: 'scripts/kit/examples/topExample.html',
            controller: 'KitController'
        });

        $routeProvider.when('/side-navbar', {
            templateUrl: 'scripts/kit/examples/sideExample.html',
            controller: 'KitController'
        });

        $routeProvider.when('/error', {
            templateUrl: 'scripts/kit/examples/errorExample.html',
            controller: 'KitController'
        });

        $routeProvider.when('/login-example1', {
            templateUrl: 'scripts/kit/examples/darkloginExample.html',
            controller: 'KitController'
        });

        $routeProvider.when('/login-example2', {
            templateUrl: 'scripts/kit/examples/whiteloginExample.html',
            controller: 'KitController'
        });

    $routeProvider.otherwise({ redirectTo: '/login' });
}]);

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, currentRoute, previousRoute) {

        window.scrollTo(0, 0);

    });
});

