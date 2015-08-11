'use strict';

angular.module('sellerinterfaceApp')
    .controller('BookDetailController', function ($scope, $rootScope, $stateParams, entity, Book, Author) {
        $scope.book = entity;
        $scope.load = function (id) {
            Book.get({id: id}, function(result) {
                $scope.book = result;
            });
        };
        $rootScope.$on('sellerinterfaceApp:bookUpdate', function(event, result) {
            $scope.book = result;
        });
    });
