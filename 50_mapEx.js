const users = [
    { firstName: "kunal", age: 19 },
    { firstName: "Naruto", age: 15 },
    { firstName: "Sasuke", age: 16 },
    { firstName: "Sai", age: 14 },
]

const userFN = users.map((user) => {
    return user.firstName
})

console.log(userFN);