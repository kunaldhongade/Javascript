// Add new HTML elements to page

// innerHTML to add html element
// use innerHTML to change whole innerHTML do not for add new element
const todoList = document.querySelector(".todo-list")

todoList.innerHTML += '<li>New TD</li>'
todoList.innerHTML += '<li>UPdate</li>'
// with this method browser updates todoList every time we add new it reduce performance
console.log(todoList);

// when you should use it, when you should not