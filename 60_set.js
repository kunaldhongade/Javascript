// sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)


// set madhe duplicates nastat pn array madhe asu shaktat
// duplicate values are ignored
const n = [11, 12, 13, 14, 15]
const num = new Set([1, 2, 3, 3, 5, 5])

console.log(num)

const str = new Set("kunal")
console.log(str)

// empty set

const numbers = new Set()
numbers.add(1)
numbers.add('3')
numbers.add(false)
numbers.add(true)
numbers.add(n)
// numbers.add(n) // this is ignored
// numbers.add(true)
numbers.add(['i1', 'i2', 'i3'])
numbers.add(['i1', 'i2', 'i3']) // array on memory treated as different
numbers.add([1, 2, 3])
numbers.add([1, 2, 3])
numbers.add([true, false])
numbers.add({ a: "A", b: "B" }) // object in set possible
console.log(numbers)

if (numbers.has(1)) {
    console.log("1 is present")
} else {
    console.log("1 is not present")
}

for (let number of numbers) {
    console.log(number)
}