// event delegation

const grandparent = document.querySelector(".grandparent")

grandparent.addEventListener("click", (event) => {
    // console.log(event.target) //returns original clicked div
    console.log(event.target.textContent) // returns contains inside that box and boxes eg. if we clicked on child --> child
    // parent --> parent child
    // grandparent --> grandparent parent child
})

/*
    when clicked on child but bubbling happens can capture event
    above it
    shape of U

*/