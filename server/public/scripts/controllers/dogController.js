app.controller("DogController", ["$scope", "$http", "DataFactory", function($scope, $http, DataFactory) {
  console.log('dog controller running');

  var key = "cb428352f08530853b4f6449efb7de62";
  var baseURL = 'http://api.petfinder.com/';
  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
}]);
