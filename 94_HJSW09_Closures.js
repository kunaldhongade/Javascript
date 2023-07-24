// Closures

// function can return other functions

function outerFunction() {

    function innerFunction() {
        console.log("hello World");
    }
    return innerFunction;
}

const ans = outerFunction()
console.log(ans)

/*
 
    Memory Creation

        Window: {}
        this: window
        printFullName: function
        ans: uninitialized

    Code Execution

        1. printFullName function execution context is created
            local memory
            arguments: []
            firstName: kunal
            lastName: dhongade
            printName: function
        
        2. returning printName to ans
            ans : printName() instead of uninitialized
            after returning printName goes to FEC to GEC
            and FEC gets destroyed after return
            + firstName + LastName
    
        calling the ans()

            Creating local memory
            args: []
        
            execution

            printing firstName and lastName is not fount in function EXecution Context 
            but found in its closure

 */


/**
 * 
 *  Function Closures
 *  
 *  whenever we return function inside from function, child function always return with local memory(variables) of parent function
 */