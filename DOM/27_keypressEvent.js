// keypress event

const body = document.body;

body.addEventListener("keypress", (event) => {
    console.log(event.key)
})

const mainButton = document.querySelector(".btn-headline")

mainButton.addEventListener("mouseover", () => {
    console.log("mouseover even ocurred!")
})

mainButton.addEventListener("mouseleave", () => {
    console.log("mouseleave even ocurred")
})