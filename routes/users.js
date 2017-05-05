var express = require('express');
var router = express.Router();

var usersModel = require('../models/users.js')
/* GET users listing. */
router.get('/login', function(req, res, next) {
	res.send(1111);
	var code = req.body.code;
  Kecheng.find({},function(err,result){
        
    });
});

module.exports = router;
