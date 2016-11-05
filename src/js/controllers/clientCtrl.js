app.controller('clientCtrl',['$scope', '$location','$http', function($scope, $location, $http){

  var loadData = function(){
    $http.get('/clientlist').success(function(res) {
      $scope.clients = res;
        $scope.client = "";
    });
  };

  loadData();

  $scope.create = function() {
    $http.post('/clientlist', $scope.client).success(function(response){
      loadData();
    });
  };

  $scope.remove = function(id){
    $http.delete('/clientlist/' + id).success(function(response){
      loadData();
    });
  };

  $scope.edit = function(id){

    $http.get('/clientlist/' + id).success(function(response){
      $scope.client = response[0];
     });
  };

  $scope.clean = function(){
    $scope.client = "";
  };

}]);
