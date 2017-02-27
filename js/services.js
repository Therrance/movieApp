/*global angular*/

angular.module('movieApp.sevices', []).factory('Movie', function($resource) {
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});
