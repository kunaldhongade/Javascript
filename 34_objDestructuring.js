// obj destructuring

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

const TNo = naruto.Team
console.log(TNo);

const { sensei, Father } = naruto
console.log(sensei, Father)

// change variable name as we want

let { Team: TeamNo, Mother, ...restProps } = naruto
console.log(TeamNo, Mother);
console.log(restProps)

// restProps returns rest of object content in object