app.factory('playFactory', function($http) {
	var factory = {};

	//get all questions
	factory.index = function(callback) {
		$http.get('/questions').success(function(output) {
			callback(output);
		});
	}

	// //get all answers
	// factory.show = function(id, callback) {
	// 	$http.get('/answers/' + id).success(function(output) {
	// 		callback(output);
	// 	})
	// }
	//
	// //get all fake answers
	// factory.show = function(id, callback) {
	// 	$http.get('/fakeAnswers/' + id).success(function(output) {
	// 		callback(output);
	// 	})
	// }
	// //get all fake answers II
	// factory.show = function(id, callback) {
	// 	$http.get('/fakeAnswer2/' + id).success(function(output) {
	// 		callback(output);
	// 	})
	// }

	return factory;
});
