// spread operator

const obj = {
    key1: "v1",
    key2: "v2",
}

// in Obj key can not be repeated it updated!
// last one always rule

const obj2 = {
    key1: "xyz",
    key3: "v3",
    key4: "v4",
}

const newObj = { ...obj, ...obj2, key10: "val10" }
console.log(newObj);

const strObj = { ..."KunalDhongade" } // uses index as key and each letter as value
console.log(strObj);

// array in obj

const arrObj = { ...["i1", "i2"] }// uses index as key and arr item as values
console.log(arrObj);