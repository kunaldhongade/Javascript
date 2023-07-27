// these are the old methods to support poor IE

// appendChild
// insertBefore
// replaceChild
// removeChild

const todoList = document.querySelector(".todo-list")

// appendChild
const newTodo = document.createElement("li")
newTodo.textContent = "Hii this is append Child"
todoList.appendChild(newTodo)

// insertBefore
const newTodo2 = document.createElement("li")
newTodo2.textContent = "insertBefore"
const referenceNode = document.querySelector(".first-todo")
todoList.insertBefore(newTodo2, referenceNode)

// replaceChild
const newTodo3 = document.createElement("li")
newTodo3.textContent = "replace"
todoList.replaceChild(newTodo3, newTodo2)

// removeChild
todoList.removeChild(referenceNode)