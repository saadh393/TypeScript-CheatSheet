"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Basic Example
var player = "Programmer";
console.log(player); // It will console nicely
// player = 10; //This will throw Warrning but code will complie
// Example 2
var age; // Its Assigning Undefined Type
age = "Some String";
age = 20;
console.log(age); // This will log 20
// Array
var arr = ["apple", "nuts", "shopping", 10];
arr.push(20);
// Object
var obj = {};
obj = {
    name: "Saad",
};
obj = __assign(__assign({}, obj), { age: 22 });
console.log(obj);
// Obj example two
var obj2;
obj2 = {
    name: "Saad",
};
console.log(obj2.name);
// Obj3 example
var obj3;
obj3 = [1, 2, 3];
console.log(obj3);
