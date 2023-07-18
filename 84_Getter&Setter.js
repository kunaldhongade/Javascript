// getter and setter

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // get is used to run or return function with just its name no need for () eg. Person.fullName means it work as property if we wrote it like function() it will give us err

    // whereas normally we need to write () after function name if we don't it just return whole function
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    setName(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    // set help us set a value just like we did to property with out calling function
    set fullName(fullName) {
        fullName = fullName.trim() // trim from start and end of the string
        const [firstName, lastName] = fullName.split(" ") // split fullName from space
        this.firstName = firstName
        this.lastName = lastName
    }

}

const Person1 = new Person("kunal", "dhongade", 20)
// console.log(Person1.fullName())
console.log(Person1.fullName)

Person1.setName("Naruto", "Uzumaki")
console.log(Person1.firstName)
console.log(Person1.lastName)

Person1.firstName = "Sasuke"
Person1.lastName = "Uchiha"
console.log(Person1.firstName)
console.log(Person1.lastName)

Person1.fullName = "    Temari Nara   "
console.log(Person1)