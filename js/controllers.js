/*global angular*/

angular.module('movieApp.controllers', []).controller('MovieListController', function($scope, $state, popupService, $window, Movie) {
    $scope.movies = Movie.query(); //fetch all movies. GET to /api/movies/
    console.log('!!!');

    $scope.deleteMovie = function(movie) { //delete a movie. DELETE to /api/movies/:id
        if (popupService.showPopup('Really delete this?')) {
                console.log('movie: ', movie);

            movie.$delete(function() {
                $window.location.href = ''; //redirect to home
            });
        }
    };
}).controller('MovieViewController', function($scope, $stateParams, Movie) {
    $scope.movie = Movie.get({
        id: $stateParams.id
    }); // get a single movie 
}).controller('MovieCreateController', function($scope, $state, $stateParams, Movie) {
    $scope.movie = new Movie(); //create new movie instance. Properties will be set via ng-model on UI

    $scope.addMovie = function() { //create a new movie. Issues a POST to /api/movies
        $scope.movie.$save(function() {
            $state.go('movies'); // on success go back to home i.e. movies state.
        });
    };
}).controller('MovieEditController', function($scope, $state, $stateParams, Movie) {
    $scope.updateMovie = function() { //Update the edited movie. Issues a PUT to /api/movies/:id
        $scope.movie.$update(function() {
            $state.go('movies'); // on success go back to home i.e. movies state
        });
    };

    $scope.loadMovie = function() { //Issues a GET request to /api/movies/:id to get a movie to update
        $scope.movie = Movie.get({
            id: $stateParams.id
        });
    };

    $scope.loadMovie(); // Load a movie which can be edited on UI
});
