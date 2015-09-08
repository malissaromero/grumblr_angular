(function(){
  angular
    .module('grumbleControllers')
    .controller('showGrumbleController', [
      '$routeParams',
      '$location',
      '$http',
      'grumbleFactory',
      'commentFactory',
      showGrumbleController
    ]);

  function showGrumbleController($routeParams, $location, $http, Grumble, Comment){
    var vm = this;
    vm.grumble = Grumble.get({id: $routeParams.id});
    vm.delete = function(id){
      Grumble.delete({id: id})
      $location.path("/grumbles")
    }
    vm.createComment = function(comment){
      Comment.save({grumbleId: $routeParams.id},comment, function(comment){
        vm.grumble.comments.push(comment)
        vm.comment = {}
      })
    }
  }

})();
