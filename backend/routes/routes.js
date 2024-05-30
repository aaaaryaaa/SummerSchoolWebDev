const express = require('express')
const Week1 = require('../models/week1Model')
const Week2 = require('../models/week2Model')
const Week3 = require('../models/week3Model')
const Week4 = require('../models/week4Model')

const router = express.Router()

router.get('/', (req,res) => {
    res.json({mssg:'Hi lol'})
})

router.post('/week1', async (req,res) => {
    const {name, phno, task1, task2, task3, task4, task5, task6} = req.body

    try{
        const week1 = await Week1.create({name, phno, task1, task2, task3, task4, task5,task6})
        res.status(200).json(week1)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.post('/week2', async (req,res) => {
    const {name, phno, task1, task2, task3, task4, task5} = req.body

    try{
        const week2 = await Week2.create({name, phno, task1, task2, task3, task4, task5})
        res.status(200).json(week2)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.post('/week3', async (req,res) => {
    const {name, phno, task1, task2, task3, task4} = req.body

    try{
        const week3 = await Week3.create({name, phno, task1, task2, task3, task4})
        res.status(200).json(week3)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.post('/week4', async (req,res) => {
    const {name, phno, task1, task2} = req.body

    try{
        const week4 = await Week4.create({name, phno, task1, task2})
        res.status(200).json(week4)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router