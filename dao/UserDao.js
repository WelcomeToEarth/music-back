const mogoose = require('mongoose')

let userModel = mogoose.model("user")

function addUser(user, callback) {
    userModel.create(user, function(err, newUserDoc) {
        if (!err) callback(newUserDoc.toObject())
    })
}

function findAllUsers(callback) {
    userModel.find({}).exec(function(err, users) {
        if (!err) callback(users)
    })
}

function deleteUser(id, callback) {
    userModel.findByIdAndRemove(id, function(err) {
        if (!err) callback({})
    })
}
// 查找用户
function findUser(user, callback) {
    // userModel.find({}).exec(function (err,users) {
    //     if(!err) callback(users)
    // })
    userModel.findOne({
            name: user.username,
            password: user.password
        })
        .exec(function(error, user) {
            if (error) {
                return callback(error);
            } else {
                return callback(user);
            }
        });
}


module.exports = { addUser, findAllUsers, deleteUser, findUser }