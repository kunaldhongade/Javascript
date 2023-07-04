const key = "Tailed Beast"
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

console.log(naruto.Team)
console.log(naruto["chakra Mode"]);
naruto[key] = "Kuruma Nine Tails"
console.log(naruto)

