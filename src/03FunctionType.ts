/**
 *
 * Type Script : Funtion Type
 *
 * To Define Optional we can use this '?'
 *
 */

// Funtion Type
const myFunc = (a: string, b: string = "B") => {
  console.log(`${a} ${b}`);
};
let c = myFunc("A", "c");

// Funtion Return Type
const func2 = (a: number, b: number): number => {
  return a + b;
};
console.log(func2(10, 12));
