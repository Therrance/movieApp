/*global angular*/

angular.module('movieApp.services', []).factory('Movie', function($resource) {
    return $resource('https://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}).service('popupService', ['$window', function($window) {
    this.showPopup = function(message) {
        return $window.confirm(message); //Ask the users if they really want to delete
    };
}]);
