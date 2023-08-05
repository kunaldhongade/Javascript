// Promise
// represents future values that makes some in future
/*

    Now we made a promise and status of promise is pending
    so if we have all things made promise then value will be fulfilled
*/

console.log("script start")
// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']
const bucket = ['coffee', 'chips', 'vegetables', 'rice']

// promise represent's a value we don't know now but we know in future
// at time of promise
// status   --> pending
// value    --> undefined
// after completion of promise
// status   --> fulfilled
// value    --> Known
// promise will be fulfilled or reject and return msg in value after rejection

// we need to define promise first
/**
 * 
 * new need to use Promise keyword and its look like constructor function
 * 
 * in promise we need pass function called executer function
 * 
 * in function need to pass two parameter they are function itself 
 */

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried rice")
    } else {
        reject("can't make the fried rice")
    }
})
//  produce

setTimeout(() => {
    console.log("hello from setTimeout 1")
}, 0);

// consume promise
// then takes input as callback function
// callback function madhe ti value yein ji callback function resolve zalyavar yein
// then madhe ti value yein ji aapan resolve function la dili hoti
// inside then we can send two callback function
// first one for resolve and another for reject

// this then work is done by browser api
// this is consume by browser
// jab tak script end nahi hogi tab tak ye kam nahi hoga
friedRicePromise.then(
    // jab promise resolve hoga
    (myFriedRice) => {
        console.log("lets eat", myFriedRice)
    }
    // ,
    // // jab promise reject hoga
    // (error) => {
    //     console.log(error)
    // }
).catch(
    (error) => {
        console.log(error)
    }
)
// promise chaining
// catch works like passing second callback to then

setTimeout(() => {
    console.log("hello from setTimeout")
}, 0);

for (let i = 0; i <= 100; i++) {
    console.log(i, Math.random())
}

console.log("script ends")

/*

Execution

1. script start
2. array in memo
3. promise object array like {with status and its value}

in Browser
    Promise consume by browser
    browser works with the Js to complete work

then method (promise) add's in microtask queue

Event loop waits for GEC to complete its work and then call stack become empty

after that event loop allows then to be in execution

setTimeout will be presented in callback queue

now  firstly

5. for loop will be executed
6. script end's

then 
7. Microtask has higher priority than callback queue
    promise will be executed
8. after microtask queue then call back queue will be executed
    settimeout will be executed
*/