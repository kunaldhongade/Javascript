// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

const navItems = document.getElementsByClassName("nav-item")
console.log(navItems) // this is will return htmlCollection Array like object provides indexing and length property
// which means we can iterate over HTMLCollection using indexing although it does't provide all methods but its sufficient

console.log(navItems[0])
console.log(Array.isArray(navItems))

// query selector all

const navItems1 = document.querySelectorAll(".nav-item") //  it will returns nodeList
// NodeList is Array like object

console.log(navItems1[2])
console.log(navItems1.length)