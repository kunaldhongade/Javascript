const todoForm = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type = 'text']")
const todoList = document.querySelector(".todo-list")


todoForm.addEventListener("submit", (e) => {
    e.preventDefault() // this stop's page from reload automatically
    const newTodoText = todoInput.value
    const newLi = document.createElement("li")
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons done">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `
    newLi.innerHTML = newLiInnerHtml

    todoList.append(newLi)

    todoInput.value = ""
})

todoList.addEventListener("click", (e) => {
    // console.log(e.target)
    // check if user clicked on done button
    // console.log(e.target.classList)

    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling
        liSpan.style.textDecoration = "line-through"
        console.log(liSpan)
    }
    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode
        console.log(targetedLi)
        targetedLi.remove()
    }
})