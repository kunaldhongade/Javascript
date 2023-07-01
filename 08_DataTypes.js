// Data Types in JS

// 1. String
let str = "Kunal"
console.log(typeof str, str)

// 2. Number
let num = 123
let n = 1.2
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
console.log(typeof num, num, n, y, z)

// 3. Boolean
let bool = true
let b00l = false
console.log(typeof bool, bool)

// 4. null 
let nul = null
console.log(typeof nul, nul)

// 5. undefined
let un = undefined
console.log(typeof un, un)

// 6. symbol
let sym = Symbol("kdk")
console.log(typeof sym, sym)

// 7. BigInt
let bi = BigInt(1232342343244)
console.log(typeof bi, bi)

// 8. Object

//      i. Object
let obj = { fn: "kunal", ln: "dhongade" }
console.log(typeof obj, obj)

//      ii. Array
let arr = [1, 2, 3, 4, true, "str"]
console.log(typeof arr, arr)

//      iii. Date
let date = new Date("2002-02-15")
console.log(typeof date, date)