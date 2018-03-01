var express = require('express');
var router = express.Router();
var md5 = require("md5");
var UserModel = require("../model/UserModel");

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
	res.render("shoptab", {});
})
router.get('/newcontent', function(req, res){
	res.render("newcontent", {});
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



module.exports = router;
