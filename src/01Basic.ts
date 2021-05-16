// Basic Example
let player = "Programmer";
console.log(player); // It will console nicely
// player = 10; //This will throw Warrning but code will complie

// Example 2
let age; // Its Assigning Undefined Type
age = "Some String";
age = 20;
console.log(age); // This will log 20

// Array
let arr: (string | number)[] = ["apple", "nuts", "shopping", 10];
arr.push(20);

// Object

let obj: object = {};

obj = {
  name: "Saad",
};

obj = {
  ...obj,
  age: 22,
};

console.log(obj);

// Obj example two
let obj2: {
  name?: string;
  age?: number;
  adult?: boolean;
};

obj2 = {
  name: "Saad",
};

console.log(obj2.name);

// Obj3 example
let obj3: object;
obj3 = [1, 2, 3];
console.log(obj3);
