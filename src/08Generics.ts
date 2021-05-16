/**
 * Generics in TypeScript
 *
 * It is used to define Type of a variable.
 * Whenever we are not sure about the type, we can use Generic as a Type
 *
 */

/** Example 1 */
const addID = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 10);
  return { ...obj, id };
};

let userD = addID({
  name: "Saad",
  age: 10,
});

console.log(userD);

/** Example 2 */
interface apiResponse<T> {
  status: number;
  data: T;
}

const response: apiResponse<object> = {
  status: 200,
  data: {
    name: "Test",
  },
};
