let team = ["naruto", "sasuke", "kekashi", "obito", "Killer bee", "Itachi", "yamato"]

console.log(team.length)
console.log(team[team.length - 1])

console.log("---------------")

let uTeam = []
for (let i = 0; i < team.length; i++) {
    uTeam.push(team[i].toUpperCase());
}

console.log(uTeam)