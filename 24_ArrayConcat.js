// clone array & concat Array

let a1 = ["i1", "i2"]
// let a2 = ["i1", "i2"]    // not recommended
// let a2 = a1.slice(0)     
// let a2 = [].concat(a1)
// spread operator
let a2 = [...a1] // recommended


let ar = [...a1, "i3", "i4"]
console.log(ar)

// spread operator

const arr = [1, 2, 3]
const arr1 = [4, 5, 6]
const newArr = [...arr, arr1, 7, 8]
console.log(newArr);

const newArr1 = [..."abc"]
console.log(newArr1)