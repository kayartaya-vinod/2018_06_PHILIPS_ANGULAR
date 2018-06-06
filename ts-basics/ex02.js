let Person = require("./ex01").Person;
let greet = require('./ex01').greet;

let p1 = new Person('Kumar');
p1.print();

let msg = greet();
console.log(msg);