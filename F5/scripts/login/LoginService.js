angular.module('LoginModule').factory('loginFactory', function () {
    var username = 'admin';
    var password = 'fire4test';

    return {
        doLogin: function (user,pass) {
            if (user == username && pass == password) {
                return true;
            }
            else {
                return false;
            }
        }
    };
});