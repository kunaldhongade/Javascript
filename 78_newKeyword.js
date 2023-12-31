// new keyword

// constructor function starts with capital letter
function CreateUser(firstName, age) {
    this.firstName = firstName
    this.age = age
}

// __proto__
// official ecmascript document
// [[prototype]]

// calling function with new keyword

CreateUser.prototype.about = function () {
    console.log(this.firstName, this.age)
}

const user1 = new CreateUser("kunal", 5) // new keyword create empty object with value of this 

console.log(user1);

// new keyword
// 1. empty object this  = {}
// 2. return this
// 3. Object.create(CreateUser.prototype) he kam this keyword swath karto

user1.about()