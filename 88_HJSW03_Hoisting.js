console.log(this)
console.log(window)
console.log(myFunction) // hoisting
myFunction()
console.log(fullName)

// function declaration
function myFunction() {
    console.log("this is my function")
}

var firstName = "Kunal"
var lastName = "Dhongade"
var fullName = firstName + " " + lastName
console.log(fullName)

// hoisting means adding variable to memory before initialization

/**
 * 
 * Hoisting in JavaScript
 * 
 *  - In above example, myFunction and fullName were not initialize or define at the time of there use
 *  - but as we know compiler first parse this code and GEC is created so compiler knows that we have those variable inside global memory and compiler access that data and shows us result
 * 
 * 
 * code chya execute honya chya aadhi aaplya memory madhe data store hoto variables GEC chya aat aahet 
 * 
 * After all code executed from our GEC will be popped from stack 
 */