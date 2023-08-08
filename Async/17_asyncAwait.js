// async await


// fetch(URL)
//     .then(res => res.json())
//     .then(data => { console.log(data) })
console.log("script start")
const URL = "https://jsonplaceholder.typicode.com/posts"

// this is not normal function
// this will return promise always
// every thing with async browser work on it in background
async function getPosts() {
    const response = await fetch(URL)// await waits for resolve fetch
    // jo paryant hi line finished ny honar to paryant pudhachi line start ny honar
    // mostly await promise return honarya var lavtat

    if (!response.ok) {
        throw new Error("something went wrong ", response.status)
    }

    const data = await response.json()
    // console.log(data)
    return data// actually promise return not data itself
}

// const getPosts = async () => {
//     const response = await fetch(URL)

//     if (!response.ok) {
//         throw new Error("something went wrong ", response.status)
//     }

//     const data = await response.json()
//     return data
// }

// const myData = getPosts()
// console.log(myData)// it is promise returned

getPosts()
    .then(data => { console.log(data) })
    .catch(err => { console.log("inside catch"); console.log(err) })

console.log("script end")
