// hoisting

// if we called function before its declaration is hoisting
// works only with function declaration

hello();

function hello() {
    console.log("hello world");
}

// it does not works in function expression
// hii() // this will throw err 
var hii = () => {
    console.log("HII");
}


// what is happening?

console.log(hello);
var hello = "hello world" // with var it thows undefined 
console.log(hello);

// however if we use const / let it will throw err
