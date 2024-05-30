const express = require('express')
const Week1 = require('../models/week1Model')
const Week2 = require('../models/week2Model')

const router = express.Router()

router.get('/', (req,res) => {
    res.json({mssg:'Hi lol'})
})

router.post('/week1', async (req,res) => {
    const {phno, task1, task2, task3, task4, task5, task6} = req.body

    try{
        const week1 = await Week1.create({phno, task1, task2, task3, task4, task5,task6})
        res.status(200).json(week1)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.post('/week2', async (req,res) => {
    const {phno, task1, task2, task3, task4, task5} = req.body

    try{
        const week2 = await Week2.create({phno, task1, task2, task3, task4, task5})
        res.status(200).json(week2)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router