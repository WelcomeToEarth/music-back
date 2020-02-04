var express = require('express');
var router = express.Router();
var userDao=require('../dao/UserDao')
/* GET users listing. */
router.get('/', function(req, res) {
  userDao.findAllUsers(function (users) {
    console.log(users,'user')
    res.json(users)
  })
});

router.post('/',function (req,res) {
    let user=req.body
    userDao.addUser(user,function (nb) {
      res.json(nb)
    })
})
router.delete('/:id',function (req,res) {
    let id=req.params.id;
    userDao.deleteUser(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;
