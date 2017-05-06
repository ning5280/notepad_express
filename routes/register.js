var express = require('express');
var router = express.Router();

var usersModel = require('../models/users.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	res.render('register');

});

router.post('/', function(req, res, next) {
	
	var username = req.body.username;
	var password = req.body.password;

	usersModel.find({'username':username},function(err,result){
		if(err){return res.send(err);}
	
		if(result[0]){
			return res.send('您的账号已经注册');
		}
		// res.send('可以注册');
		usersModel.create({'username':username,'password':password,create_time:new Date()},function(req,result1){
			if(err){res.send(err);}
			return res.send('注册成功');
		})
	})


});

module.exports = router;
