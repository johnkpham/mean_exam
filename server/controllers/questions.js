var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function() {
	return {

		//get all questions
		index: function(req, res) {
			Question.find({}).populate('answers').exec(function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		//add a question:
		create: function(req, res) {
			var question = new Question(req.body);
			question.save(function(err) {
				if (err) {
					res.json(err);
				} else {
					//need this to invoke callback for redirect on client side
					res.json({'status': 'saved'});
				}
			})
		},

		//show a question
		show: function(req, res) {
			Question.findOne({_id: req.params.id}).populate('answers').exec(function(err, question) {
				if (err) {
					res.json(err);
				} else {
					res.json(question);
				}
			})
		}
	}
})();