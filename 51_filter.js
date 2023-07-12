// filter method

const num = [2, 4, 5, 3, 6]
// filter's callback function always return boolean value

const isEven = (number) => {
    return number % 2 === 0
}

const isOdd = (number) => {
    return number % 2 !== 0
}
// filter function only add values to new array when callback function returns true value

const evenNum = num.filter(isEven)
console.log(evenNum);

