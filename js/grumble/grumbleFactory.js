(function() {
  angular
    .module('grumbleServices')
    .factory('grumbleFactory', ['$firebaseObject', '$firebaseArray', grumbleFactory]);

  function grumbleFactory($firebaseObject, $firebaseArray){
    var ref = new Firebase('https://grumblr-angular.firebaseio.com/grumbles')
    var grumbles = $firebaseArray(ref)
    var Grumble = {
      all: grumbles,
      create: function( grumble, callback ){
        grumbles.$add(grumble).then(function(ref) {
      	  var id = ref.key();
      	  callback(id)
      	})
      },
      get: function (grumble, callback) {
        var child = ref.child(grumble.id);
      	var found = $firebaseObject(child);
      	if(typeof callback == "function") callback(found)
        return found
      },
      delete: function(grumble, callback){
	      return grumbles.$remove(grumbles.$getRecord(grumble.id))
      }
    }
    return Grumble
  }
})();
