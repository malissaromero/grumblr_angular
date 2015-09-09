(function(){
  angular
    .module('grumblr')
    .factory('$firebase', ['$firebaseObject', '$firebaseArray', $firebase]);

  function $firebase($firebaseObject, $firebaseArray){
    var connection = new Firebase('https://amber-torch-5834.firebaseio.com/');
    var data = $firebaseArray(connection);
    return{
      connection: connection,
      data: data,
      array: $firebaseArray,
      object: $firebaseObject,
      get: function(id){
        return $firebaseObject(connection.child(id));
      }
    }
  }
})();
