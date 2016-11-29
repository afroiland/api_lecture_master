var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/dogs', {
      templateUrl: '/views/templates/dogs.html',
      controller: 'DogController',
      controllerAs: 'dogcon'
    })
    .when('/cats', {
      templateUrl: '/views/templates/cats.html',
      controller: 'CatController',
      controllerAs: 'catcon'
    })
    .when('/fish', {
      templateUrl: '/views/templates/fish.html',
      controller: 'FishController',
      controllerAs: 'fishcon'
    })
    .otherwise({
      redirectTo: '/dogs'
    });
}]);
