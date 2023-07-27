// here is three button 

const allBtn = document.querySelectorAll("button")

// loop add event

for (let btn of allBtn) {
    btn.addEventListener("click", function () {
        console.log(this.textContent)
    })
}

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click", function () {
        console.log(this.textContent)
    })
}

allBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        console.log(this.textContent)
    })
})
