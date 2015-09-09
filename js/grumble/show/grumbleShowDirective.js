(function(){
  angular
    .module('grumblr')
    .directive('grumbleShow', grumbleShow);

  function grumbleShow(){
    return {
      templateUrl: "js/grumble/show/grumbleShowView.html",
      restrict: "E",
      replace: true,
      scope: {
        grumble: "=",
        vm: "="
      }
    }
  }
})();
