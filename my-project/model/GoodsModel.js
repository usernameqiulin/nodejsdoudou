var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 创建文档的定义
var Goods = new Schema({
    shopname  : String,
<<<<<<< HEAD
    shopprice : String,
    date : { type: Date, default: Date.now }
=======
    shopprice       : String,
    create_date : { type: Date, default: Date.now }
>>>>>>> 03c6407366c02ffbe36f42e66881569f34a0ad05
});

// 创建model对象，与数据库中的文档（表）映射
var GoodsModel = mongoose.model('goods', Goods);
// commonJS规范(暴露接口)
module.exports = GoodsModel;