import { age, YearOfBirth } from "./utils/age.js";
import { firstName as fname } from "./utils/fname.js";
// are named export
import Person from "./utils/person.js";
// these is default


console.log(fname, age, YearOfBirth)
const person = new Person("kunal", "dhongade", 20)
console.log(person)
person.info()

// with the help of export default we can export single value but we do not need curly brackets while import
// one default export in one file