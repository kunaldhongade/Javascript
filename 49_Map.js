// map method
// map method is array method 

const numbers = [2, 3, 4, 5]

const square = function (num) {
    return num * num
    // console.log(num * num);
    // if we don't return anything the by default return undefined
    // map return madhe new array deto
}

const squareNum = numbers.map(square) // as input call back function gheto
// map function make new array every time

console.log(squareNum);


const cubeNum = numbers.map((number, index) => {
    return `index : ${index}:${number * number * number}`
})

console.log(cubeNum);