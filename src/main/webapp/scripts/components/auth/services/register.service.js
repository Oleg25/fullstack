'use strict';

angular.module('sellerinterfaceApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


