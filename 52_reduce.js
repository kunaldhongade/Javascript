// reduce 

const numbers = [1, 2, 3, 4, 5, 10]
// aim: sum of all the numbers in array


const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100) /// this is initial value of accumulator 100 and 

console.log(sum);

// we need to track accumulator and then currentValue in order to understand it

// accumulator , currentValue, return

//      1               2        3
//      3               3        6
//      6               4        10
//      10              5        15
//      15              10       25


const userCart = [
    { productId: 1, productName: "Phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 42000 },
    { productId: 3, productName: "TV", price: 52000 },
    { productId: 4, productName: "WiFi", price: 1200 },
]

// reduce help us to maintain code clean

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return currentProduct.price + totalPrice
}, 0)

console.log(totalAmount);