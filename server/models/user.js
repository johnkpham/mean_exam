var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: {type: String},
	text: {type: String, required: [true, 'Please enter a name.'], minlength: [10, 'The field must contain at least 10 characters.'], unique: [true]},
	questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
	score: {type: Number},
	percentage: [{type: mongoose.Schema.Types.ObjectId, ref: 'Score'/'Question'}]
}, {timestamps: true});

mongoose.model('Question', UserSchema);
