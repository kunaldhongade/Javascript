// understand callback

function myFunc(callback) {
    console.log("function is doing some task 1")
    callback()
}

// function myFunc2() {
//     console.log("function is doing task 2")
// }

// myFunc(myFunc2)


// myFunc(function () {
//     console.log("function is doing task 2")
// })

function getTwoNumberAndAdd(num1, num2, callback, ifFailCallback) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        callback(num1, num2)
    }
    else {
        ifFailCallback()
    }
}

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
}

getTwoNumberAndAdd(3, "7", (num1, num2) => {
    console.log(num1 + num2)
}, () => {
    console.log("wrong Data type")
    console.log("please pass numbers only")
})

// this is traditional way of call back

// we can send two call back at time