// this keyword

const btn = document.querySelector(".btn-headline")

///function declaration

function myFunc() {
    console.log("My function")
    console.log(this)
}

btn.addEventListener("click", myFunc)

// value of this in side eventListener is btn itself only in function declaration
// in function expression value of this will be window
// arrow function aaplya aadhichya scope cha this use karto


