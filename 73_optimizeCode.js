const userMethods = {
    about() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and his/her email is ${this.email} lives in ${this.address}`
    },
    is18() {
        return this.age >= 18
    }
}

function createUser(firstName, lastName, age, email, address) {
    const user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.address = address
    user.about = userMethods.about // there is no need to create function every time it just reference function created before
    user.is18 = userMethods.is18

    return user
}


const user1 = createUser('kunal', "dhongade", 17, 'kunal@abc.com', 'india')
console.log(user1)
console.log(user1.about())


