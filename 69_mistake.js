const user = {
    firstName: "kd",
    age: 8,
    about: function () {
        console.log(this)
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake

// const usrFunc = user.about
// in this case, object does not bind with function 
// so, usrFunc contains whole function that about return but not that object itself

// we need to bind object with function with bind method
const usrFunc = user.about.bind(user)
usrFunc()