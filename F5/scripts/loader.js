angular.module('LoaderModule').factory('loader', function ($timeout) {
    var loader = document.getElementsByClassName('loader'),
        backBtn = document.getElementsByClassName('back'),
        menu = document.getElementsByClassName('slide'),
        prevPath = {};



    return {
        loading: function () {
            loader[0].className += ' loading';
        },
        seeKit: function () {
            $timeout(function () {
                loader[0].classList.remove('loading');
                menu[0].className += ' kit-menu';
                backBtn[0].className += ' vis';
            }, 2000);
            
        },
        getPrevPath: function () {
            return prevPath;
        },
        setPrevPath: function (path) {
             prevPath = path;
        },
        removeLoader: function () {
            $timeout(function () {
                loader[0].classList.remove('loading');
                menu[0].classList.remove('kit-menu');
                backBtn[0].classList.remove('vis');
            }, 1000);
           
        }
    }
});