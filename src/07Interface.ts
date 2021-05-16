/**
 * InterFace
 */

/** Class Example */
interface User {
  name: string;
  age: number;
  getString(): string;
}

class UserAccount implements User {
  constructor(public name: string, public age: number) {}

  getString() {
    return `${this.name} is ${this.age} years old.`;
  }
}

/** Funcional Example */
interface options {
  width: number;
  length: number;
}

function getArea(data: options) {
  return data.width * data.length;
}

console.log(getArea({ length: 10, width: 10 }));
