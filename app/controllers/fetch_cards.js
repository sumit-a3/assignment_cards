'use strict';

angular.module('contentCardsApp.view', [
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'contentCardsAppController'
  });
}])

.controller('contentCardsAppController', [
	'$scope',
	contentCardsAppController
]);

function contentCardsAppController($scope) {
	$scope.mobiles = [{
		name: 'Nokia',
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VOIWQ5zFUwfORIkvi-HcDcp5KMQFeXEzy-SuNjwmInxau0VX',
		description: 'Nokia Windows Phone',
		fullDescription: 'Nokia, the former king of mobile devices is all set to enter the ... in the form of Sony Xperia Z5 Premium in addition to four other smartphones.'
	},{
		name: 'Apple',
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSrWNnujvba5Y8_rzv406hhn_EEZgFpakm8CtDSVf4rX9ebPs1w',
		description: 'Apple iOS Phone',
		fullDescription: 'Apple only just launched its iPhone 7 a few months ago, but many eyes are already turning to next years model, the iPhone 8, which is expected to be Apples biggest launch in years'

	},{
		name: 'Sony',
		imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6QlvF7groMR6OgBQPulV5MZp0Jg9PyFPkttOY3RbMsouJwS0DLA',
		description: 'Sony Experia Phone',
		fullDescription: 'Nokia, the former king of mobile devices is all set to enter the ... in the form of Sony Xperia Z5 Premium in addition to four other smartphones.'
	},{
		name: 'Google',
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMoRVNRL0TCIoYpDRmpP1yE706LPKTPp4AMh45RKSL-lti-ShQ',
		description: 'Google Nexus Phone',
		fullDescription: 'Nokia, the former king of mobile devices is all set to enter the ... in the form of Sony Xperia Z5 Premium in addition to four other smartphones.'

	},{
		name: 'Oppo',
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFi27Pz2xD1M9aRCdOGl87R612Z0w8bvErc3B6yOKscxajuF5V',
		description: 'Oppo Android Phone',
		fullDescription: 'Nokia, the former king of mobile devices is all set to enter the ... in the form of Sony Xperia Z5 Premium in addition to four other smartphones.'
	},{
		name: 'HTC',
		imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAHGpBF6imfPjM8AYnnBMemRkQ6sdcIrlfT608nJWCkrm4z3hmEw',
		description: 'HTC Explorer Phone',
		fullDescription: 'Nokia, the former king of mobile devices is all set to enter the ... in the form of Sony Xperia Z5 Premium in addition to four other smartphones.'
	},{
		name: 'Google Tablet',
		imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCncqPEWrMq2Dh80lCk91KiWoGKu6R1u5qjeJLBc5Ei8wc9HT4',
		description: 'Google Tablet',
		fullDescription: 'Nokia, the former king of mobile devices is all set to enter the ... in the form of Sony Xperia Z5 Premium in addition to four other smartphones.'
	},{
		name: 'Xiaomi',
		imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaN9HdPV4pbGFmqYCYRtEI0ZzcSyXKmjBxZ3PMmV-rK6GvpBsBjQ',
		description: 'Xiaomi Android Phone',
		fullDescription: 'Nokia, the former king of mobile devices is all set to enter the ... in the form of Sony Xperia Z5 Premium in addition to four other smartphones.'
	}];
}