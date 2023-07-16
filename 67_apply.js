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

// apply method

about.apply(user, ["slapping Naruto", "Trash"])
about.apply(user2, ["helping others", "Oni Chan"])
// apply works same as call but we need to pass arguments in [] like arr