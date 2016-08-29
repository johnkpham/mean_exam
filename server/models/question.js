var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	username: {type: String},
	text: {type: String, required: [true, 'You must enter a question.'], minlength: [15, 'The question must contain at least 15 characters.']},
	answer: {type: String, required: [true, 'You must enter an answer.'], minlength: [5, 'The answer should contain at least 5 characters']},
	fakeAnswer: {type: String, required: [true, 'You must enter a fake answer.'], minlength: [5, 'The fake answer should contain at least 5 characters']},
	fakeAnswer2: {type: String, required: [true, 'You must enter a fake answer.'], minlength: [5, 'The fake answer should contain at least 5 characters']},
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);
