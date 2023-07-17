class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        return `${this.name} is eating`
    }

    isAdult() {
        return this.age >= 2
    }

    isMammal() {
        return true
    }
}

const animal1 = new Animal("tom", 2)
console.log(animal1)
console.log(animal1.eat())
console.log(animal1.isAdult())
console.log(animal1.isMammal())

// Dog class
class Dog {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        return `${this.name} is eating`
    }

    isAdult() {
        return this.age >= 2
    }

    isMammal() {
        return true
    }
}

const tommy = new Dog("tommy", 3)
console.log(tommy.isAdult())

