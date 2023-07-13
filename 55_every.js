// every method 

const num = [2, 4, 8, 6, 4, 2]

const ans2 = num.every((num) => num >= 10)
const ans = num.every((num) => num % 2 === 0)

// call back function --> true / false
// every method --> true / false
// every method returns true only if all element in the array are returns true from callback 

console.log(ans);

// check every product <  30000


const userCart = [
    { productId: 1, productName: "Phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 42000 },
    { productId: 3, productName: "TV", price: 52000 },
    { productId: 4, productName: "WiFi", price: 1200 },
    { productId: 5, productName: "Mic", price: 2000 },
    { productId: 6, productName: "Printer", price: 12500 },
    { productId: 7, productName: "Fan", price: 3200 },
    { productId: 8, productName: "usb", price: 100 },
]

const lessThan30k = userCart.every((cartItem) => {
    return cartItem.price < 30000
})

console.log(lessThan30k);