//server API routing
// var customers = require('./../controllers/customers.js');
var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app) {

	//get all questions
	app.get('/questions', function(req, res) {
		questions.index(req, res);
	});

	//add a question
	app.post('/questions', function(req, res) {
		questions.create(req, res);
	});

	//get single question
	app.get('/question/:id', function(req, res) {
		questions.show(req, res);
	});

	//add an answer
	app.post('/question/:id/new_answer', function(req, res) {
		answers.create(req, res);
	});

}
