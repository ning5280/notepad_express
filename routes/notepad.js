var express = require('express');
var router = express.Router();

var notepadModel = require('../models/notepad.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
	if(!req.session.userInfo){
		return res.send('请先登陆');
	}
	var username = req.session.username;
	 notepadModel.find({username:username},function(err,result){
	 	return res.render('notepadList',result);
	 })
 
});

router.get('/add', function(req, res, next) {
	if(!req.session.userInfo){
		return res.send('请先登陆');
	}
	 res.render('addNotepad');
 
});

router.post('/add', function(req, res, next) {
	var title = req.body.title;
	var content = req.body.content;
	notepadModel.create({title:title,content:content,create_time:new Date()},function(err){
		if(err){return res.send(err);}
		return res.send('添加成功');
	}) 
});
module.exports = router;
