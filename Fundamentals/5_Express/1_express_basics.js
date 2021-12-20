const express = require('express')
const app = express()

//APP.use is used to add middle ware functions
// can be added in 3 ways, our own/ express/ third party
// we can add middleware (code which executes actual logic) directly to router or app.use as follows
// middleware accepts req, res, next : next is for invoking next middles ware
// It's always need to complete middleware either by invoking next or by res.end
// In below example logging called in /about through router and for * path through app.use

const logging = (req,res,next)=>{
    console.log(`Invoked path ${req.url}`);
    next();
}

app.get('/',(req,res)=>res.send('Home Page'))

app.get('/about',logging,(req,res)=>res.send('About Page'))

app.use(logging)
app.all('*',(req,res)=>res.status(404).send('<h1>Page not found </h1>'))

app.listen(5000,()=>console.log('Server started listening on port 5000...'))