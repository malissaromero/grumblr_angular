(function(){
  angular
    .module('grumblr')
    .directive('grumbleSave', function(){
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
