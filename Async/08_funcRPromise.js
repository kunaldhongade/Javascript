// function returning promise

function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']

    return new Promise((resolve, reject) => {
        if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
            resolve({ value: 'friedRice' })
        } else {
            reject("could not do it")
        }
    })
}

ricePromise().then((afterResolve) => {
    console.log("lets eats ", afterResolve)
}).catch((error) => {
    console.log(error)
})