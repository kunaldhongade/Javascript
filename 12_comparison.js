let n1 = 4
let n2 = 5

console.log(n1 < n2); // true 
console.log(n1 > n2); // false
console.log(n1 == n2); // false
console.log(n1 != n2); // true
console.log(n1 >= n2); // false
console.log(n1 <= n2); // true

// == vs ===

n1 = 4
n2 = "4"

console.log(n1 == n2) // it only compare values (true)
console.log(n1 === n2) // it compares values with datatypes (false)

// != vs !==
console.log(n1 != n2);// it only compare values (false)
console.log(n1 !== n2)// it compares values with datatypes (true)
