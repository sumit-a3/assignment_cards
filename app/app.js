'use strict';

// Declare app level module which depends on views, and components
angular.module('contentCardsApp', [
  'ngRoute',
  'contentCardsApp.view',
  'contentCardsApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
