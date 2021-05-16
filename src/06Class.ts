/**
 * TypeScript Working With Class
 */

class Person {
  // Person Type Class
  name: string;
  age: number;
  private country: string;
  // Available Access Modifiers - public, private, readonly

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  print() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
  getCountry(): string {
    return this.country;
  }
  setCountry(cName: string) {
    this.country = cName;
  }
}

const sakib: Person = new Person("Sakib", 19, "Bangladesh");
const mosh: Person = new Person("Mash", 20, "Bangladesh");

const players: Person[] = [sakib, mosh];

sakib.print();
sakib.setCountry("BD");
console.log(sakib.getCountry());
