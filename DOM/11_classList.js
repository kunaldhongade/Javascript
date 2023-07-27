// to get all classes set to particular element

const sectionTodo = document.querySelector(".section-todo")

sectionTodo.classList.add('borderSection')
sectionTodo.classList.remove('container')
const classExists = sectionTodo.classList.contains('section-todo')

console.log(sectionTodo.classList, classExists)

// toggle checks whether the class exist or not
// if exist then remove and if not exist then add

sectionTodo.classList.toggle("borderSection")
sectionTodo.classList.toggle("container")


// selecting header

const header = document.querySelector(".header")
console.log(header.classList)
header.classList.add("borderSection")
