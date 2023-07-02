// array push pop
// array shift unshift
// array is Mutable

let TeamNaruto = ["Naruto", "Shikamaru", "chozi", "sasuke", "Sakura"]
console.log(TeamNaruto)

TeamNaruto.push("Sai")
TeamNaruto.push("Yamato")
TeamNaruto.push("Killer Bee")

console.log(TeamNaruto)

let poppedMem = Array(TeamNaruto.pop())
poppedMem[1] = TeamNaruto.pop()
poppedMem[2] = TeamNaruto.pop()
console.log(poppedMem)

// shift

TeamNaruto.unshift("Minato", "kushina", "Kuruma")
console.log(TeamNaruto)


let removedMem = TeamNaruto.shift()
console.log(removedMem)