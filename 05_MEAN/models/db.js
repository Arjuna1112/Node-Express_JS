var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactlist',{useNewUrlParser:true},(err)=>{
    if(!err){console.log('MongoDb Connection Succeeded.')}
    else{console.log('Error in connection to db : '+err)}
});