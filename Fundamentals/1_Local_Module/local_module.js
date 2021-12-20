//Node has 3 types of modules, 
//local module - create by us, 
//built in module - comes default as part of node no need to install
//External module - comes by installing using npm command - express js

const math = require('./math_operation')

console.log(math.add(2,1));
console.log(math.sub(2,1));
console.log(math.mul(2,1));
console.log(math.div(2,1));