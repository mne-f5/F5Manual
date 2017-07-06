angular.module('KitModule').controller('KitController', function ($scope, $location, $anchorScroll) {
    $scope.toElements = function () {
        $location.hash('headings');
        $anchorScroll();
    };


    $scope.openCode = function (element) {
        $(element).toggleClass('open');
    };
});