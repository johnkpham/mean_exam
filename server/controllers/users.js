var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {

		//get all users
		index: function(req, res) {
			User.find({}).populate('scores').exec(function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},

		//add a user:
		create: function(req, res) {
			var user = new User(req.body);
			user.save(function(err) {
				if (err) {
					res.json(err);
				} else {
					//need this to invoke callback for redirect on client side
					res.json({'status': 'saved'});
				}
			})
		},

		//show a user
		show: function(req, res) {
			User.findOne({_id: req.params.id}).populate('answers').exec(function(err, user) {
				if (err) {
					res.json(err);
				} else {
					res.json(question);
				}
			})
		}
	}
})();
