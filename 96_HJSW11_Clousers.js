function myFunc(power) {
    return function (number) {
        return number ** power
    }
}
const square = myFunc(2)
const ans = square(3)
console.log(ans)


// const Func = (power) => {
//     return (number) => number ** power
// }

const Func = (power) => (number) => number ** power

const cube = Func(3)
const ans1 = cube(4)
console.log(ans1)

const tetra = Func(4)
const ans2 = tetra(7)
console.log(ans2)

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

            2. square is initialized with myFunction call so square contained returned function of myFunction with power (local var) whole is called closures

            3. Calling square to assign value to ans
            ans is function returned by square
            square() returns num**power to ans

            4. console.log(ans)

    Function Execution context - myFunction

        Local Memory creation
            1. args: [power]
            function

        code execution
            1. return function with power (local variables) lexical memory environment

            after return FEC will be deleted from CAllStack

    Function Execution context - Square

        Local Memory creation
            1. args:  [number]
            2. number: number

            it also access power because of closure

        Code execution
            1. returning number ** power

*/


