const key1 = "objKey1"
const key2 = "objKey2"

const val1 = "myValue1"
const val2 = 'myValue2'

const obj = {}
obj[key1] = val1
obj[key2] = val2
console.log(obj)


const obj2 = {
    [key1]: val1,
    [key2]: val2
}
console.log(obj2)