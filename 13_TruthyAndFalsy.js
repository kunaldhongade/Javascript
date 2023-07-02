// Truthy value means that indicate something 
// any non zero value is truthy value
// eg. "abc", 1, -1

if ("abc") {
    console.log("truthy value, so this line of code runs")
}

// falsy value means zero that indicates any value with shows null
// eg. null, undefined 0

if (null) {
    console.log("falsy value, so this line of code does not run")
} else {
    console.log("its a falsy value")
}