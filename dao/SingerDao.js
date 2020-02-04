const mogoose = require('mongoose')

let singerModel = mogoose.model("singer")

function addSinger(singer, callback) {
    singerModel.create(singer, function(err, newSingerDoc) {
        if (!err) callback(newSingerDoc.toObject())
    })
}

function findAllSingers(callback) {
    singerModel.find({}).exec(function(err, singers) {
        if (!err) callback(singers)
    })
}

function deleteSinger(id, callback) {
    singerModel.findByIdAndRemove(id, function(err) {
        if (!err) callback({})
    })
}

module.exports = { addSinger, findAllSingers, deleteSinger }