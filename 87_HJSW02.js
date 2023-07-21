console.log(this)
console.log(window)
console.log(myFunction)
console.log(fullName)

function myFunction() {
    console.log("this is my function")
}

var firstName = "Kunal"
var lastName = "Dhongade"
var fullName = firstName + " " + lastName
console.log(fullName)

/**
 * 
 * Javascript is called lexical scope language
 * Analyze this code 
 * 
 * Global Scope
 *  firstName, lastName, fullName, func myFunction()
 * 
 * Code execution Phase
 * 
 * Lexical Scope :- The scope of a variable is determined by the fundamentals of how the code is written, which implies that if the variable is written in a side function or any block, the variable's scope falls inside that scope.
 * 
 * Global Execution Context (GEC) Will be created and added to the Stack memory
 *  - There are two types of GEC
 *      1. Creation Phase
 *          Global memory is created
 *      2. Code Execution Phase
 * 
 * $ Windows is already present inside Global Memory
 * Value of this will be window by binding
 * then all variables with var and functions with function keyword were added to global Memory
 * 
 * # Javascript stores variable in object (key and value pair) that called "Environment Record"
 * 
 * *** After all of These our code will be Executed ***
 * 
 * 1. clg(this)
 * 
 * 2. clg(window)
 * 
 * 3. clg(myFunction)
 *      - At the time of encounter myFunction Js Looks in global memory and
 *      - find's that function is already present there so Js will simply written Whole function because it just name of function and 
 *      - js stores data in object like structure.
 * 
 * 4. clg(fullName)
 *      - Now fullName is a variable with var keyword so in global memory variables with var always store as undefined
 *      - Js will look into global memory and finds fullName with undefined value and prints its
 * 
 * 5. function myFunction(){...}
 *      - this line is already executed and function is stored inside global memory
 * 
 * 6. var firstName = "kunal"
 *      Changing the value of firstName 'undefined' to 'kunal'
 * 
 * 7. var lastName = "dhongade"
 *      Changing the value of lastName 'undefined' to 'dhongade'
 * 
 * 8. var fullName = firstName + " " + lastName
 *      value of fullName will be "kunal dhongade"
 * 
 * 9. clg(fullName)
 *      value of fullName will be display on console "kunal dhongade"
 **/
