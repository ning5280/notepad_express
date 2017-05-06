var express = require('express');
var router = express.Router();

var usersModel = require('../models/users.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	return res.render('login');

});

router.post('/', function(req, res, next) {

	
	var username = req.body.username;
	var password = req.body.password;

	usersModel.find({'username':username},function(err,result){
			var userInfo = result[0];
			if(!userInfo){
				return res.send('用户名密码错误');
			}
			if(password==userInfo.password){
				req.session.userInfo = userInfo;
				return res.send('登录成功');
			}
	})


});

module.exports = router;
