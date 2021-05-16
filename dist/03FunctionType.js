"use strict";
/**
 *
 * Type Script : Funtion Type
 *
 * To Define Optional we can use this '?'
 *
 */
// Funtion Type
var myFunc = function (a, b) {
    if (b === void 0) { b = "B"; }
    console.log(a + " " + b);
};
var c = myFunc("A", "c");
// Funtion Return Type
var func2 = function (a, b) {
    return a + b;
};
console.log(func2(10, 12));
