(function() {
  angular
    .module('grumbleControllers')
    .controller('grumblesController', ['grumbleFactory', grumblesController]);

  function grumblesController(grumbleFactory){
    var vm = this;
    vm.grumbles = grumbleFactory.all;
    return vm;
  }
})();
