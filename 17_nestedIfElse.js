let winningNumber = 19
let userGuess = Number(prompt("Guess a number: "))
console.log("Your Guess: ", userGuess)

if (userGuess === winningNumber) {
    console.log("You win")
} else if (userGuess < winningNumber) {
    console.log("Your number is smaller than winning nUmber");

} else if (userGuess > winningNumber) {
    console.log("Your number is Greater than winning nUmber");

}


if (userGuess === winningNumber) {
    console.log("You win")
} else {
    if (userGuess < winningNumber) {
        console.log("Your number is smaller than winning nUmber");

    } else {
        console.log("Your number is Greater than winning nUmber");

    }
}