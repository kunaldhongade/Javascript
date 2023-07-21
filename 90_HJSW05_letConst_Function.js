
console.log(typeof firstName) // reference err
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
 * 
 *      2. let firstName = "kunal"
 *              => initialize firstName
 * 
 *      3. console.log(firstName)
 * 
 * Temporal Dead Zone (TDZ)
 * 
 *      - at the time of starting value of firstName's value is uninitialized
 *      - after assigning value to firstName then it's initialized
 *      - until the variable gets initialized it will be in TDZ and gives Reference ERror
 * 
 * but we can't do this thing with const
 * 
 * 
 */


/**
 *  1. Compilation Phase
 *          i. error checking
 *          ii. scope of var
 * 
 *  2. Code Execution Phase
 *          In order to execute Js code Js creates execution context
 *              i. Creation Phase -> Memory Create (Hoisting)
 *              ii. Line by line Execution 
 */