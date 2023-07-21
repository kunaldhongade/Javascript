// *************** Eg. 1 ****************/

// console.log(myFunction) // with function declaration it just return's whole function

// myFunction() //  it will call function


// // function declaration : with function declaration
// function myFunction() {
//     console.log("this is my Function")
// }


// *************** Eg. 2 ****************/

console.log(myFunction) // undefined

/// function expression
var myFunction = function () { // every identifier with var firstly undefined
    console.log("this is my Function")
}

console.log(myFunction) // return whole function

/**
 * 
 *  In example No 1
 *      - function defined with only function keyword it called function declaration
 *      - In this case Our whole function will be stored inside Global memory and works as function
 * 
 *  In Example No 2
 *      - its a Anonymous function 
 *      - Every identifier declared with var keyword stored inside global memory with undefined as initial value
 * 
 *      - so if we access that anonymous function before its function declaration it will result as a undefined
 */