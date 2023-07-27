// HTMLCollection


// tagName selects tag all
let navItems = document.getElementsByTagName("a")
console.log(navItems)
// simple for loop
// we can't use forEach for HTMLCollection
// for of loop
// for in loop 

// for (let i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i])

//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#aaa"
//     navItem.style.color = "green"
// }

// for (let navItem of navItems) {
//     navItem.style.fontWeight = "500"
// }


// we can't use forEach loop in HTMLCollection

// we can convert HTMLCollection into Array

navItems = Array.from(navItems)
console.log(Array.isArray(navItems))

// now we can use for Each because we converted HTMLCollection into Array

navItems.forEach((navItem) => {
    navItem.style.border = "1px solid white"
    navItem.style.padding = "0.2rem"
})
