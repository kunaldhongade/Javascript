// lexical scope ...
// javascript variable chi value aadhi inside function check karen mg jar nasen tr value lexical environment madhe check karen
// lexical environment mhanje function chya aadhicha scope

const myVar = "Value1"
function myApp() {


    function myFunc() {
        // const myVar = "v59"
        // console.log("inside myFunc", myVar);
        const myFunc2 = function () {
            console.log("inside myFunc2", myVar);
        }
        myFunc2()
    }

    const myFunc3 = () => { }
    console.log(myVar);
    myFunc()
}

myApp()