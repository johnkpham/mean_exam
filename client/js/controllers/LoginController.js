app.controller('LoginController', function($scope, userFactory) {
	$scope.newUser = '';


	$scope.login = function() {
		userFactory.login($scope.newUser)
	}
});