var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', configRouter]);

function configRouter ($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'AppCtrl',
      // controllerAs: '$ctrl',
      templateUrl: 'home'
    });
}

app.controller('AppCtrl',['$scope', '$location','$http', function($scope, $location, $http){

  var refresh = function(){
    $http.get('/contactlist').success(function(res) {
      $scope.contacts = res;
        $scope.contact = "";
    });
  };

  refresh();

  $scope.addContact = function() {
    $http.post('/contactlist', $scope.contact).success(function(response){
      refresh();
    });
  };

  $scope.remove = function(id){
    $http.delete('/contactlist/' + id).success(function(response){
      refresh();
    });
  };

  $scope.edit = function(id){

    $http.get('/contactlist/' + id).success(function(response){
      $scope.contact = response[0];
     });
  };

  $scope.deselect = function(){
    $scope.contact = "";
  };

}]);
