app.controller('QuestionController', function($scope, $location, $routeParams, userFactory, questionFactory, answerFactory) {

	//on load, if there isn't a username, redirect to login
	$scope.username = userFactory.username;
	if ($scope.username == '') {
		$location.path('/index');
	}

	$scope.question = {};

	//set question
	function setQuestion(data) {
		$scope.question = data;
	}

	//show question
	questionFactory.show($routeParams.id, setQuestion);


	//go to answer page
	$scope.goAnswer = function() {
		$location.path('/question/' + $routeParams.id + '/new_answer');
	}

	//like an answer
	$scope.like = function(answer) {
		answerFactory.like(answer, setQuestion);
	}



});