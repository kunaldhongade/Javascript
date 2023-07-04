// object inside array
// vary use full in real world

const users = [
    { userId: 1, firstName: 'Kunal', lastName: "Dhongade" },
    { userId: 2, firstName: "Naruto", lastName: "Uzumaki" },
    { userId: 3, firstName: "Sasuke", lastName: 'Uchiha' }
]

for (const user of users) {
    console.log(user.lastName);
}