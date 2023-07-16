const user = {
    firstName: "kd",
    age: 8,
    about() {
        console.log(this)
        console.log(this.firstName, this.age);
    }
}
user.about()