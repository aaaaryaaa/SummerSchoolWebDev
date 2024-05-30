const mongoose = require('mongoose')

const Schema = mongoose.Schema

//creating schema 
const week4 = new Schema({
    phno: {
        type: Number,
        required: true
    },
    task1: {
        type: Boolean,
        required: false
    },
    task2: {
        type: Boolean,
        required: false //DESC not really required
    }
}, {timestamps: true})

module.exports=mongoose.model('Week4', week4)