// event delegation

const grandparent = document.querySelector(".grandparent")

grandparent.addEventListener("click", (event) => {
    console.log("you clicked grandparent")
})

/*
    when clicked on child but bubbling happens can capture event
    above it
    shape of U
    
*/