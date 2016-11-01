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
          //Esse comando a seguir joga os Dados no index.htm
          $http.get('/contactlist').success(function(res) {
            $scope.contacts = res;
              $scope.contact = "";
      });
  };

  refresh();

  $scope.addContact = function() {
    //O comando a baixo diz qual comando chamar no server
    $http.post('/contactlist', $scope.contact).success(function(response){
      console.log(response);
      refresh();
    });
  };

  $scope.remove = function(id){
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response){
      console.log(response);
      refresh();
    });
  };

  // $scope.edit = function(id){
  //   console.log(id);
  //   $http.post('/contactlist/' + id).success(function(response){
  //     $scope.contact = response;
  //   });
  // };

  $scope.edit = function(id){

    $http.get('/contactlist/' + id).success(function(response){
      console.log('xxxxxx', response[0]);
      $scope.contact = response[0];
     });
  };

  $scope.deselect = function(){
    $scope.contact = "";
  };

}]);
