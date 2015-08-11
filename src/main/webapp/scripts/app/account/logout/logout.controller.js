'use strict';

angular.module('sellerinterfaceApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
