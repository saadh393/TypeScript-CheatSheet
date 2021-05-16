"use strict";
// Useage of Any Type
/*
    By Default 'any' is a 'undefined' type
    Array and Object are both Object Type
*/
var a;
console.log(a); // undefined
console.log(typeof a); // undefined
a = "This is a String";
console.log(a); //This is a String
console.log(typeof a); // string
a = 147570;
console.log(a); //147570
console.log(typeof a); // number
a = [1, 2, 4, 6, 10];
console.log(a); //[1, 2, 4, 6, 10]
console.log(typeof a); // object
a = { name: "King Khan Sapik Khan" };
console.log(a); //{name: "King Khan Sapik Khan"}
console.log(typeof a); // object
