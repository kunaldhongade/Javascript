const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text
                element.style.color = color
                resolve()
            } else {
                reject("err in element")
            }
        }, time);
    })
}

// const returnedPromise = changeText(heading1, "One", "purple", 1000).catch((err) => {
//     console.log(err)
// })

// returnedPromise.then(() => {
//     return changeText(heading2, "Two", "red", 1000)
// })
//     .then(() => {
//         return changeText(heading3, "Three", "blue", 2000)
//     }).catch((err) => { console.log(err) })

//     .then(() => {
//         return changeText(heading4, "Four", "yellow", 1000)
//     }).catch((err) => { console.log(err) })

//     .then(() => {
//         return changeText(heading5, "Five", "violet", 2000)
//     }).catch((err) => { console.log(err) })

//     .then(() => {
//         return changeText(heading6, "Six", "Pink", 1000)
//     }).catch((err) => { console.log(err) })

//     .then(() => {
//         return changeText(heading7, "Seven", "Brown", 2000)
//     }).catch((err) => { console.log(err) })

//     .then(() => {
//         return changeText(heading8, "Eight", "Green", 1000)
//     }).catch((err) => { console.log(err) })

//     .then(() => {
//         return changeText(heading9, "Nine", "wheat", 2000)
//     }).catch((err) => { console.log(err) })

//     .then(() => {
//         return changeText(heading10, "Ten", "Teal", 3000)
//     }).catch((err) => { console.log(err) })

// in this method our promise will continue without any err
// if err occur so every catch associated with then will return err and other will goes as they planed

// this is another way

changeText(heading1, "One", "red", 2000)
    .then(() => changeText(heading2, "TWo", "purple", 1000))
    .then(() => changeText(heading3, "Three", "blue", 1000))
    .then(() => changeText(heading4, "Four", "gray", 1000))
    .then(() => changeText(heading5, "Five", "violet", 1000))
    .then(() => changeText(heading6, "Six", "orange", 1000))
    .then(() => changeText(heading7, "Seven", "pink", 1000))
    .then(() => changeText(heading8, "Eight", "brown", 1000))
    .then(() => changeText(heading9, "Nine", "teal", 1000))
    .then(() => changeText(heading10, "Ten", "yellow", 1000))
    .catch((err) => { console.log(err) })

// if we do not return anything in then so is automatically returned undefined
// so our promise will resolved immediately

// in this way (writing catch in the last ) means if err occur then it will stop execution and return err