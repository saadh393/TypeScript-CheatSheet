/**
 * Tuple
 * Same as array but It defines type of each position
 *
 */

/** Works Perfectly Fine */
const arry1 = [1, "string", false];
arry1[0] = false;
console.log(arry1);
//[false, "string", false]

/** Example of Tuple
 *
 *  Assigning Data type for Each position
 */
const arryWithTuple: [number, string, boolean] = [1, "string", false];

// arryWithTuple[0] = false;    This will throw an error
