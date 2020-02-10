var express = require('express');
var router = express.Router();
var singerDao = require('../dao/SingerDao')
var ablumDao = require('../dao/AblumDao')
var userDao = require('../dao/UserDao')

//  登录 
router.post('/login', function(req, res) {
    var body = req.body;
    console.log(body)
        //查找
    userDao.findUser(body, function(user) {
        res.json({
            code: 0,
            msg: "success",
            user: user
        })
    })
})

router.post('/register', function(req, res) {
    let user = req.body
    userDao.addUser(user, function(nb) {
        res.json(nb)
    })
})

// 获取歌手列表
router.get('/singerList', function(req, res) {
    singerDao.findAllSingers(function(singers) {
        console.log(singers, 'singers')
        res.json(singers)
    })
});
// 获取专辑列表
router.get('/ablumList', function(req, res) {
    ablumDao.findAllAblums(function(ablums) {
        console.log(ablums, 'ablums')
        res.json(ablums)
    })
});
module.exports = router;