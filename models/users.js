
var mongoose = require('mongoose');

//schema
var usersSchema = new mongoose.Schema({
	"username":String, //用户名
	"password":String, //密码
	"create_time":String, //创建时间
  
});
//索引
usersSchema.index({ "openid": 1});

//model
var users = mongoose.model("user",usersSchema);

module.exports = users;