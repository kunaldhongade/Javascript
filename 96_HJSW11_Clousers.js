function myFunc(power) {
    return function (number) {
        return number ** power
    }
}
const cube = myFunc(2)
const ans = cube(3)
console.log(ans)

/*
    Global Execution Context

        Memory creation phase
            window: {}
            this: window
            myFunction : function
            square : uninitialized
            ans : uninitialized

        execution phase

            1. function already present in memory
            2. square is initialized with myFunction call

    Function Execution context - myFunction

        Local Memory creation
            1. args: [power]
            function

        code execution
            
*/