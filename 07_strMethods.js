// Strings are Immutable in JavaScript

let firstName = " JavaScript js "

console.log("str : " + firstName)

console.log("length of str : " + firstName.length)
firstName = firstName.trim(); // trim removes blank spaces from string's forth and back
console.log("length of str after trim : " + firstName.length)

console.log("uppercase of str : " + firstName.toUpperCase());
console.log("lowercase of str : " + firstName.toLowerCase())
console.log("locale uppercase of str : " + firstName.toLocaleUpperCase())
console.log("str : " + firstName)


// *** slice in JavaScript ***
// start index & end index

let name = "Kunal";
let slice = name.slice(0, 3)
console.log(name)
console.log(slice)
console.log(name)
console.log("slice(0) : " + name.slice(0)) // start from 0 to end
console.log("slice(1) : " + name.slice(1))// start from 1 to end
console.log("slice(2) : " + name.slice(2))// start from 2 to end
console.log("slice(-1) : " + name.slice(-1))// start from last to last
console.log("slice(-2) : " + name.slice(-2)) // start from second last to last
console.log("slice(0,-1) : " + name.slice(0, -1)) // start from 0 to last(neglect last one)
console.log("slice(0,-2) : " + name.slice(0, -2)) // start from 0 to neglect last & second last


let un = "dhongade"
let uun = un[1] = "sj"
console.log(uun, uun[1], un)