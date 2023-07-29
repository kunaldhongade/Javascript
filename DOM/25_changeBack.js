
const BtnAll = document.querySelectorAll("button")

BtnAll.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // const body = document.querySelector("body")
        // body.style.backgroundColor = "Yellow"

        // btn.style.backgroundColor = "gray"
        // btn.style.color = "white"

        event.target.style.backgroundColor = "yellow"
        event.target.style.color = "black"

    })
})