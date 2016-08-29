app.factory('questionFactory', function($http) {
	var factory = {};

	//get all questions
	factory.index = function(callback) {
		$http.get('/questions').success(function(output) {
			callback(output);
		});
	}

	//get single question
	factory.show = function(id, callback) {
		$http.get('/question/' + id).success(function(output) {
			callback(output);
		})
	}

	//add a new question
	factory.add = function(question, callback) {
		$http.post('/questions', question).success(function(output) {
			callback(output);
		});
	}

	return factory;
});