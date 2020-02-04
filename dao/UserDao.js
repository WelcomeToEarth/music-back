const mogoose=require('mongoose')

let userModel=mogoose.model("user")

function addUser(user,callback) {
  userModel.create(user,function (err,newUserDoc) {
        if(!err) callback(newUserDoc.toObject())
    })
}

function findAllUsers(callback) {
    userModel.find({}).exec(function (err,users) {
        if(!err) callback(users)
    })
}

function deleteUser(id,callback) {
    userModel.findByIdAndRemove(id,function (err) {
       if(!err) callback({})
   })
}

module.exports={addUser,findAllUsers,deleteUser}