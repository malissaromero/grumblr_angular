(function(){
  angular
    .module('grumblr')
    .controller('grumbleShowController', [
      '$routeParams',
      '$location',
      '$http',
      'grumbleFactory',
      'commentFactory',
      grumbleShowController
    ]);

  function grumbleShowController($routeParams, $location, $http, Grumble, Comment){
    var vm = this;
    vm.grumble = Grumble.get({id: $routeParams.id});
    vm.comments = [{authorName: "John Smith", content: "thing1"}, {authorName: "Tony the Pony", content: "thing2"}]
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
