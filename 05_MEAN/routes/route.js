const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

router.get('/contacts',async(req,res,next)=>{
    //Retrieve Contacts
    try{
        res.json(await Contact.find())
    }catch(err){
        res.send('Error accessing db'+err);
    }
});

router.post('/addContact',async(req,res,index)=>{
    //To Add Contacts
    const contact = new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
    try{
        res.json(await contact.save());
    }catch(err){
        res.send('Error accessing db'+err);
    }
});

router.post('/addMultiContact',async(req,res,index)=>{
    //To Add Multiple Contacts
    var arrayReq = req.body;
    for(var i=0;i<arrayReq.length;i++){
        var contact = new Contact({
            first_name:arrayReq[i].first_name,
            last_name:arrayReq[i].last_name,
            phone:arrayReq[i].phone
        });
        try{
            await contact.save();
        }catch(err){
            console.log('Error accessing db'+err);
        }
    }
    res.send('success');    
});

router.delete('/removeContact/:id',async(req,res,index)=>{
    //To Add Contacts
    try{
        const out = await Contact.findOneAndDelete(req.params.id);
        res.send(out);
    }catch(err){
        res.send('Error accessing db'+err);
    }
});
module.exports = router;