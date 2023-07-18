// Static method and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // javascript has static method and static properties

    // class property means class variable

    static desc = "Static Property" // static property access by just class name and property key only

    static classInfo() {
        return "This is static function in person class"
    }

    // below method's are related my object of this class but static methods are related to class only (directed)
    // there is no need to create object to access this static methods
    // we cant call this static method's with object

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        fullName = fullName.trim()
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }

    eat() {
        return `${this.
            firstName} is eating`
    }

    run(speed) {
        this.speed = speed
        return `${this.firstName} is running at ${this.speed} km-ph`
    }
}

const Person1obj = new Person("kunal", "dhongade", 7);
console.log(Person1obj.fullName)
console.log(Person1obj.eat())

// calling static function eg ClassName.StaticFunc()
console.log(Person.classInfo())
console.log(Person.desc)