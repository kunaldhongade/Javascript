// function returning function 

function myFunc() {
    function hello() {
        return "hello world"
    }
    return hello
}

const ans = myFunc()
console.log(ans);

console.log(ans()) // this variable becomes function'

// high order function

// jevha aapan function input kartoy kiva funtion la return kartoy kivha donhi kam kartoy tyala high order funtion mahntat