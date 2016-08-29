var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: 'static/partials/login.html'
		})
        .when('/', {
            templateUrl: 'static/partials/home.html'
        })
        .when('/new_question', {
            templateUrl: 'static/partials/new_question.html'
        })
		.when('/play', {
			templateUrl: 'static/partials/play.html'
		})
		.when('/result', {
			templateUrl: 'static/partials/result.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
