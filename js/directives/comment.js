(function(){
  var directives = angular.module('commentDirectives',[]);
  directives.directive('commentShow', ['Grumble', 'Comment', '$routeParams', '$location', function(Grumble, Comment, $routeParams, $location){
    return {
      templateUrl: "views/comments/_comment.html"
    }
  }]);
})();
