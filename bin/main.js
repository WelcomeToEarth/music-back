const mongoose=require('mongoose')
const http=require('http')
require('../model')
let app=require('../app')
let server=http.createServer(app)

mongoose.connect("mongodb://39.100.123.183/music",function (err) {
    console.log("mongodb 已连接!")
    if(!err){
        server.listen(3000,function (err) {
            if(!err){
                console.log("express 服务器已打开 ")
            }
        })
    }
})

server.on('close',function () {
    mongoose.disconnect()
})


