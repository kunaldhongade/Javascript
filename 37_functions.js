// function declaration
// sum of three numbers
function sumThree(num1, num2, num3) {
    return num1 + num2 + num3
}
const returnedVal = sumThree(5, 6, 3)
console.log(returnedVal);


// checking is number even
function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(isEven(3))


// first character in the string
function strFirst(str) {
    return str[0]
}
console.log(strFirst("Kunal"))


// index of target if present in array
function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}
console.log(findTarget([1, 2, 3, 4, 5, 0], 8));



// anonymous function
//  function expression

const name = function () {
    console.log("kunal dhongade")
}
name()