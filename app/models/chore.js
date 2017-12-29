const mongoose = require('mongoose');

var choreSchema = mongoose.Schema({
	name	: String,
	pointValue: Number,
	parent_id: String
});

module.exports = mongoose.model('Chore', choreSchema);