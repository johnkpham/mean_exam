app.controller('HomeController', function($scope, $location, userFactory, questionFactory) {

	//on load, if there isn't a username, redirect to login
	$scope.username = userFactory.username;
	if ($scope.username == '') {
		$location.path('/index');
	}

	$scope.users = [];

	//callback to set all users
	function setQuestions(data) {
		$scope.questions = data;
	}

	questionFactory.index(setQuestions);

	//show a score
	$scope.show = function(score) {
		$location.path('/score/' + score._id);
	}

	//add a question
	$scope.answer = function(question) {
		$location.path('/question/' + question._id + '/new_answer');
	}


});
