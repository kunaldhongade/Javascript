const app = () => {
    const myFunc = () => {
        console.log("hello myFunc", addTwo(3, 5));
    }

    const addTwo = (num1, num2) => {
        return num1 + num2
    }

    const mul = (num1, num2) => num1 * num2

    console.log("inside app", mul(2, 5));
    myFunc()

}
app()