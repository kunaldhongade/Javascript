const obj1 = {
    key1: "value1",
    key2: "value2",
}

const obj2 = Object.create(obj1) // new way to create an object
// this object.create method link obj2 to obj1 so, if any key is not available in obj2 then javascript automatically checks in obj1 and print the value
// proto chaining

obj2.key3 = "value3"

// console.log(obj1)
// console.log(obj2)
console.log(obj2.__proto__) // this is displays proto means obj1!

// official ecmascript documentation
// [[prototype]] & __proto__ are same

// prototype is different