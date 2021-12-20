// Sample external module - lodash : a JavaScript library which provides utility functions for 
//common programming tasks using the functional programming paradigm.

const _=require('lodash')

const items = [1,[2,[3,[4]]]];
console.log(_.flattenDeep(items));

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));
console.log(_.chunk(nums,2));
console.log(_.slice(nums, 2, 6));

_.times(4, () => {
    console.log("brave");
})

let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];
vals.forEach((e)=>{
    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }
    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }
    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }
    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }   
})

console.log(_.filter(nums, (e) => e > 5));
let users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 }
];

let u1 = _.find(users, {name: 'Adam'});
console.log(u1);

let u2 = _.find(users, (u) => { return u.age > 60 });
console.log(u2);

let u3 = _.findLast(users, (u) => { return u.age > 60 });
console.log(u3);

console.log(_.partition(users, (e) => e.age < 60));