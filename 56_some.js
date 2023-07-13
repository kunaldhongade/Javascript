// some method in js
// returns true iff any number satisfy condition returned in callback

/**
 * clg for console.log(object);
 * clo for console.log('object :', object);
 * ccl for console.clear(object);
 * cer for console.error(object);
 * ctr for console.trace(object);
 * clt for console.table(object);
 * cin for console.info(object);
 * cco for console.count(label);
 */
const num = [3, 5, 6, 4]

const ans = num.some((num) => num % 2 === 0)
console.log(ans);

const products = [
    { productId: 1, productName: "Phone", price: 12000 },
    { productId: 2, productName: "laptop", price: 42000 },
    { productId: 3, productName: "TV", price: 52000 },
    { productId: 4, productName: "WiFi", price: 1200 },
    { productId: 5, productName: "Mic", price: 2000 },
    { productId: 6, productName: "Printer", price: 12500 },
    { productId: 7, productName: "Fan", price: 3200 },
    { productId: 8, productName: "usb", price: 100 },
    { productId: 9, productName: "mac book", price: 250000 },
]

const answer = products.some((product) => product.price > 100000)
console.log(answer)