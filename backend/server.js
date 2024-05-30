require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use('/api/progress', routes)

const port = process.env.PORT || 4000
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //server listening to PORT
        app.listen(port, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })