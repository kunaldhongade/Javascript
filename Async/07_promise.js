// Promise
// represents future values that makes some in future
/*

    Now we made a promise and status of promise is pending
    so if we have all things made promise then value will be fulfilled
*/

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']

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


// consume promise
// then takes input as callback function
// callback function madhe ti value yein ji callback function resolve zalyavar yein
// then madhe ti value yein ji aapan resolve function la dili hoti
// inside then we can send two callback function
// first one for resolve and another for reject

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

