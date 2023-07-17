function CreateUser(firstName, lastName, age, email, address) {
    // const user = Object.create(CreateUser.prototype)

    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.email = email
    this.address = address
}

CreateUser.prototype.about = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and his/her email is ${this.email} lives in ${this.address}`
}

CreateUser.prototype.is18 = function () {
    return this.age >= 18
}

CreateUser.prototype.sing = function () {
    return "im singing a song"
}

// console.log(CreateUser.prototype)

const user = new CreateUser('kunal', "dhongade", 17, 'kunal@abc.com', 'india')

const person = new CreateUser('naruto', "uzumaki", 17, 'kunal@abc.com', 'Leaf')

const customer = new CreateUser('Gaara', "dhongade", 17, 'kunal@abc.com', 'india')


for (const key in user) {
    console.log(key) // shows prototype keys also
}
console.log("*** *** *** *** ***")
for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
        // const element = user[key]; // it gives us values
        console.log(key) // gives us only keys that user object itself has
    }
}