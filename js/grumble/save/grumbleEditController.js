(function(){
angular
  .module('grumbleControllers')
  .controller('editGrumbleController', [
    "$location",
    "$routeParams",
    "grumbleFactory",
    editGrumbleController
  ]);


  function editGrumbleController($location, $routeParams, Grumble){
    var vm = this;
    var grumble = Grumble.get({id: $routeParams.id});
    vm.grumble = grumble;
    vm.save = function(){
      grumble.$save();
      $location.path("/grumbles/" + grumble.$id)
    }
  }
})();
