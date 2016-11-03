app.controller('AppCtrl',['$scope', '$location','$http', function($scope, $location, $http){

  var loadData = function(){
    $http.get('/contactlist').success(function(res) {
      $scope.contacts = res;
        $scope.contact = "";
    });
  };

  loadData();

  $scope.create = function() {
    $http.post('/contactlist', $scope.contact).success(function(response){
      loadData();
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

  $scope.clean = function(){
    $scope.contact = "";
  };

}]);
