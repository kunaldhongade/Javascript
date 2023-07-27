// document.createElement()

// append
// prepend
// remove

const newTodoItem = document.createElement("li")
// const newTodoItemText = document.createTextNode("Reading") // 1
newTodoItem.textContent = "Writing" // another simple way

const todoList = document.querySelector(".todo-list")
// newTodoItem.appendChild(newTodoItemText) // 1
todoList.appendChild(newTodoItem)// another simple way


// todoList.append(newTodoItem) // 1
console.log(newTodoItem)


// adding new element 

const newTodoItem1 = document.createElement("li")
newTodoItem1.textContent = "Walking"
// todoList.appendChild(newTodoItem1) // both working
todoList.append(newTodoItem1)

// other way

const newTodoItem2 = document.createElement("li")
const newTodoItem2Text = document.createTextNode("Cycling")
newTodoItem2.append(newTodoItem2Text)
todoList.append(newTodoItem2)

// prepend adding at starting

const newTodoItem3 = document.createElement("li")
newTodoItem3.textContent = "Movie"
todoList.prepend(newTodoItem3)

// to remove element

const removeTodo = document.querySelector('.todo-list li') // it selects first li
removeTodo.remove()
console.log(removeTodo)