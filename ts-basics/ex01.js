// ES6

const names = ['Vinod', 'Shyam'];

function greet() {
    return "Hello, world!";
}

class Person {
    constructor(name = '', city = 'Bangalore') {
        this.name = name;
        this.city = city;
    }

    print() {
        console.log('Name = %s', this.name);
        console.log('City = %s', this.city);
    }
}

// let p1 = new Person('Vinod');
// console.log(p1);
// p1.print();

module.exports = {}; // not needed; happens by default
module.exports.greet = greet;
module.exports.Person = Person;
