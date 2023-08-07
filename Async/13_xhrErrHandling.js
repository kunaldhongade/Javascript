const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest()

xhr.open("GET", URL)

xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response)
        // console.log(data)
        const id = data[3].id
        // const idURL = `https://jsonplaceholder.typicode.com/posts/${id}`
        const idURL = `${URL}/${id}`
        const idXhr = new XMLHttpRequest()
        idXhr.open("GET", idURL)
        idXhr.onload = () => {
            const idData = JSON.parse(idXhr.response)
            console.log(idData)
        }
        idXhr.send()
    } else {
        console.log("something went wrong")
    }
}

// network related err
xhr.onerror = () => {
    console.log("network err")
}
xhr.send()
