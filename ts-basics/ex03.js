"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(id, name, city) {
        if (city === void 0) { city = 'Bangalore'; }
        this.id = id;
        this.name = name;
        this.city = city;
    }
    Person.prototype.print = function () {
        console.log('Id = %s', this.id);
        console.log('Name = %s', this.name);
        console.log('City = %s', this.city);
    };
    return Person;
}());
exports.Person = Person;
// let p1 = new Person(1, 'Vinod');
// p1.print();
