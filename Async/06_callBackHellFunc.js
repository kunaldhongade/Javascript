const heading1 = document.querySelector(".heading")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

// console.log(heading1) // this will return null because above heading class does not exist 

function changeText(element, text, color, time, onSuccessCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text
            element.style.color = color
            onSuccessCallback()
        } else {
            console.log("your element does not exist")
        }
    }, time);
}

changeText(heading1, "one", "violet", 3000)