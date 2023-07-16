// arrow function

const user = {
    firstName: "kd",
    age: 8,
    about: () => {
        console.log(this)
        console.log(this.firstName, this.age);
    }
}

// arrow function does not have this property
// arrow function this surrounding pasun gheto
// arrow function cha this one level up asto mhanje user object nasun window object
// we can't change this of arrow function

user.about.apply(user)