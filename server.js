const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
const {CLIENT_ORIGIN} = require('./app/config/react');


 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

 module.exports = {app};

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

 app.get('/api/*', (req, res) => {
   res.json({ok: true});
 });







// const fs = require("fs");
// let bcrypt = require('bcryptjs');
// // const bodyParser = require('body-parser');
// // app.use(bodyParser());
// const mongoose = require('mongoose');
// var moment = require('moment');
// var path = require('path');

// const User = require('./app/models/user');
// const Chore = require('./app/models/chore');
// const DailyTask = require('./app/models/DailyTask');
// const configDB = require('./app/config/database');

//const salt = "$2a$10$/l0HmW6Lmr6g/.1tseoTN.";

// mongoose.connect(configDB.url);

// Express only serves static assets in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.get('/api/chores',function(req,res){
// 	Chore.find({},function(err,chores){
// 		res.send(chores);
// 	});
// });

// // GET CHORE LIST FROM DATABASE
// app.get('/api/chores/:id', function(req, res) {
// 	let userId = req.params.id;
// 	Chore.find({parent_id: userId},function(err,chores){
// 		res.send(chores);
// 	});
// });

// //  CREATE NEW CHORE 
// app.post('/api/chore', function(req,res){
// 	Chore.create(req.body,function(err,chore){
// 		res.send(chore);
// 	});
// });

// // CREATE A DAILY TASK
// app.post('/api/dailytask', function(req,res) {
// 	DailyTask.create(req.body,function(error,dailytask){
// 		res.send(dailytask);
// 	});
// });

// // GET DAILY TASK FOR CHILD DASHBOARD
// app.get('/api/dailytask/:id/', function(req,res){
// 	let Date = moment().format("L");
// 	let childId = req.params.id; 
// 	DailyTask.find({child_id: childId},function(err,dailytask){
// 		res.send(dailytask);

// 	});
// });

// // MARK TASK COMPLETED
// app.put('/api/dailytask/:id/:bool', function(req,res) {
// 	let taskId = req.params.id;
// 	let bool = req.params.bool;
// 	DailyTask.findOneAndUpdate({_id: taskId},{$set:{completed: bool}},function(error,dailytask){
// 		res.send(dailytask);
// 	});
// });

// app.get('/api/parent_task/:id/:day', function(req,res){

// 	let childrenIDs = [];
// 	let children = [];
// 	let count = 0;
// 	let taskCount = 0;

// 	console.log('day',req.params.day);
// 	let day = req.params.day.split("-");

// 	User.find({parent_id: req.params.id}, function(err,users){
// 		users.forEach(function(user){
// 			childrenIDs.push(user._id);
// 			children.push(user);
// 		});
// 		DailyTask.find({child_id: {$in: childrenIDs},day:day[0]+"/"+day[1]+"/"+day[2] },function(err,tasks){
// 			taskCount = tasks.length;
// 			res.json(tasks);
// 		});
// 	});

// 	function checkComplete(children){
// 		count++;
// 		if(count == taskCount){
// 			res.send(children);
// 		}
// 	}
// });

// // *****************ACCOUNTS****************

// //Get ACCOUNTS
// app.get('/api/account/:id', function(req,res){
// 	let userId = req.params.id;
// 	User.find({parent_id: userId},function(error,users){
// 		res.send(users);
// 	});
// });

// //************CREATE NEW CHILD ACCOUNT********
// app.post('/api/account', function(req,res){
// 	let user = req.body;
// 	user.password = bcrypt.hashSync(user.password, salt);
// 	User.create(user,function(err,user){
// 		res.send(user);
// 	});
// });

// app.post('/api/login', function(req, res){
// 	let username = req.body.username;
// 	let password = bcrypt.hashSync(req.body.password, salt);
// 	User.findOne({username: username},function(err, user){
// 			if(err){
// 				res.send({message:err});
// 			} else if(user == null){
// 				//did not find user
// 				res.send({message:"Invalid username"});
// 			} else if(user.password != password){
// 				//found user, password did not match
// 				res.send({message:"Invalid password"});
// 			} else {
// 				//user & password matched
// 				res.send(user);
// 			}
// 		});
// });