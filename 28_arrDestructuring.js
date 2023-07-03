// array destructuring

const myArray = ["V1", "V2", "V3", "V4"]

// let val = myArray[0]
// let val2 = myArray[1]
// console.log("value of val", val);
// console.log("value of val2", val2);

let [val, val2] = myArray
// only zero and first index

console.log(val, val2)

// if we want to store diff values
// in that case we need to skip index by using empty space followed by coma
let [a, , b, c] = myArray
console.log(a, b, c);

// if we have min value but lot var
const arr = [1]
let [x, y, z] = arr
console.log(x, y, z)


// if we want to store all values in side array
let [p, q, ...pqr] = myArray
console.log(pqr)