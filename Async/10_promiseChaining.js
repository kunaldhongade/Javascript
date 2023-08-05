// promise.resolve
// promise chaining


/*

*/
// const myPromise = Promise.resolve(7) // it return a promise that resolve with value 7
// myPromise
//     .then((value) => { console.log(value) })

/*
    then method always return promise
    because of we could create promise chain

*/

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo")
    })
}

myPromise()
    .then((value) => {
        console.log(value);
        value += 'bar';
        return value// it does not return value it returns whole promise
        // internally
        // return Promise.resolve(value)
        // if we does not return then js will return
        // return undefined
    })
    .then(value => {
        console.log(value)
        value += "Baaz"
        return value
    })
    .then(value => {
        console.log(value)
        value += "XXX"
        return value
    })
    .then(value => {
        console.log(value)
    })


myPromise().then().then()