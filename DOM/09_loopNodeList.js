let navItems = document.querySelectorAll("a")
console.log(navItems)


// for loop
// for of loop
// for in loop
// foreach loop

// for (let navItem of navItems) {
//     navItem.style.color = "blue"
// }

// for (let key in navItems) {
//     const navItem = navItems[key]
//     navItem.style.backgroundColor = "red"
// }

navItems.forEach((navItem) => {
    navItem.style.border = "5px solid green"
});