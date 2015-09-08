(function(){
  angular
    .module('grumbleDirectives')
    .directive('grumbleEdit', function(){
      return {
        templateUrl: "js/grumble/save/grumbleSaveView.html",
        replace: true,
        scope: {
          grumble: "=",
          vm: "="
        }
      }
    });
})();
