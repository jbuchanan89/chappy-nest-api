const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const moment = require('moment')

var dailyTaskSchema = mongoose.Schema({
	name: String,
	chore_id: String,
	child_id: String,
	day: 	  {type: String, default: moment().format("L")},
	completed: {type: Boolean, default: false},
	pointValue: Number,
});

module.exports = mongoose.model('DailyTask', dailyTaskSchema);