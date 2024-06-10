const mongoose = require('mongoose')

const Schema = mongoose.Schema

//creating schema 
const aimlweek2 = new Schema({
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
        required: false 
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
    },
    task6: {
        type: Boolean,
        required: false
    },
    task7: {
        type: Boolean,
        required: false
    },
    task8: {
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
    },
    link3: {
        type: String,
        required: false 
    },
    link4: {
        type: String,
        required: false 
    },
    link5: {
        type: String,
        required: false 
    }
}, {timestamps: true})

module.exports=mongoose.model('AIMLWeek2', aimlweek2)