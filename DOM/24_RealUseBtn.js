
console.log("script start")
const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let num = 0
        for (let i = 0; i <= 1000000000; i++) {
            num += i
        }
        console.log(e.currentTarget.textContent, num)
    })
})

let outerVar = 0

for (let i = 0; i <= 1000000000; i++) {
    outerVar += i
}

console.log("value of outerVar is " + outerVar)
console.log("script end")

/*

Browser has Js engine  and web api
Js engine uses web api

chrome --> v8
firefox --> spider Monkey

JS Engine
    - callStack
    - Global execution context
    - Function Execution Context
    - our code is at memory in JS engine
    - in GEC our btn created
    - js is single threaded so after click on btn browser just send call back function to js
    - js after getting callback function start its execution
    - now user click on btn and these callback function will be in queue of event loop
    - event loop checks that is call stack busy till call stack becomes free (GEC Popped) event loop does not allows call back function to get in call stack 
    - after call stack becomes empty queue will get into call stack one by one
    - and execute accordingly

Web API
    -- checks whether user click on btn's
    -- every time user click button web api gives callback function to js then js execute that function
*/