const body = document.body
const btn = document.querySelector("button")

const intervalId = setInterval(() => {
    const r = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)

    body.style.background = `rgb(${r}, ${b}, ${g})`
}, 500);

console.log(intervalId)

btn.addEventListener("click", () => {
    clearInterval(intervalId)
    btn.textContent = body.style.background
})