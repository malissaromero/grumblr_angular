(function(){
angular
  .module('grumbleControllers')
  .controller('editGrumbleController', [
    "$scope",
    "$location",
    "$routeParams",
    "grumbleFactory",
    editGrumbleController
  ]);


  function editGrumbleController($scope, $location, $routeParams, Grumble){
    var grumble = Grumble.get({id: $routeParams.id});
    $scope.grumble = grumble;
    this.update = function(){
      grumble.$save();
      $location.path("/grumbles/" + grumble.$id)
    }
  }
})();
