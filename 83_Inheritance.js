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

// this is inheritance

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age)
        this.speed = speed
    }

    eat() {
        return `Modified Eat: ${this.name} is eating`
    }
    run() {
        return `${this.name} is running at ${this.speed} kmph`
    }
}

// inheritance kelyavar jar sub class madhe constructor nasel tar parent class cha constructor call kela jato
// aani methods sub class madhe nasel tar parent / super class madhe search karto
// object / instance are same
const tommy = new Dog("tommy", 3, 45)
console.log(tommy.isAdult())
console.log(tommy.run())
console.log(tommy.eat())