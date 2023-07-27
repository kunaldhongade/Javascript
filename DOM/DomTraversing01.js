const myHeading = document.getRootNode().childNodes[0].childNodes[2].childNodes[1].childNodes[1]

console.log(myHeading)

const h1 = document.querySelector("h1")
console.log(h1)

const div = h1.parentElement
div.style.backgroundColor = "black"
div.style.color = "yellow"
div.style.textAlign = "center"
div.style.padding = "0.5rem 0.5rem"

// go to body

const body = h1.parentElement.parentElement
bStyle = body.style
bStyle.backgroundColor = "yellow"
bStyle.color = "black"

// selecting head
const head = document.querySelector("head")
console.log(head)

const title = document.querySelector("title")
console.log(title.childNodes)

// html child node head, text, body
// but we does not need text node 

const container = document.querySelector(".container")
console.log(container.children) // returns only elements with real data in HTMLCollections