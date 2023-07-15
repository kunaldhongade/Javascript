// maps 
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can only have string or symbol
// as key
// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string / symbol

const person = {
    firstName: "kunal",
    age: 7,
    1: "one",
    isMale: true
}

// console.log(person.age)
// console.log(person["firstName"])

// for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) {
//         const element = person[key];
//         console.log(element)
//     }
// }

// key value pair 

// const per = new Map()
// per.set('FN', 'Kunal')
// per.set('age', 5)
// per.set(1, "one")
// per.set([2, 3], "twoThree")
// per.set({ a: 'aA', b: 'bB' }, "twoThree")
// console.log(per)

// console.log(per.get(1))
// console.log(per.get('FN'))
// console.log(per.get('age'))
// console.log(per.keys())

// for (const key of per.keys()) {
//     console.log(key, typeof key)
// }

// for (const [key, value] of per) {
//     console.log(key, value)
// }


// example

const user = new Map([['Name', 'kunal'], ['age', 7]])
// console.log(user)

const No1 = {
    id: 1,
    firstName: "naruto"
}
const No2 = {
    id: 2,
    firstName: "sakura"
}
const No3 = {
    id: 3,
    firstName: "sai"
}

const extraInfo = new Map()
extraInfo.set(No1, { age: 17, gender: "male" })
extraInfo.set(No2, { age: 15, gender: "female" })
extraInfo.set(No3, { age: 18, gender: 'male' })

console.log(No1.firstName)
console.log(extraInfo)
console.log(extraInfo.get(No1).gender)