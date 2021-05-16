"use strict";
/**
 *
 * Type Aliases
 * We can create our own custom type
 *
 */
/* using defined custom type */
var userData = function (userInfo) {
    return userInfo.name + " is " + userInfo.age + " years old.";
};
var result = userData({ name: "Saad Hasan", age: 23 });
console.log(result); //Saad Hasan is 23 years old.
/**
 * If You hadn't use Custom Type
 * const userData = (userInfo: { name: string; age: number }): string | number => {
 *    return `${userInfo.name} is ${userInfo.age} years old.`;
 * };
 */
