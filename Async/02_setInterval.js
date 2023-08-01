// setInterval

console.log("script start")

setInterval(() => {
    let total = 0

    for (let i = 0; i < 1000000000; i++) {
        total += i
    }

    console.log(total)
    console.log(Math.random())
}, 500)

console.log("Script end")
