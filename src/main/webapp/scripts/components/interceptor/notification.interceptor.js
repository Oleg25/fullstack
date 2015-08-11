 'use strict';

angular.module('sellerinterfaceApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sellerinterfaceApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sellerinterfaceApp-params')});
                }
                return response;
            },
        };
    });