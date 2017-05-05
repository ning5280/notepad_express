
var mongoose = require('mongoose');

//schema
var notepadSchema = new mongoose.Schema({
	"id":String, //便签id
	"openid":String, //openid 用户唯一识别
	"title":String,//标题
	"create_time":String,
	"content":String, //创建时间
  	"important":Number, //重要程度
});
//索引
notepadSchema.index({ "id": 1,'openid':1});

//model
var notepads = mongoose.model("notepad",notepadSchema);

module.exports = notepads;