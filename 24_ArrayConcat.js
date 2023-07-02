// clone array & concat Array

let a1 = ["i1", "i2"]
// let a2 = ["i1", "i2"]    // not recommended
// let a2 = a1.slice(0)     
// let a2 = [].concat(a1)
// spread operator
let a2 = [...a1] // recommended


let arr = [...a1, "i3", "i4"]
console.log(arr)
