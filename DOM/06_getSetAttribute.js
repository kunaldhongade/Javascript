// get and set attributes

const input = document.querySelector(".form-todo input")
console.log(input.getAttribute('type'))

const link = document.querySelector("a")//  select first anchor tag
console.log(link.getAttribute("href"))

// setting attribute
link.setAttribute("href", "https://kunaldhongade.tech")
console.log(link.getAttribute("href"))
