var express = require('express');
var router = express.Router();
var singerDao = require('../dao/SingerDao')
    /* GET users listing. */
router.get('/', function(req, res) {
    singerDao.findAllSingers(function(singers) {
        console.log(singers, 'singers')
        res.json(singers)
    })
});

router.post('/', function(req, res) {
    let singer = req.body
    singerDao.addSinger(singer, function(nb) {
        res.json(nb)
    })
})
router.delete('/:id', function(req, res) {
    let id = req.params.id;
    singerDao.deleteSinger(id, function(obj) {
        res.json(obj)
    })
})

module.exports = router;