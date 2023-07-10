// default parameter
// default parameters are hardcoded parameter so our function does not fails

function addTwo(a = 0, b = 0) {
    return a + b;
}

const ans = addTwo(4)
const an = addTwo(2, 4)
const as = addTwo()
// const a = addTwo(, 3) // error
console.log(as);

