// methods
// function inside object

function personInfo() {
    console.log(`person name is ${this.firstName} and persons age is ${this.age}`)
}

const person = {
    firstName: "kunal",
    age: 8,
    about: personInfo
}

const person2 = {
    firstName: "naruto",
    age: 17,
    about: personInfo
}

const person3 = {
    firstName: "Sasuke",
    age: 17.3,
    about: personInfo
}

personInfo() // this function useless with 'this' keyword 
person.about() // about function la person object call karto
person2.about()
person3.about()

// this reference to object itself
// this is person object
// this is a calling object

// javascript cha global object window object
// console.log(this)
// console.log(window)

function myFunc() {
    // "use strict" // prevent displaying window obj
    console.log(this)
}

myFunc()