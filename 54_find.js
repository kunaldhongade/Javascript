const Array1 = ["hello", "kunal", "ho8w", "are9", "You"]

const isLength3 = (string) => {
    return string.length === 3
}

const ans = isLength3("You");
console.log(ans);

const lenElement3 = Array1.find((string) => string.length === 3)
console.log(lenElement3);

const users = [
    { userId: 1, userName: "kunal" },
    { userId: 2, userName: "naruto" },
    { userId: 3, userName: "sasuke" },
    { userId: 4, userName: "sakura" },
    { userId: 5, userName: "neha" },
]
console.log(users);

const myUser = users.find((user) => user.userId === 3)
console.log(myUser);