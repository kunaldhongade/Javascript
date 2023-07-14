const arr = [1, 2, 4, 4, 5, 6, 5, 6]
const uniqueElem = new Set(arr)
console.log(uniqueElem); // length is not working in set
console.log(arr)
let length = 0

for (ele of uniqueElem) {
    length++
}
console.log(length) 