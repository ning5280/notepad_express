var express = require('express');
var router = express.Router();

var usersModel = require('../models/users.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	res.render('login');

});

router.post('/', function(req, res, next) {

	
	var username = req.body.username;
	var passowrd = req.body.password;

	usersModel.find({'username':username},function(err,result){
			var userInfo = result[0];
			if(password==userInfo.password){
				req.session.userInfo = userInfo;
				res.send('登录成功');
			}
	})


});

module.exports = router;
