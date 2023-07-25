function func() {
    let flag = 0
    return function () {
        if (flag < 1) {

            console.log("Hi, You called me!")
            flag++
        }
        else {
            console.log("mai already ek bar call ho chuka hoo")
        }


    }
}
const myFunc = func()
myFunc()
myFunc()
myFunc()
myFunc()
myFunc()
myFunc() 