let array = [1, 2, 2, 3, 4, 3]

function removeOccurrences(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            array.splice(i, 1)
        }
    }
}

removeOccurrences(array, 2)
console.log(array)