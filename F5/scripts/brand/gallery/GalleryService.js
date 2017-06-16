angular.module('GalleryModule').factory('galleryFactory', function () {

    var photos = [
        {
            url: 'images/stockphotos/compressed/1.jpg',
            size: 'lg'
        },
        {
            url: 'images/stockphotos/compressed/2.jpg',
            size: 'md'
        },
        {
            url: 'images/stockphotos/compressed/3.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/4.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/5.jpg',
            size: 'md'
        },
        {
            url: 'images/stockphotos/compressed/6.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/7.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/8.jpg',
            size: 'lg'
        },
        {
            url: 'images/stockphotos/compressed/9.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/10.jpg',
            size: 'lg'
        },
        {
            url: 'images/stockphotos/compressed/11.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/12.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/13.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/14.jpg',
            size: 'lg'
        },
        {
            url: 'images/stockphotos/compressed/15.jpg',
            size: 'md'
        },
        {
            url: 'images/stockphotos/compressed/16.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/17.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/18.jpg',
            size: 'md'
        },
        {
            url: 'images/stockphotos/compressed/19.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/20.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/21.jpg',
            size: 'lg'
        },
        {
            url: 'images/stockphotos/compressed/22.jpg',
            size: 'sm'
        },
        {
            url: 'images/stockphotos/compressed/23.jpg',
            size: 'md'
        },
        {
            url: 'images/stockphotos/compressed/24.jpg',
            size: 'lg'
        },
        {
            url: 'images/stockphotos/compressed/25.jpg',
            size: 'sm'
        }
    ]

    return {
        getPhotos: function () {
            return photos
        }
    }

});