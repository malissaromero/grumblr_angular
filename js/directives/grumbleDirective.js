(function(){
  angular
    .module('grumbleDirectives')
    .directive('grumble', function(){
      return {
        templateUrl: "views/grumbles/show.html",
        replace: true
      }
    });
})();
