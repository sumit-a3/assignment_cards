'use strict';

angular.module('contentCardsApp.version.CardView', [])

.directive('cardView', ['version', function(version) {
  return {
        restrict: 'E',
        templateUrl: '/views/content_cards.html',
        scope: {
          cards: '=?'
        },
        link: function ($scope, $element, attr) {
          // link function code goes here
        },
        controller: CardViewController,
        controllerAs: 'cardViewController'
      }
}])

.controller('CardViewController', ['$scope', CardViewController]);

function CardViewController($scope) {
  this.currentCard = {};
  
}

/* Function to show details of a mobile in a dialog
* @param card (object)
*/
CardViewController.prototype.showDetails = function showDetails(card) {
    this.currentCard = card;
}