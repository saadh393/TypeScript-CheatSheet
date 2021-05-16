"use strict";
/**
 *  Function Signature
 *
 */
// Declearing Funtion Signature/Structure
var getProfileObject;
// Defining Funtion Logics
getProfileObject = function (id, name, age, adult) {
    return { id: id, name: name, age: age, adult: adult };
};
var person1 = getProfileObject(1, "Saad Hasan", 22, true);
var person2 = getProfileObject(2, "Sakib Al Hasan", 42, true);
var person3 = getProfileObject(3, "Mashrafi", 17, false);
console.log(person1);
console.log(person2);
console.log(person3);
