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

	//add a question
	$scope.answer = function(question) {
		$location.path('/question/' + question._id + '/new_answer');
	}

	//getScore is used for retrieving a user's total score
	$scope.getScore = function() {
		DataService.getUserScore($scope.user.name).then(function(result){
			$scope.totalScore = result.data.totalScore;
		});
	}

	//postScore sends the user's score to the database at the end of the round
	$scope.postScore = function(name, score) {
		DataService.postScore(name, score).then(function(result){
			$scope.getScore();
		});
	}

	//validateAnswer
	$scope.validateAnswer = function (answer) {
		$scope.elementInfo.answerClass[answer] += " btn-warning";
		for (var i = 0; i < 4; i++) {
			$scope.elementInfo.answerClass[i] += " disabled";
		}
		//checks if there are questions of left for e.g: question 1 of 5, 2 of 5, etc.
		if ($scope.currentQuestionNo < $scope.numberOfQuestions) {
			var timer2 = $timeout(function () {
				getQuestion();
			}, 3);
		} else {
			//if no questions left, then the game ends
			$timeout(function(){
				$location.path('/endgame');
				$scope.postScore($scope.user.name, $scope.currentScore);
				$scope.getHighScore();
			}, 3);
		}
};
});
