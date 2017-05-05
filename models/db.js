var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/notepad');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});

module.exports = db;