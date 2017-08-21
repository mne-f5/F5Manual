angular.module('KitModule').controller('KitController', function ($scope, $location, $anchorScroll, smoothScroll, $uibModal, $timeout, Upload) {
    $scope.toElements = function () {
        $location.hash('headings');
        $anchorScroll();
    };



    $scope.attachments = [];

    $scope.upload = function (file) {
        var list = $('.files-list');
        Upload.dataUrl(file, true).then(function (url) {
            console.log(url);
        });

        if (file != null) {
            $scope.attachments.push(file);
            list.addClass('bordered');
        }
    };

    $scope.delete = function (index) {
        var list = $('.files-list');
        if ($scope.attachments.length === 1) {
            list.removeClass('bordered');
            $scope.attachments.splice(index, 1);
        }
        else {
            $scope.attachments.splice(index, 1);
        }
    };

    $scope.done = function () {
        var btnHolder = $('.upload-btn-holder'),
            dropContent = $('.drop-content'),
            doneMsg = $('.done-msg');

        btnHolder.addClass('clicked');

        $timeout(function () {
            btnHolder.addClass('done');
        }, 2600);

        $timeout(function () {
            dropContent.addClass('disappear');
            doneMsg.addClass('visible');
        }, 3600);

    };

    $scope.openUpload = function () {
        var paper = $('.drop-box-paper');
        paper.toggleClass('open');
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
        counter++;
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


    $scope.options = {
        minDate: new Date(),
        showWeeks: false
    };

    // Popup datepicker

    $scope.dt = new Date();

    $scope.start = new Date();
    $scope.end = new Date();

    $scope.popup = {
        opened: false
    };

    $scope.openDp = function () {
        $scope.popup.opened = true;
    };

    $scope.popupOptions = {
        minDate: new Date(),
        showWeeks: false
    }

    $scope.startOptions = {
        minDate: new Date(),
        showWeeks: false
    }

    $scope.endOptions = {
        minDate: new Date(),
        showWeeks: false
    }

    $scope.interval = {
        opened: false
    };

    $scope.openInterval = function () {
        $scope.interval.opened = true;
    };

    // Timepicker
    $scope.time = new Date();

    // Panels

    $scope.deletePanel = function (event) {
        event.target.offsetParent.remove();
    };

    $scope.expandPanel = function (event) {
        var panel = $(event.target.parentNode.parentNode);
        panel.toggleClass('expanded');
    };


    

});