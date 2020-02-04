const mongoose = require('mongoose')
var Schema = mongoose.Schema

let AblumSchema = new Schema({
    name: {
        type: String
    },
    introduce: {
        type: String
    },
    songs: []
})
let SingerSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    introduce: {
        type: String
    },
    songs: []
})
let User = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    mail: {
        type: String
    }
})

mongoose.model("ablum", AblumSchema)
mongoose.model("singer", SingerSchema)
mongoose.model("user", User)