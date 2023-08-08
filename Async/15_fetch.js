// fetch

const URL = `https://jsonplaceholder.typicode.com/posts`

// inbuilt, if we pass url it will automatically get request

// fetch return promise
fetch(URL)
    .then(response => {

        console.log(response)// it will return whole response with headers and all

        // console.log(response.json())// it will also return promise
        if (response.ok) {
            return response.json()// it is promise
        } else {
            throw new Error("Something went wrong")
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch((err) => {
        console.log("inside catch")
        console.log(err)
    })

// fetch always reject when  err with network
