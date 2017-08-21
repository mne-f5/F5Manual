angular.module('GalleryModule').controller('GalleryController', function ($scope, galleryFactory) {
    $scope.photos = galleryFactory.getPhotos();

    $scope.view = function (url) {
        url = url.replace('compressed/', '');
        return url;
    }




});