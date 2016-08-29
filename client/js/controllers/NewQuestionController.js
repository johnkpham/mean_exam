app.controller('NewQuestionController', function($scope, $location, userFactory, questionFactory) {

	//on load, if there isn't a username, redirect to login
	$scope.username = userFactory.username;
	if ($scope.username == '') {
		$location.path('/index');
	}

	$scope.newQuestion = {};

	//callback to handle server response after adding question
	function checkQuestion(data) {
		//if there are errors, display them
		$scope.errors = [];
		if (data['errors']) {
			for (var i in data['errors']) {
				$scope.errors.push(data['errors'][i].message);
			}
		} else {
			//otherwise, redirect to home page
			$location.path('/');
		}
	}

	//add new question
	$scope.add = function() {
		$scope.newQuestion.username = $scope.username;
		questionFactory.add($scope.newQuestion, checkQuestion);
	}

});