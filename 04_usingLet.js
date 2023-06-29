// let keyword
// declare using let keyword

var lang = "Cpp";
var lang = "Java";
console.log(lang)

let variable = "JavaScript";
variable = "Typescript"
console.log(variable);

function varExample() {
    var x = 1;

    if (1) {
        var x = 101
        console.log(x) // 101
    }
    console.log(x) // 101
}

function letExample() {
    let x = 1;

    if (1) {
        let x = 111
        console.log(x) // 111
    }

    console.log(x) // 1
}
varExample()
letExample()
// block scope vs function scope