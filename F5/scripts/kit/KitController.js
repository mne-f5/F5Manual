angular.module('KitModule').controller('KitController', function ($scope, $location, $anchorScroll, smoothScroll, $uibModal, $timeout) {
    $scope.toElements = function () {
        $location.hash('headings');
        $anchorScroll();
    };


    $scope.openCode = function (element) {
        $(element).toggleClass('open');
    };

    $scope.openMenu = function (m) {
        $(m).toggleClass('open');
    };


    var counter = 0;
    var elements = document.getElementsByClassName('sec');

    $scope.$on('$includeContentLoaded', function (event) {
        counter ++;
        if (counter === elements.length) {
            smoothScroll.setElements(elements);
        }
    });

    var modalAnimations = [
        { effect: 'modal-scale', time: 500 },
        { effect: 'newspaper', time: 500 },
        { effect: 'slide-in-top', time: 500 },
        { effect: 'slide-in-bottom', time: 500 },
        { effect: 'slide-in-left', time: 500 },
        { effect: 'slide-in-right', time: 500 },
        { effect: 'expand-horiz', time: 500 },
        { effect: 'expand-vert', time: 500 },
        { effect: 'sticky-top', time: 500 },
        { effect: 'sticky-bottom', time: 500 },
        { effect: 'rotate-top', time: 500 },
        { effect: 'bounce-zoom', time: 500 }
    ];

    $scope.openModal = function (effect) {
        $scope.modalsExamples = $uibModal.open({
            templateUrl: 'scripts/kit/elements/modalPartial.html',
            windowClass: effect,
            scope: $scope
        });
    };

    $scope.closeModal = function () {
        var modal = document.getElementsByClassName('modal');

        for (i = 0; i < modalAnimations.length; i++) {
            if (modal[0].classList.contains(modalAnimations[i].effect)) {
                modal[0].classList.remove('in');
                modal[0].className += ' hiding';
                $timeout(function () {
                    $scope.modalsExamples.dismiss('cancel');
                }, modalAnimations[i].time);
            }
        }
        
        
    }


});