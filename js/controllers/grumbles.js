(function() {
  angular.module('grumblr')
  .controller('grumblesController', function() {
    this.grumbles = [
      {
        authorName: "Adam",
        content: "Lorem ipusm dolar sit amet.",
        title: "Test Post!",
        photoUrl: "http://placecage.com/200/300"
      }
    ];
  });

})();
