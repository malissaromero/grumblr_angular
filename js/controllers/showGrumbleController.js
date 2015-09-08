(function(){
  angular
    .module('grumbleControllers')
    .controller('showGrumbleController', [
      '$scope',
      '$routeParams',
      '$location',
      '$http',
      'grumbleFactory',
      'commentFactory',
      showGrumbleController
    ]);

  function showGrumbleController($scope, $routeParams, $location, $http, Grumble, Comment){
    $scope.grumble = Grumble.get({id: $routeParams.id});
    this.delete = function(id){
      Grumble.delete({id: id})
      $location.path("/grumbles")
    }
    this.createComment = function(comment){
      Comment.save({grumbleId: $routeParams.id},comment, function(comment){
        vm.grumble.comments.push(comment)
        vm.comment = {}
      })
    }
  }

})();
