// arrow function

const kdk = () => {
    console.log("KDK");
}
for (let i = 0; i < 5; i++) {
    kdk()
}

// only one parameter does not requires open bracket

const isPositive = num => {
    return num >= 0
}

const isNegative = num => num <= 0

console.log(isPositive(2), isNegative(-2))
console.log(isPositive(-2), isNegative(2))