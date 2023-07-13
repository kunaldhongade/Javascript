// iterables 
// jispe hum for of loop laga sake
// eg, string , array are iterable

const firstName = "kunal"
for (let char of firstName) {
    console.log(char)
}

const items = ["item1", "item2", "item3"]
for (let item of items) {
    console.log(item)
}

// objects are not iterables

const object = { 'india': "delhi", 'USA': 'WDC', 'China': "beijing" }

// for (const iterator of object) {
    //     console.log(iterator)
// } // this will throw err
    
    
// array like object
// jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai 
// example :- string

