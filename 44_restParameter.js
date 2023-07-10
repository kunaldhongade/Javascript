// rest parameter
// parameter accepts all arguments but if we have more arguments than parameter so only first arguments respected to that parameter accepted
// the with the help of rest parameter (...) all remaining argument becomes array and stored inside ...variable

const myFunc = (a, b, ...c) => {// here are parameter
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`, c);
}
myFunc(3, 4, 25, 41, 35, 53, 54)// here are arguments


const addAll = (...num) => {
    let sum = 0
    for (const n of num) {
        sum += n
    }
    return sum
}

console.log(addAll(1, 2, 2, 3, 4, 5));