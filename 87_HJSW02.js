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
 */
