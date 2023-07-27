// intro to events in Js
// click, submit, press btn, hover are events

// click event
// event 

const btn = document.querySelector(".btn-headline")
// method -- addEventListener
function clickMe() {
    console.log("You clicked me!");
}
// btn.addEventListener("click", clickMe)
btn.addEventListener("click", () => {
    console.log("You clicked me")
})



