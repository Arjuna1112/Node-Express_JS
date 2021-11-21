const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDetails'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json())

const userRoute = require('./routes/userRoutes')
app.use('/users',userRoute)

app.listen(9000,()=>{
    console.log('Server started...')
})