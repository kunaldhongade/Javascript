
console.log(firstName)
let firstName = "kunal"
console.log(firstName)

// let and const chi hoisting hot asti
// variables he code chya execution aadhi memory madhe exits karit astat
// but they are uninitialized means they are useless until we initialize them

/**
 * 
 * Global execution context
 *      Creation Phase
 *          Global Memory Creation
 *              - variables with var ==> undefined
 *              - variables with let ==> uninitialized 
 *                      --> variable gets memory but not assign value
 *                      --> Every variable with let are uninitialized until we initialize them we cant use them
 *                      --> 
 * 
 *      Code Execution Phase
 *  
 *      1. console.log(firstName)
 *              => gives us err uncaught err not accessible
 *      2. 
 *  
 */