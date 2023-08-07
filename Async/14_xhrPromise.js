const URL = `https://jsonplaceholder.typicode.com/posts`

console.log(URL)

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            }
            else {
                reject(new Error("Something went wrong"))
            }
        }

        xhr.onerror = function () {
            reject(new Error("Something went wrong"))
        }
        xhr.send()
    })
}

sendRequest("GET", URL)
    .then((response) => {
        const data = JSON.parse(response)
        // console.log(data)
        return data
    })
    .then(data => {
        const id = data[3].id
        // console.log(id)
        return id
    })
    .then(id => {
        console.log(id)
        const nURL = `${URL}/${id}`
        console.log(nURL)
        return sendRequest("GET", nURL)
    })
    .then(newResponse => {
        const data = JSON.parse(newResponse)
        console.log(data)
        return data
    })
    .catch((err) => {
        console.log(err)
    })
