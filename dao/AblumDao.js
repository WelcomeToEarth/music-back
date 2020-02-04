const mogoose = require('mongoose')

let ablumModel = mogoose.model("ablum")

function addSinger(ablum, callback) {
    ablumModel.create(ablum, function(err, newAblumDoc) {
        if (!err) callback(newAblumDoc.toObject())
    })
}

function findAllAblums(callback) {
    ablumModel.find({}).exec(function(err, ablums) {
        if (!err) callback(ablums)
    })
}

function deleteAblum(id, callback) {
    ablumModel.findByIdAndRemove(id, function(err) {
        if (!err) callback({})
    })
}

module.exports = { addSinger, findAllAblums, deleteAblum }