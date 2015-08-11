'use strict';

angular.module('sellerinterfaceApp')
    .factory('Book', function ($resource, DateUtils) {
        return $resource('api/books/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.pubDate = DateUtils.convertLocaleDateFromServer(data.pubDate);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.pubDate = DateUtils.convertLocaleDateToServer(data.pubDate);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.pubDate = DateUtils.convertLocaleDateToServer(data.pubDate);
                    return angular.toJson(data);
                }
            }
        });
    });
