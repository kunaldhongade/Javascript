// parameter Destructuring

// mostly used in react
// object

const person = {
    Fn: "kunal",
    gender: "male"

}

function printDetails(obj) {
    console.log(obj.Fn);
    console.log(obj.gender);
    // console.log(obj.age); // undefined
}

function printDetails({ Fn, gender }) { // object parameter destructing
    console.log(Fn);
    console.log(gender);
    console.log("hello");// last one call hoto aahe
    // console.log(age); // not defined err
}
printDetails(person)