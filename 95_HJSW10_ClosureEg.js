function hello(x) {
    const a = "varA"
    const b = "varB"

    return function () {
        console.log(a, b, x)
    }
}

const ans = hello('arg')
ans()

/*
    Global Execution Context

        Memory Creation Phase
            window: {}
            this: window
            hello: func
            ans: uninitialized
        
        code Execution
            1. compiler encounters function on first line so its just checks is it on memory if yes good to go!

            2. now hello function calls and its execution context created

            after function context --> ans: function + a+ b+ x

            3. calling ans()

                new function execution context is created for ans in callStack

    Function execution Context - hello

        Local Memory
            arguments: [args]
            x : args
            a: uninitialized
            b: uninitialized
            function

        code execution phase
            1. a: varA
            2. b: VarB
            3. return function with parents lexical environment (surrounding var) in closures

    Function execution Context - ans

        LM
            arguments: []

        C EX
            arg, varA, VarB


*/