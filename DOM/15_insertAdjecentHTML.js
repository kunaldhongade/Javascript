// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list")
todoList.insertAdjacentHTML("beforeend", "<li>beforeend</li>") // just work as append
todoList.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>") // just work as prepend
todoList.insertAdjacentHTML("beforebegin", "<li>beforebegin</li>") // just work as prepend elem
todoList.insertAdjacentHTML("afterend", "<li>afterend</li>") // just work as append elem
