const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

// console.log(heading1) // this will return null because above heading class does not exist 

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text
            element.style.color = color
            if (onSuccessCallback) {
                onSuccessCallback()
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback()
            }
        }
    }, time);
}
// this is pyramid of doom

changeText(heading1, "one", "red", 1000, () => {
    console.log("Heading 1 exists")
    changeText(heading2, "two", "purple", 2000, () => {
        console.log("Heading 2 exists")
        changeText(heading3, "three", "green", 3000, () => {
            console.log("Heading 3 exists")
            changeText(heading4, "four", "orange", 4000, () => {
                console.log("Heading 4 exists")
                changeText(heading5, "five", "yellow", 5000, () => {
                    console.log("Heading 5 exists")
                    changeText(heading6, "six", "violet", 2000, () => {
                        console.log("Heading 6 exists")
                        changeText(heading7, "seven", "pink", 4000, () => {
                            console.log("Heading 7 exists")
                            changeText(heading8, "eight", "brown", 1000, () => {
                                console.log("Heading 8 exists")
                                changeText(heading9, "nine", "powderBlue", 2000, () => {
                                    console.log("Heading 9 exists")
                                    changeText(heading10, "ten", "cyan", 2000, () => {
                                        console.log("Heading 10 exists")
                                    }, () => {
                                        console.log("heading 10 not exist, Failed Callback")
                                    })
                                }, () => {
                                    console.log("Heading 9 not exist, Failed Callback")
                                })
                            }, () => {
                                console.log("Heading 8 not exist, Failed Callback")
                            })
                        }, () => {
                            console.log("Heading  7 not exist, Failed Callback")
                        })
                    }, () => {
                        console.log("Heading 6 does not exist, Failed Callback")
                    })
                }, () => {
                    console.log("Heading 5 does not exist, Failed Callback")
                })
            }, () => {
                console.log("Heading 4 does not exist, Failed Callback")
            })
        }, () => {
            console.log("Heading 3 does not exist, Failed Callback")
        })
    }, () => {
        console.log("Heading 2 does not exist, Failed Callback")
    })
}, () => {
    console.log("Heading 1 does not exist, Failed Callback")
})    