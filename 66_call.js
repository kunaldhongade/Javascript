// calling function with call method

// function hello() {
//     console.log("first")
// }
// hello.call()

function about(hobby, favMusician) {
    console.log(`${this.firstName} ${this.age} ${hobby} ${favMusician}`)
}
const person = {
    firstName: "kunal",
    age: 8,
    // about: function (hobby, favMusician) {
    //     console.log(`${this.firstName} ${this.age} ${hobby} ${favMusician}`)
    // }
}

const person2 = {
    firstName: "naruto",
    age: 17,
}

// person.about()
// person.about.call(person2, "guitar", "Lisa")// this bind with person2
// person.about.call()// undefined because this does not bind with anything

about.call(person, "Drum", "BTS") // call any function with passing object value's as parameter