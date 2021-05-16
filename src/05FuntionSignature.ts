/**
 *  Function Signature
 *
 */

// Declearing Funtion Signature/Structure
let getProfileObject: (id: number, name: string, age: number, adult: boolean) => {};

// Defining Funtion Logics
getProfileObject = (id, name, age, adult) => {
  return { id, name, age, adult };
};

const person1 = getProfileObject(1, "Saad Hasan", 22, true);
const person2 = getProfileObject(2, "Sakib Al Hasan", 42, true);
const person3 = getProfileObject(3, "Mashrafi", 17, false);

console.log(person1);
console.log(person2);
console.log(person3);
