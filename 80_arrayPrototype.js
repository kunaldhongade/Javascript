let num = [1, 2, 4]

// javascript madhe array pn object asto
// javascript madhe prototype array cha pn asto 
// internally javascript array constructor cha use karto
// new keyword chya use mule Array.prototype sobat newly created array proto chya madhe connect hoto
// this chya mule new array banaun to return hoto

let n = new Array(1, 2, 3)

console.log(Array.prototype);// array cha prototype Array asto

console.log(Object.getPrototypeOf(n))

// function's are object like