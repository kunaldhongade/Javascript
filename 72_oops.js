// object oriented programming
// proto, prototype, class

const user = {
    firstName: "kunal",
    lastName: "Dhongade",
    email: "kunal@gmail.com",
    age: 20,
    address: "Pune, Maharashtra, India",
    about() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18() {
        return this.age >= 18
    }
}

// const aboutUser = user.about()
// console.log(aboutUser);

// const userIs18 = user.is18()
// console.log(userIs18)

// function (that function create object)
// add key value pair
// return object

function createUser(firstName, lastName, age, email, address) {
    const user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address

    user.about = function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and his/her email is ${this.email} lives at ${this.address}`
    }

    user.is18 = function () {
        return this.age >= 18
    }

    return user
}

const user1 = createUser('Naruto', "Uzumaki", 17, 'naruto@konoha.com', "Hidden Leaf Village")
const is18 = user1.is18()
console.log(user1.about(), is18)



const user2 = createUser('Naruto', "Uzumaki", 17, 'naruto@konoha.com', "Hidden Leaf Village")

const user3 = createUser('Naruto', "Uzumaki", 17, 'naruto@konoha.com', "Hidden Leaf Village")

// same method chi multiple copies hoti aahe te chukich aahe