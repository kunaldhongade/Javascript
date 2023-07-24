// function execution context

let foo = 'foo'
console.log(foo);

function getFullName(firstName, lastName) {
    console.log(arguments);

    let myVar = "VarInFuc"
    console.log(myVar)
    const fullName = firstName + " " + lastName
    return fullName
}

const personName = getFullName("Kunal", "Dhongade")
console.log(personName)

/**
 * GEC in callStack (memory)
 *  Global Execution Context
 *      Memory Creation Phase
 *      
 *      window : {}
 *      this: window
 *      (let) foo : uninitialized
 *      getFullName : function
 *      (const) personName : uninitialized
 * 
 *      Code Execution Phase
 *  
 *      1. foo initialized so it return its value instead of uninitialized
 *      2. console log (foo)
 *      3. function is created
 *          - In JS whenever we a function a new Function Execution Context is created
 *          - Function Execution Context
 *              two phases of the work :)
 *          1. Local Memory Creation Phase          2. Code execution Phase
 *              
 *          Array like object(indexing, length)     1. console.log(arguments)
 *          arguments: [...]                        2. (let) myVar : "VarInFuc"
 *          setting parameter values as arg's       3.  console.log(myVar)
 *          firstName : "kunal"                     4. (const) fullName: "kunal"
 *          lastName: "Dhongade"                    5. return " " to personName
 *          myVar: uninitialized                    
 *          fullName: uninitialized                
 * 
 *          -  after returning value from function function callStack will be removed
 */



/*

|       |
|       |
|       |
|       |
_________

|       | deleted after returning function
|  FEC  |
|       |
_________

|  GEC  |
|       |
_________
 */