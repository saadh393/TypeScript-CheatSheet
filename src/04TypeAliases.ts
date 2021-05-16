/**
 *
 * Type Aliases
 * We can create our own custom type
 *
 */

/* defining my own custom type */
type stringOrNum = string | number;
type userType = { name: string; age: number };

/* using defined custom type */
const userData = (userInfo: userType): stringOrNum => {
  return `${userInfo.name} is ${userInfo.age} years old.`;
};

const result = userData({ name: "Saad Hasan", age: 23 });
console.log(result); //Saad Hasan is 23 years old.

/**
 * If You hadn't use Custom Type
 * const userData = (userInfo: { name: string; age: number }): string | number => {
 *    return `${userInfo.name} is ${userInfo.age} years old.`;
 * };
 */
