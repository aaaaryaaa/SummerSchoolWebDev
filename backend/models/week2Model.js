const mongoose = require('mongoose')

const Schema = mongoose.Schema

//creating schema 
const week2 = new Schema({
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
    task5: {
        type: Boolean,
        required: false
    }
}, {timestamps: true})

module.exports=mongoose.model('Week2', week2)