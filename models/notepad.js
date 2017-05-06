
var mongoose = require('mongoose');

//schema
var notepadSchema = new mongoose.Schema({
	"title":String,//标题
	"create_time":String,
	"content":String, //创建时间
	"username":String

});
//索引
notepadSchema.index({ "title": 1,"username":1});

//model
var notepads = mongoose.model("notepad",notepadSchema);

module.exports = notepads;