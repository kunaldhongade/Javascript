// static list vs live list

const listItems = document.querySelectorAll(".todo-list li")
const sixthLi = document.createElement("li")
sixthLi.textContent = "item 6"
const ul = document.querySelector(".todo-list")
ul.append(sixthLi)

console.log(listItems)// we added 6th item but still listItems (nodeList) only 5 items
// this means static NodeList if we set new items they will not be reflected in NodeList


// querySelectorAll gives us static list (NodeList)
// getElementsBy... gives us live list (HtmlCollection)


// live list

const todoList = document.querySelector(".todo-list")
const allLI = todoList.getElementsByTagName("li")

const sevLi = document.createElement("li")
sevLi.textContent = "Seventh Item"
todoList.append(sevLi)
console.log(allLI)