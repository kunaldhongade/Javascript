// arrays are good but not sufficient for real world data
// objects store key value pairs and it does not have index

// object is reference type // object literal {}
//keys also called as properties
let obj = {
    "kunal": "dhongade",
    "sasuke": "uchhiha",
    "Naruto": "Uzumaki",
    "sakura": ["Uchhiha", "Haruno"],
    "hinata": ["Uzumaki", "Hyuga"],
}

console.log(typeof obj)
console.log(obj)
console.log(obj.hinata) // dot notation
console.log(obj["kunal"]) // bracket notation

obj.Naruto = ["Uzumaki", "Namikaze"]

for (clans of obj.hinata) {
    console.log(clans)
}

console.log(obj)

// obj.key vs obj[key] square brackets works as variable but . works soles like its keys
// so whenever we wanted to use variable as key we should use [] bras