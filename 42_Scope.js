// block scope vs function scope

// block scope defines as { } whenever curly brackets are encounters the block scope variable can be used with in it

// function scope variables are used with in function irrespective to blocks 

// let and const are block scope
// var is function scope
// var la aapan kuth pan use karu shakto whole file as function assume kartos

{
    let firstName = "Kunal"
    console.log(firstName);
}

{
    const firstName = "Sasuke"
    console.log(firstName);
}

const firstName = "naruto"
console.log(firstName);


function myApp() {
    if (true) {
        var x = 20
        console.log(x);
    }
    console.log(x);// var is function scope so it can be accessible inside function irrespective of blocks
}
myApp()

function myApp1() {
    if (true) {
        let x = 20
        console.log(x);
    }
    console.log(x);// so let is block scope that why x is not accessible outside that block (if)
}
myApp1()