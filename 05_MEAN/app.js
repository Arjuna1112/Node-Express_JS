//importing modules
require('./models/db');
var express = require('express');
var cors = require('cors');

var app = express();

const route = require('./routes/route');

//port number
const port = 9000;

//adding middleware - cors
app.use(cors());

//To accept json as input
app.use(express.json())

//routes
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('Foo');
});

app.listen(port,()=>{
    console.log('Server started at port: '+port);
});