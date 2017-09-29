angular.module('KitModule').controller('KitController', function ($scope, $location, $anchorScroll, smoothScroll, $uibModal, $timeout, Upload) {
    $scope.toElements = function () {
        $location.hash('headings');
        $anchorScroll();
    };



    /******************************  Files upload  *************************************/
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


    /******************************  Smooth scroll  *************************************/
    var counter = 0;
    var elements = document.getElementsByClassName('sec');

    $scope.$on('$includeContentLoaded', function (event) {
        counter++;
        if (counter === elements.length) {
            smoothScroll.setElements(elements);
        }
    });


    /******************************  Modal animation  *************************************/

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


    /******************************  Datepicker and timepicker  *************************************/


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


    /******************************  Panels  *************************************/

    $scope.deletePanel = function (event) {
        event.target.offsetParent.remove();
    };

    $scope.expandPanel = function (event) {
        var panel = $(event.target.parentNode.parentNode);
        panel.toggleClass('expanded');
    };


    /******************************  Linearicons  *************************************/
    $scope.icons = [
        { name: 'home' },
        { name: 'magic-wand' },
        { name: 'poop' },
        { name: 'cloud' },
        { name: 'cloud-sync' },
        { name: 'cloud-upload' },
        { name: 'cloud-check' },
        { name: 'cloud-download' },
        { name: 'lock' },
        { name: 'dice' },
        { name: 'star-half' },
        { name: 'star' },
        { name: 'star-empty' },
        { name: 'envelope' },
        { name: 'eye' },
        { name: 'file-add' },
        { name: 'graduation-hat' },
        { name: 'film-play' },
        { name: 'picture' },
        { name: 'user' },
        { name: 'store' },
        { name: 'phone-handset' },
        { name: 'map-marker' },
        { name: 'calendar-full' },
        { name: 'screen' },
        { name: 'laptop' },
        { name: 'bubble' },
        { name: 'pie-chart' },
        { name: 'diamond' },
        { name: 'coffee-cup' },
        { name: 'rocket' },
        { name: 'car' },
        { name: 'wheelchair' },
        { name: 'smile' },
        { name: 'mustache' },
        { name: 'volume-high' },
        { name: 'volume' },
        { name: 'undo' },
        { name: 'history' },
        { name: 'upload' },
        { name: 'bug' },
        { name: 'unlink' },
        { name: 'magnifier' },
        { name: 'list' },
        { name: 'chevron-left' },
        { name: 'chevron-right' },
        { name: 'chevron-up' },
        { name: 'chevron-down' },
        { name: 'arrow-left' },
        { name: 'arrow-right' },
        { name: 'arrow-up' },
        { name: 'arrow-down' },
        { name: 'move' },
        { name: 'menu-circle' },
        { name: 'plus-circle' },
        { name: 'arrow-left-circle' },
        { name: 'arrow-right-circle' },
        { name: 'arrow-up-circle' },
        { name: 'arrow-down-circle' },
        { name: 'chevron-left-circle' },
        { name: 'chevron-right-circle' },
        { name: 'chevron-up-circle' },
        { name: 'chevron-down-circle' },
        { name: 'frame-contract' },
        { name: 'text-format' },
        { name: 'text-format-remove' },
        { name: 'text-size' },
        { name: 'bold' },
        { name: 'italic' },
        { name: 'underline' },
        { name: 'strikethrough' },
        { name: 'highlight' },
        { name: 'text-align-left' },
        { name: 'text-align-center' },
        { name: 'text-align-right' },
        { name: 'text-align-justify' },
        { name: 'line-spacing' },
        { name: 'indent-increase' },
        { name: 'indent-decrease' },
        { name: 'pilcrow' },
        { name: 'direction-ltr' },
        { name: 'direction-rtl' },
        { name: 'page-break' },
        { name: 'sort-alpha-asc' },
        { name: 'sort-amount-asc' },
        { name: 'pointer-up' },
        { name: 'pointer-down' },
        { name: 'pointer-left' },
        { name: 'pointer-right' },
        { name: 'hand' },
        { name: 'apartament' },
        { name: 'drop' },
        { name: 'sun' },
        { name: 'cog' },
        { name: 'heart' },
        { name: 'paperclip' },
        { name: 'printer' },
        { name: 'enter' },
        { name: 'exit' },
        { name: 'license' },
        { name: 'camera-video' },
        { name: 'book' },
        { name: 'users' },
        { name: 'cart' },
        { name: 'phone' },
        { name: 'map' },
        { name: 'keyboard' },
        { name: 'smartphone' },
        { name: 'laptop-phone' },
        { name: 'heart-pulse' },
        { name: 'chart-bars' },
        { name: 'linearicons' },
        { name: 'leaf' },
        { name: 'briefcase' },
        { name: 'train' },
        { name: 'select' },
        { name: 'sad' },
        { name: 'alarm' },
        { name: 'volume-medium' },
        { name: 'volume-low' },
        { name: 'mic' },
        { name: 'redo' },
        { name: 'clock' },
        { name: 'enter-down' },
        { name: 'code' },
        { name: 'thumbs-up' },
        { name: 'thumbs-down' },
        { name: 'cross' },
        { name: 'warning' },
        { name: 'checkmark-circle' },
        { name: 'circle-minus' },
        { name: 'crop' },
        { name: 'layers' },
        { name: 'pencil' },
        { name: 'lighter' },
        { name: 'moon' },
        { name: 'database' },
        { name: 'trash' },
        { name: 'flag' },
        { name: 'inbox' },
        { name: 'file-empty' },
        { name: 'music-note' },
        { name: 'camera' },
        { name: 'bookmark' },
        { name: 'shirt' },
        { name: 'tag' },
        { name: 'pushpin' },
        { name: 'location' },
        { name: 'spell-check' },
        { name: 'tablet' },
        { name: 'power-switch' },
        { name: 'construction' },
        { name: 'gift' },
        { name: 'dinner' },
        { name: 'paw' },
        { name: 'bus' },
        { name: 'bicycle' },
        { name: 'earth' },
        { name: 'neutral' },
        { name: 'bullhorn' },
        { name: 'hourglass' },
        { name: 'sync' },
        { name: 'download' },
        { name: 'exit-up' },
        { name: 'link' },
        { name: 'question-circle' },
        { name: 'cross-circle' },
        { name: 'frame-expand' },
        { name: 'funnel' }
    ];

    $scope.icon = 'home';

    $scope.changeIcon = function (selectedIcon) {
        $scope.icon = selectedIcon;
    }

});