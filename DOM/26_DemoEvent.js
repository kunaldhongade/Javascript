const mainButton = document.querySelector("button")
const body = document.body

mainButton.addEventListener("click", (event) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // const a = Math.random()

    console.log(r, g, b)

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    const currentColor = document.querySelector(".Current-color")
    currentColor.textContent = `Current Color : rgb(${r}, ${g}, ${b})`
})