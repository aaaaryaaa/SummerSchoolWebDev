const mongoose = require('mongoose')

const Schema = mongoose.Schema

//creating schema 
const week3 = new Schema({
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
    task3: {
        type: Boolean,
        required: false
    },
    task4: {
        type: Boolean,
        required: false
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

module.exports=mongoose.model('Week3', week3)