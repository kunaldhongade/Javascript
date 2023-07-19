// compilation
// code execution

// why compilation 

// How javascript code executes 


// what is global execution context?
// what is local execution context?

// closures

console.log(this)
console.log(window)
console.log(firstName)
var firstName = "kunal"

/** 
 * 1. Code is Read by Compiler
 * 2. code compile by compiler
 * 
 *      1. Tokenizing / lexing
 *              in tokenizing our code breaks in to little pieces that chucks called tokens
 *      2. Parsing
 *              In Parsing our chunked code converts to abstract syntax tree (AST) and then our code executes
 *      3. Code Generation
 *              Executable code generation for browser
 *              
 * 3. run code / execute
 * 
 * ES Parsing
 * 1. Early Err Checking
 * 2. Determining appropriate scope for variables
 *      eg. function scope / Global scope / block scope
 * 
 * IN Javascript Every variable/ code that written in the global scope
 * 
 * code compile hoyachya aadhi compiler la mahit ast ki konta variable kontya scope la aahe
 * 
 * 1st phase compilation / parsing 
 *      early err checking
 *      determine scope of var
 * 
 * 2st execute phase
 *      In Js code executes inside execution context
 *      to execute code we need to create execution context
 *      First created execution context called global execution context
 * 
 * ** Global Execution Context(GEC) **
 *      two phases of GEC
 *          1. creation Phase (GEC cha)
 *          2. code execution Phase
 * // aaplya code chi 1st line execute honyachya aadhi Global execution context create hoto 
 * 
 *      1. Creation PHase
 *          variable with var gets value of undefined
 *          after global execution context is created 
 * **/