(function(){
  angular
    .module('grumblr')
    .controller('grumbleNewController', [
      "$location",
      "grumbleFactory",
      grumbleNewController
    ]);

  function grumbleNewController($location, Grumble){
    var vm = this;
    vm.save = function(){
      Grumble.create(vm.grumble, function(id) {
        $location.path("/grumbles/" + id);
      })
    }
  }
})();
