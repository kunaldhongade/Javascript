// selecting the element using getElementById

console.log(document.getElementById("main-heading"))
// browser returns object but it looks like html element

console.dir(document.getElementById("main-heading")) // returns object

const mainHeading = document.getElementById("main-heading")
console.log(mainHeading)