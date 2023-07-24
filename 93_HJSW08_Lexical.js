// lexical environment, scope chain

const lastName = "Dhongade"

const printName = function () {
    const firstName = "kunal"
    console.log(firstName)
    console.log(lastName)
}
printName()

/**
 * 
 * Lexical Environment
 * 
 * global Execution Context
 * 
 *      Memory Creation Phase
 *          window: {}
 *          this: window
 *          lastName : uninitialized
 *          printName: uninitialized
 * 
 *      Code Execution Phase
 *          1. lastName : "dhongade" from uninitialized
 *          2. printName: whole function
 *          3. function Execution context created
 *              Local Memory
 *                  arguments: []
 *                  firstName: uninitialized
 *                  
 *              Code EXecution  
 *                  1. firstName = "kunal"
 *                  2. log(firstName)
 *                  3. log(lastName)
 *                          local memory does not have lastName so it goes to its parent EC so then it return
 *                  lastName's lexical environment means parent environment
 */