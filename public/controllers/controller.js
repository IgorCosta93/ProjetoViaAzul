var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',['$scope','$http',
  function($scope,$http){
    console.log("Hello world from controller")

var refresh = function(){
    $http.get('/contactlist').success(function(response){
        console.log("I receive the data");
        $scope.contactlist = response;
        //Esse comando a seguir joga os Dados no index.html
        $scope.contact = "";
    });
};

refresh();

    $scope.addContact = function() {
      console.log($scope.contact);
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

    $scope.edit = function(id){
      console.log(id);
      $http.get('/contactlist/' + id).success(function(response){
        $scope.contact = response;
      });
    };

    $scope.update = function(id){
      console.log($scope.contact._id);
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
        refresh();
      });
    };

    $scope.deselect = function(){
      $scope.contact = "";
    };

}]);
