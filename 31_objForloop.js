const naruto = {
    Team: 7,
    Father: "Minato",
    Mother: "Kushina",
    clan: ["Uzumaki", "Namikaze"],
    village: "Leaf",
    sensei: ["Iruka", "Kakashi", "Jiraya"],
    Jutsu: ["Shadow Clone", "Summoning", "Rasengan"],
    "chakra Mode": ["Toad Sage Mode", "Tailed Beast Mode", "Sage of Sixth path Mode"]
}

// for in loop
// Object.keys

for (let key in naruto) {

    console.log(naruto[key]) // this will return keys value
}

for (const key in naruto) {
    if (Object.hasOwnProperty.call(naruto, key)) {
        const element = naruto[key];
        console.log(`${key}: ${naruto[key]}`)
        // console.log(key, naruto[key])
    }
}

// console.log(Object.keys(naruto)) // object.keys gives us array
// 
// const val = Array.isArray((Object.keys(naruto)))
// console.log(val)

// for of loop

for (let key of Object.keys(naruto)) {
    console.log(naruto[key])
}