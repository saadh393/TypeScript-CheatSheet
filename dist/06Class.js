"use strict";
/**
 * TypeScript Working With Class
 */
var Person = /** @class */ (function () {
    // Available Access Modifiers - public, private, readonly
    function Person(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Person.prototype.print = function () {
        console.log(this.name + " is " + this.age + " years old.");
    };
    Person.prototype.getCountry = function () {
        return this.country;
    };
    Person.prototype.setCountry = function (cName) {
        this.country = cName;
    };
    return Person;
}());
var sakib = new Person("Sakib", 19, "Bangladesh");
var mosh = new Person("Mash", 20, "Bangladesh");
var players = [sakib, mosh];
sakib.print();
sakib.setCountry("BD");
console.log(sakib.getCountry());
