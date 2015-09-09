(function() {
  angular
    .module('grumblr')
    .factory('grumbleFactory', ["$firebase", grumbleFactory]);

  function grumbleFactory($firebase){
    var grumbles = $firebase.data;
    var Grumble = {
      all: grumbles,
      create: function( grumble, callback ){
        grumbles.$add(grumble).then(function(response) {
      	  var id = response.key();
      	  callback(id);
      	})
      },
      get: function (grumble, callback) {
      	var found = $firebase.get(grumble.id);
      	if(typeof callback == "function") callback(found);
        return found;
      },
      delete: function(grumble, callback){
	      return grumbles.$remove(grumbles.$getRecord(grumble.id));
      }
    }
    return Grumble
  }
})();
