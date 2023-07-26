//  select element using query selector

// getElementById works for only ids

// but querySelector works for Id, class, element and many others

const mainHeading = document.querySelector("#main-heading")
console.log(mainHeading)

const header = document.querySelector(".header")
console.log(header)

const section = document.querySelector("section")
console.log(section)

// id must be unique
// multiple class allowed

// if multiple class presented so querySelector returns first element with class
const navItem = document.querySelector(".nav-item")
console.log(navItem)

// if we need all elements with same class
const navItems = document.querySelectorAll(".nav-item")
console.log(navItems)
