app.controller('providerCtrl',['$scope', '$location','$http', function($scope, $location, $http){

  var loadData = function(){
    $http.get('/providerlist').success(function(res) {
      $scope.providers = res;
        $scope.provider = "";
    });
  };

  loadData();

  $scope.create = function() {
    $http.post('/providerlist', $scope.provider).success(function(response){
      loadData();
    });
  };

  $scope.remove = function(id){
    $http.delete('/providerlist/' + id).success(function(response){
      loadData();
    });
  };

  $scope.edit = function(id){

    $http.get('/providerlist/' + id).success(function(response){
      $scope.provider = response[0];
     });
  };

  $scope.clean = function(){
    $scope.provider = "";
  };

}]);
