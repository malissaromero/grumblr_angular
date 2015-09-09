(function() {
  angular
    .module('grumblr')
    .controller('grumbleIndexController', ['grumbleFactory', grumbleIndexController]);

  function grumbleIndexController(grumbleFactory){
    var vm = this;
    vm.grumbles = grumbleFactory.all;
    return vm;
  }
})();
