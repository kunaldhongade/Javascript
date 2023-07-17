// proto chaining is used to link an new object with existing object .
// if any key does not found in current array then js goes to its proto and checks the key or method and use it

const userMethods = {
    about() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and his/her email is ${this.email} lives in ${this.address}`
    },
    is18() {
        return this.age >= 18
    }
}

function createUser(firstName, lastName, age, email, address) {
    const user = new Object(userMethods) // this is proto chaining. and now we can access all methods inside userMethods 

    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.address = address

    return user
}


const user1 = createUser('kunal', "dhongade", 17, 'kunal@abc.com', 'india')
console.log(user1)
console.log(user1.about())


