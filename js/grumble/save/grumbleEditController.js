(function(){
angular
  .module('grumblr')
  .controller('grumbleEditController', [
    "$location",
    "$routeParams",
    "grumbleFactory",
    grumbleEditController
  ]);


  function grumbleEditController($location, $routeParams, Grumble){
    var vm = this;
    var grumble = Grumble.get({id: $routeParams.id});
    vm.grumble = grumble;
    vm.save = function(){
      grumble.$save();
      $location.path("/grumbles/" + grumble.$id)
    }
  }
})();
