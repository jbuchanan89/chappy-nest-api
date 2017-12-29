const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	username: String,
    password: String,
    type: {type: String, default:'parent'}, // parent or child
    parent_id: {type: String, default: ''}, // tie a child to a parent
    avatar: {type: String, default: '1'}
});

module.exports = mongoose.model('User', userSchema);