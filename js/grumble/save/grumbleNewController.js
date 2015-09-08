(function(){
  angular
    .module('grumbleControllers')
    .controller('newGrumbleController', [
      "$location",
      "grumbleFactory",
      newGrumbleController
    ]);

  function newGrumbleController($location, Grumble){
    var vm = this;
    vm.save = function(){
      Grumble.create(vm.grumble, function(id) {
        $location.path("/grumbles/" + id);
      })
    }
  }
})();
