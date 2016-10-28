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

  $http.get('/contactlist').success(function(res) {
    $scope.contacts = res;
  });

  $scope.addContact = function() {
    //O comando a baixo diz qual comando chamar no server
    $http.post('/contactlist', $scope.contact).success(function(response){
      console.log(response);
    });
  };

  $scope.remove = function(id){
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response){
      console.log(response);
    });
  };

  // $scope.edit = function(id){
  //   console.log(id);
  //   $http.post('/contactlist/' + id).success(function(response){
  //     $scope.contact = response;
  //   });
  // };

  $scope.edit = function(id){
    console.log($scope.contact._id);
    // $http.post('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
    //   refresh();
    // });
  };

  $scope.deselect = function(){
    $scope.contact = "";
  };

}]);
