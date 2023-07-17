// Class in Javascript 
// class is fake in javascript
// class madhe internally kam aadhi je kel tasach hot
class CreateUser {
    constructor(firstName, lastName, age, email, address) {
        console.log("constructor is called")
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.address = address
    }

    // object/class madhil function la method mhantat
    // constructor automatically call honar
    // empty object create honar tya mdhe properties automatically add honar 
    // aani below che function's prototype madhe add honar automatically

    about() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and his/her email is ${this.email} lives in ${this.address}`
    }

    is18() {
        return this.age >= 18
    }

    sing() {
        return "im singing a song"
    }
}

const user = new CreateUser('kunal', "dhongade", 17, 'kunal@abc.com', 'india')

const person = new CreateUser('naruto', "uzumaki", 17, 'naruto@leaf.com', 'Leaf')

const customer = new CreateUser('Gaara', "The Sand", 17, 'gaara@sand.com', 'Sand')

console.log(user.about())

// for (const key in user) {
//     console.log(key) // shows prototype keys also pn class madhe ny class aslyavar fkt properties
// }
console.log("*** *** *** *** ***")
for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
        // const element = user[key]; // it gives us values
        console.log(key) // gives us only keys that user object itself has
    }
}

// to view prototype
console.log(Object.getPrototypeOf(user))
