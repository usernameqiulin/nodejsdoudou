var express = require('express');
var router = express.Router();
var md5 = require("md5");
var UserModel = require("../model/UserModel");
var GoodsModel = require("../model/GoodsModel");

/* GET home page. */


router.get('/', function(req, res){
	res.render("login", {});
})
router.get('/after', function(req, res){
	res.render("after", {});
})
router.get('/top', function(req, res){
	res.render("top", {});
})
router.get('/navmenu', function(req, res){
	res.render("navmenu", {});
})
router.get('/small', function(req, res){
	res.render("small", {});
})
router.get('/new', function(req, res){
	res.render("new", {});
})
router.get('/shoptab', function(req, res){
	var pageNo = parseInt(req.query.pageNo || 1);
	var count = parseInt(req.query.count || 5);

	var query = GoodsModel.find({}).skip((pageNo-1)*count).limit(count).sort({date:-1});
	query.exec(function(err,results){
		var numbers = GoodsModel.find({}, function(err, docs){
		 numbers = docs.length;
		res.render("shoptab", {title: results,pageNo:pageNo,count:count,numbers:numbers});
	});
	});
})

router.get('/newcontent', function(req, res){
	res.render("newcontent", {});
})
router.get('/api/goods_del', function(req, res){
	GoodsModel.findByIdAndRemove({_id:req.query.gid},function(err){
		var result = {
			status: 1,
			message:"商品删除成功"
		};
		if(err){
			result.status = -119;
			tesult.message = "删除失败";
		}
		res.send(result);
	})
})

router.post("/api/login", function(req, res) {
	var username = req.body.username;
	var psw = md5(req.body.psw);

	var result = {
		status: 1,
		message: "登录成功"
	}
	UserModel.find({username: username, psw: psw}, function(err, docs){
		if(!err && docs.length > 0) {
			console.log("登录成功");
			res.send(result);
		} else {
			console.log("登录失败，请检查您的用户名或者密码");
			result.status = -109;
			result.message = "登录失败，请检查您的用户名或者密码"
			res.send(result);
		}
	})
})
router.post("/api/new", function(req, res){
	var result = {
		status: 1,
		message: "已保存到数据库"
	}
	// express post参数接收。
	// 所有的post参数都被包装到req.body中
	var shopname = req.body.shopname;
	var shopprice = req.body.shopprice;
	
	 // GoodsModel.find({shopname: shopname,shopprice: shopprice}, function(err, docs) {
 	// 	 var um = new GoodsModel();
 	// 	 alert(um.shopname);
 	// 	 alert(um.shopprice);
 	// })




		// 保存功能 (mongodb的调用使用mongoose组件)
		var um = new GoodsModel();
		um.shopname = shopname;
		um.shopprice = shopprice;
		um.save(function(err){
			if(!err) {
				console.log("已保存到数据库");
				result.status = -110;
				result.message = "已保存到数据库";
				res.send(result);
			} 
		})

		

	})
router.post("/api/shoptab", function(req, res){
	var souname = req.body.souname;

	Model.find({username: new RegExp("商品")},function(err,results){
	res.render("shoptab", {title: results});
	});

/*
	GoodsModel.find({},function(err,results){
	res.render("shoptab", {title: results});
	});
*/

		/*var query = GoodsModel.collection({shopname,shopprice},function(err,docs){
			alert(docs);

		});*/


	})




module.exports = router;
