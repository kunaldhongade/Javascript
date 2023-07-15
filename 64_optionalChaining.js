// optional chaining

const user = {
    firstName: "kunal",
    address: { houseNumber: '1234' }
}

console.log(user.firstName)
console.log(user.address.houseNumber) // address is also object
console.log(user?.address?.houseNumber)
// in the javascript jar object madhe key nasel tr undefined return hot
// pn jar key madhe key nasel tr  err yeto 
// object ha defined asel tr error yeto ha err yeu naye mhanun aapan optional chaining cha use karto

