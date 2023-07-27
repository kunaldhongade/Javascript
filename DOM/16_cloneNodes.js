// clone nodes

const ul = document.querySelector(".todo-list")
const li = document.createElement("li") // we have one node so one node work as append or prepend not both means it will show one behavior
li.textContent = "new Todo"
const li2 = li.cloneNode(true)// if we do not pass true as argument that means it will be simple clone means only li element will be cloned
// however if we pass true that means it will perform deep cloning means all child node of li will be cloned also
ul.append(li)
ul.prepend(li2)