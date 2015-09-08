(function(){
  angular
    .module('grumbleRouter', [])
    .config([
      '$routeProvider',
      function($routeProvider){
        $routeProvider
        .when("/grumbles", {
          templateUrl: 'views/grumbles/index.html',
          controller: 'grumblesController',
          controllerAs: 'grumblesCtrl'
        })
        .when("/grumbles/new", {
          templateUrl: 'views/grumbles/edit.html',
          controller: 'newGrumbleController',
          controllerAs: 'newGrumbleCtrl'
        })
        .when("/grumbles/:id", {
          templateUrl: 'views/grumbles/show.html',
          controller: 'showGrumbleController',
          controllerAs: 'grumbleCtrl'
        })
        .when("/grumbles/:id/edit", {
          templateUrl: 'views/grumbles/edit.html',
          controller: 'editGrumbleController',
          controllerAs: 'grumbleCtrl'
        })
        .otherwise({
          redirectTo: "/grumbles"
        })
      }
    ])
})();
