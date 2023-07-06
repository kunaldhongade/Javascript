const users = [
    { userId: 1, firstName: 'Kunal', lastName: "Dhongade" },
    { userId: 2, firstName: "Naruto", lastName: "Uzumaki" },
    { userId: 3, firstName: "Sasuke", lastName: 'Uchiha' }
]

const [user1, user2, user3] = users

console.log(user2);

const [{ firstName: usr1FN }, { userId }, { lastName }] = users // first we destructure array and then object
console.log(usr1FN, userId, lastName)

