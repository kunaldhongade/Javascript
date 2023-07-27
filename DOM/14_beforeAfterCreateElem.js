// before insert

const newTodoItem = document.createElement("li")
newTodoItem.textContent = "WorkOuT"
const todoList = document.querySelector(".todo-list")
todoList.before(newTodoItem)


// after insert
const newTodoItem1 = document.createElement("li")
newTodoItem1.textContent = "Dance"
todoList.after(newTodoItem1)