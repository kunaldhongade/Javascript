console.log("Hello World")
let firstName = "kunal"
let lastName = "Dhongade"

const myFunction = function () {
    let var1 = "First Variable"
    let var2 = "second Variable"

    console.log(var1)
    console.log(var2)
}

/**
 * 
 * compilation phase
 *  Error checking
 *  Scope 
 *      1. Global Scope
 *          - Js knows whats in the code before compilation / execution
 *          eg. firstName, lastName
 *          - scope decided
 *      2. function scope
 *          eg. var1, var2
 * 
 * Code Execution 
 *      In order to execute Js code Js creates Execution Context
 * 
 *      1. Creation Phase
 *          Global Execution context
 *      
 */