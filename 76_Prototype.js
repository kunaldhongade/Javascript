function hello() {
    console.log("hello world");
}

// javascript function is combination of function and object
// js function ==> function + object

console.log(hello.name)

// adding our own property in function 
hello.Author = "kunal dhongade"
console.log(hello.Author)

// function provides more useful properties
// name, call, bind, apply properties 
// function provides us free space means empty object
// {} ya empty object la prototype mhantat

// what prototype is for 
// prototype is used to save properties related to function
// only functions provides prototype property
console.log(hello.prototype)

// adding properties to prototype

hello.prototype.abc = "abc"
hello.prototype.xyz = "xyz"
hello.prototype.sng = function () {
    console.log("lalala")
}

console.log(hello.prototype)

// proto chain in prototype

