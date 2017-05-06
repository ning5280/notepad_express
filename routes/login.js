var express = require('express');
var router = express.Router();

var usersModel = require('../models/users.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	res.render('login');

});

router.post('/', function(req, res, next) {

	
	let username = req.body.username;
	let passowrd = req.body.password;

	usersModel.find({'username':username},function(err,res){
			res.send(req.err);
	})


});

module.exports = router;
