const arr = ["apple", "mango"]
arr.push("banana")

console.log(arr)
// we can push pop to const because arr address on heap still same
// but we cant change whole array by using []
// arr = [] // this will throw error
// const is recommended for referenced type


let i = 0

while (i < arr.length) {
    arr.push(arr[i])
    i++
}
console.log();