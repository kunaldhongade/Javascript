// important array methods

// for each
// map
// filter
// reduce

let arr = [7, 2, 4, 5, 8]

function multiplyBy2(num, index) {
    console.log(`index is ${index} number is ${num}`);
    // console.log(`${num} * 2 = ${num * 2}`);
}

// for (let i = 0; i < arr.length; i++) {
//     multiplyBy2(arr[i], i)
// }

arr.forEach(multiplyBy2)// foreach as input gheto call back
// forEach automatically  number then index pass karto

// For Each works as a loop value pass karnar mg index

arr.forEach(function (num) {
    // console.log(`${num} * ${index} = ${num * index}`);
    console.log(`${num} * 2 = ${num * 2}`);
})
// forEach ha code per element sathi karen
// function define chya veles parameter aani function call chya veles argumaent


const users = [
    { firstName: "kunal", age: 19 },
    { firstName: "Naruto", age: 15 },
    { firstName: "Sasuke", age: 16 },
    { firstName: "Sai", age: 14 },
]

users.forEach(function (user) {
    console.log(user.firstName);
})

// for (const user of users) {
//     console.log(user.firstName);
// }


