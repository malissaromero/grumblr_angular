(function() {
  angular
    .module('grumbleControllers')
    .controller('grumblesController', ['grumbleFactory', grumblesController]);

  function grumblesController(grumbleFactory){
    var self = this;
    self.grumbles = grumbleFactory.all;
    return self;
  }
})();
