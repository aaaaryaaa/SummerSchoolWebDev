const mongoose = require('mongoose')

const Schema = mongoose.Schema

//creating schema 
const week4 = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    task1: {
        type: Boolean,
        required: false
    },
    task2: {
        type: Boolean,
        required: false //DESC not really required
    },
    link1: {
        type: String,
        required: false
    },
    link2: {
        type: String,
        required: false 
    }
}, {timestamps: true})

module.exports=mongoose.model('Week4', week4)