(function() {
  angular
    .module('grumblr')
    .controller('grumblesController', ['grumbleFactory', grumblesController]);

  function grumblesController(grumbleFactory){
    var vm = this;
    vm.grumbles = grumbleFactory.all;
    return vm;
  }
})();
