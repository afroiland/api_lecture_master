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
    .when('/reptiles', {
      templateUrl: '/views/templates/reptiles.html',
      controller: 'ReptileController',
      controllerAs: 'repcon'
    })
    .otherwise({
      redirectTo: '/dogs'
    });
}]);
