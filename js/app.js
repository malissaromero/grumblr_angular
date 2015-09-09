'use strict';

(function() {
  angular
  .module('grumblr', [
    'ngRoute',
    'firebase',
    'ngResource'
  ])
  .config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider
      .when("/grumbles", {
        templateUrl: 'views/grumbles/index.html',
        controller: 'grumbleIndexController',
        controllerAs: 'vm'
      })
      .when("/grumbles/new", {
        templateUrl: 'views/grumbles/save.html',
        controller: 'grumbleNewController',
        controllerAs: 'vm'
      })
      .when("/grumbles/:id", {
        templateUrl: 'views/grumbles/show.html',
        controller: 'grumbleShowController',
        controllerAs: 'vm'
      })
      .when("/grumbles/:id/edit", {
        templateUrl: 'views/grumbles/save.html',
        controller: 'grumbleEditController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: "/grumbles"
      })
    }
  ]);
})()
