const express = require('express')
const Week1 = require('../models/week1Model')
const Week2 = require('../models/week2Model')
const Week3 = require('../models/week3Model')
const Week4 = require('../models/week4Model')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/', (req,res) => {
    res.json({mssg:'Hi lol'})
})

//all get requests
router.get('/week1', async (req, res) => {

    const alltasks = await Week1.find({}).sort({ createdAt: -1 })


    res.status(200).json(alltasks)
})

router.get('/week2', async (req, res) => {

    const alltasks = await Week2.find({}).sort({ createdAt: -1 })


    res.status(200).json(alltasks)
})

router.get('/week3', async (req, res) => {

    const alltasks = await Week3.find({}).sort({ createdAt: -1 })


    res.status(200).json(alltasks)
})

router.get('/week4', async (req, res) => {

    const alltasks = await Week4.find({}).sort({ createdAt: -1 })


    res.status(200).json(alltasks)
})

//all post requests
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

//all patch requests
router.patch('/week1/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such record for week1' })
    }


    const record = await Week1.findByIdAndUpdate({ _id: id }, {

        ...req.body
    })

    if (!record) {
        return res.status(404).json({ error: 'No such record for week1' })
    }

    res.status(200).json(record)
})

router.patch('/week2/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such record for week2' })
    }


    const record = await Week1.findByIdAndUpdate({ _id: id }, {

        ...req.body
    })

    if (!record) {
        return res.status(404).json({ error: 'No such record for week2' })
    }

    res.status(200).json(record)
})

router.patch('/week3/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such record for week3' })
    }


    const record = await Week1.findByIdAndUpdate({ _id: id }, {

        ...req.body
    })

    if (!record) {
        return res.status(404).json({ error: 'No such record for week3' })
    }

    res.status(200).json(record)
})

router.patch('/week4/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such record for week4' })
    }


    const record = await Week1.findByIdAndUpdate({ _id: id }, {

        ...req.body
    })

    if (!record) {
        return res.status(404).json({ error: 'No such record for week4' })
    }

    res.status(200).json(record)
})

module.exports = router