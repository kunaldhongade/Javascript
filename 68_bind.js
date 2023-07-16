function about(hobby, nickName) {
    console.log(this.firstName, this.age, hobby, nickName)
}

const user = {
    firstName: "Sakura",
    age: 15
}

const user2 = {
    firstName: "Tanjuro",
    age: 15
}

// bind method returns new function

const userFunc = about.bind(user, "Non sense", "bitch")
userFunc()