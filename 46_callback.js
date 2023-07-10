// call back in javascript

function myFunc(callback) {
    callback("Shikamaru") // call back
    // sql query 
    // callback la apan data send karto 
    console.log("hello world");
}

function myFunc2(name) {
    console.log("myFunc2, your name is", name);
}

myFunc(myFunc2)

// function madhe function la input gheun tya function la call karu shakto tyala call back function mhantat