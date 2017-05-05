
var mongoose = require('mongoose');

//schema
var usersSchema = new mongoose.Schema({
	"wx_name":String, //微信名
	"openid":String, //openid 用户唯一识别
	"create_time":String, //创建时间
  	"share_word":String, //便签名
});
//索引
usersSchema.index({ "openid": 1});

//model
var users = mongoose.model("user",usersSchema);

module.exports = users;