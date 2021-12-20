//The event loop is what allows Node.js to perform non-blocking I/O operations — 
//despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

const fs = require('fs')

console.log('Started the Execution...');

fs.readFile('./content/SomeText.txt', 'utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log('Completed Reading File');
})

console.log('Start the Next Execution');