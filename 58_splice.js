// splice method
// start, delete, insert

const myArray = ['item1', 'item2', 'item3']

// delete

const deletedMyArray = myArray.splice(1, 1)

console.log(myArray, "deleted item", deletedMyArray)

// insert
const arr = ['item1', 'item2', 'item3']

arr.splice(1, 0, 'inserted item')

console.log(arr)

// insert and delete 

const arrInDe = ['kunal', 'naruto', 'sasuke', 'sakura']
const trash = arrInDe.splice(3, 1, "Sai", "Yamato")
console.log(arrInDe)
console.log(trash)
