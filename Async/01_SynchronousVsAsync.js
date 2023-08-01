// Javascript is a single threaded synchronous programming language

console.log("script start")

// for (let i = 1; i < 10000; i++) {
//     console.log("inside the for loop")
// }

// function hello() {
//     console.log("Hello World, this is hello function")
// }
// setTimeout(hello, 0);

// the does not block our code execution so this is async
const id = setTimeout(() => {
    console.log("inside setTimeout")
}, 1000);

for (let i = 1; i < 1000; i++) {
    console.log("....")
}

console.log("setTimeout id is ", id)
console.log("clearing time out")
clearTimeout(id)
console.log("script ends")



/**
 * 
 * all setTimeout will be executed after whole code is run
 * the time in settimeout is minimum time delay maximum will be depended on code
 * 
 * set time out returns us id
 * 
 */

/*

    In callStack there is GEC

    our js code will be started execution

    1. clg
    2. settimeout (this is browsers work)
        - js will continue run following code until browser gives call back to js
    3. clg

    web APT PRovider By Browser
        - browser tells js to wait for 1000ms to get a callback.

    CallBack Queue
        - after 1sec browser sends callback function to callback queue
        
    Event LOOP
        - event loop sees is callback empty after empty then callback function sends to callback stack
*/