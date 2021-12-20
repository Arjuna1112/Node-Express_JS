//For node built in module no need to use npm package

//Built in module
const builtinModules = require('builtin-modules');
console.log(builtinModules);

//Some Of the built in modules use cases
//OS module
const os = require('os')
console.log(os.userInfo());

//Assert module
const assert = require('assert')
assert.equal(2,2)
assert.notEqual(2,1)

//Path module
const path = require('path')
console.log(path.basename('/test/something'));
console.log(path.parse('/test/something.txt'));
console.log(path.join('test','name','something.txt'));

//File module
const fs = require('fs')

const fileInput = fs.readFileSync('./content/SomeText.txt','utf-8');
console.log(fileInput);

fs.writeFileSync('./content/SomeText.txt',`${fileInput} Software Developer`)
console.log(fs.readFileSync('./content/SomeText.txt','utf-8'));

//HTTP module
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`<h1>Hi This is Arjun home page</h1>`)
    }else if(req.url==='/about'){
        res.end(`<h1>This is About page</h1>`)
    }else res.end(`<h1>OOPS!</h1><p>We can't seem to find the page you are looking for</p><a href='/'>back home</a>`)
})
server.listen(3000)