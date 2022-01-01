const express = require('express')
const user = require('../model/user')
const router = express.Router()
const usersDetail = require('../model/user')

router.get('/',async(req,res)=>{
    try{
        const users = await usersDetail.find()
        res.json(users)
    }catch(err){
        res.send('Error'+err)
    }   
})

router.get('/:id',async(req,res)=>{
    try{
        const user = await usersDetail.findById(req.params.id)
        res.json(user)
    }catch(err){
        res.send('Error'+err)
    }   
})

router.post('/',async(req,res)=>{
    const user = new usersDetail({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender
    })

    try{
        const out = await user.save()
        res.json(out)    
    }catch(err){
        res.send('Error'+err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const user = await usersDetail.findById(req.params.id)
        user.age = req.body.age
        const output = await user.save()
        res.json(output)
    }catch(err){
        res.send('Error'+err)
    }   
})

router.delete('/:id',async(req,res)=>{
    try{
        await usersDetail.findByIdAndDelete(req.params.id)
        res.send('sucess')
    }catch(err){
        res.send('Error'+err)
    }
})
module.exports = router