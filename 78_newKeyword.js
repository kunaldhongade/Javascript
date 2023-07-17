// new keyword

function createUser(firstName, age) {
    this.firstName = firstName
    this.age = age
}

// calling function with new keyword

createUser.prototype.about = function () {
    console.log(this.firstName, this.age)
}

const user1 = new createUser("kunal", 5) // new keyword create empty object with value of this

console.log(user1);

// new keyword
// 1. empty object this  = {}
// 2. return this
// 3. Object.create(createUser.prototype) he kam this keyword swath karto

user1.about()