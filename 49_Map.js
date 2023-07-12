// map method

// map method is array method 

const numbers = [2, 3, 4, 5]

const square = function (num) {
    return num * num
}

const squareNum = numbers.map(square) // as input call back function gheto
// map function make new array every time

console.log(squareNum);