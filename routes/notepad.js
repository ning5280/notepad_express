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
	 	return res.render('notepadList',{"notepadList":result});
	 })
 
});

router.get('/add', function(req, res, next) {
	if(!req.session.userInfo){
		return res.send('请先登陆');
	}
	 res.render('addNotepad');
 
});

router.post('/add', function(req, res, next) {
	if(!req.session.userInfo){
		return res.send('请先登陆');
	}
	var title = req.body.title;
	var content = req.body.content;
	var username = req.body.username;
	notepadModel.create({title:title,content:content,username:username,create_time:new Date()},function(err){
		if(err){return res.send(err);}
		return res.send('添加成功');
	}) 
});

router.get('/del/:id', function(req, res, next) {
	if(!req.session.userInfo){
		return res.send('请先登陆');
	}
	var id = req.params.id;
	 notepadModel.remove({"_id":id},function(){
        res.send("删除成功");
    });
 
});

router.get('/edit/:id', function(req, res, next) {
	if(!req.session.userInfo){
		return res.send('请先登陆');
	}
	var id = req.params.id;
	var username = req.session.username;
	 notepadModel.find({username:username,_id:id},function(err,result){
	 	if(!result[0]){return res.send('没有该文章');}
	 	console.log(result);
	 	return res.render('editNotepad',{"notepadInfo":result[0]});
	 })
 
});

router.post('/edit/:id', function(req, res, next) {
	if(!req.session.userInfo){
		return res.send('请先登陆');
	}
	var title = req.body.title;
	var content = req.body.content;
	var username = req.body.username;
	var _id = req.body._id;
	notepadModel.update({_id:_id},{title:title,content:content,username:username,create_time:new Date()},function(err){
		if(err){return res.send(err);}
		return res.send('修改成功');
	}) 
});



module.exports = router;
