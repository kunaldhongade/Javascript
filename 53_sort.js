// sort in js

// 5, 8, 1200, 20, 3432

// const userName = ['kunal', 'naruto', 'akash', 'aniket', 'swapnil', 'sasuke', 'Kunal']
// userName.sort()
// console.log(userName);

const arr = [2, 4, 53, 333, 1, 5, 4444, 0]

// sort original array la change karto 
// forEach , map , filter does not change original array
// sort ak callback function call back pn gheto

// javascript sort as a string not a like number

arr.sort((a, b) => {
    return a - b;
})
console.log(arr)

// how its working for ascending order 0, 1, 2, 3...
// 100 - 33 = 67
// a - b --> positive (greater than 0)
// b, a
// 33, 100

// 5 - 9 --> -4
// a - b --> negative
// a, b
// 5, 9

const arr2 = [...arr]

arr2.sort((a, b) => {
    return b - a; //  this for descending order
})
console.log(arr2);

// its working for descending order

// b - a --> positive
// 5 - 2 --> 3
// b, a
// 5, 2

// b - a --> negative
// 2 - 5 --> -3
// a, b
// 5, 2

// realistic example for sort

// price -> lowToHigh & HighToLow

const products = [
    { productId: 1, productName: "Phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 42000 },
    { productId: 3, productName: "TV", price: 52000 },
    { productId: 4, productName: "WiFi", price: 1200 },
    { productId: 5, productName: "Mic", price: 2000 },
    { productId: 6, productName: "Printer", price: 12500 },
    { productId: 7, productName: "Fan", price: 3200 },
    { productId: 8, productName: "usb", price: 100 },
]

/// low to High
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price
})

const HighToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price
})
console.log(products);
console.log(HighToLow);
console.log(lowToHigh);