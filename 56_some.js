// some method in js
// returns true iff any number satisfy condition returned in callback
const num = [3, 5, 6, 4]

const ans = num.some((num) => num % 2 === 0)
console.log(ans);