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
console.log(obj.hinata)
console.log(obj["kunal"])

obj.Naruto = ["Uzumaki", "Namikaze"]

for (clans of obj.hinata) {
    console.log(clans)
}

console.log(obj)
