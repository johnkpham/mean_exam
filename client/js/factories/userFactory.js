app.factory('userFactory', function($http, $location) {
	var factory = {};
	factory.username = '';

	//add username
	factory.login = function(username) {
		if (username != '') {
			factory.username = username;
			$location.path('/');
		}
	}

	//remove username (redirect to login page)
	factory.logout = function() {
		factory.username = '';
		$location.path('/index');
	}

	//check that username is entered (otherwise redirect)
	factory.checkUser = function() {
		if (factory.username == '') {
			$location.path('/index');
		}
	}

	//get score & percentage
	factory.like = function(score, callback) {
		$http.get('/users/' + user._id + '/score').success(function(output) {
		});
	}
	return factory;
});
