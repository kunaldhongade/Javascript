
// const userMethods = {
//     about() {
//         return `${this.firstName} ${this.lastName} is ${this.age} years old and his/her email is ${this.email} lives in ${this.address}`
//     },
//     is18() {
//         return this.age >= 18
//     }
// }

function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(createUser.prototype)

    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.address = address

    return user
}

createUser.prototype.about = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and his/her email is ${this.email} lives in ${this.address}`
}

createUser.prototype.is18 = function () {
    return this.age >= 18
}

createUser.prototype.sing = function () {
    return "im singing a song"
}

// console.log(createUser.prototype)

const user1 = createUser('kunal', "dhongade", 17, 'kunal@abc.com', 'india')

console.log(user1)
console.log(user1.about())
