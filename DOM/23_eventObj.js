// event Object

// const firstBtn = document.querySelector(".one")
// // this represent firstBtn object
// firstBtn.addEventListener("click", function (event) {
//     console.log(this)
//     console.log(event)
// })

/*

jab bhi mai kisi bhi element pe EventListener ko add karunga
js Engine -- line by line execute karta hai
browser --- js Engine + extra feature
browser ---> js Engine + webApi


browser keep an eye on user Action on btn
after button click browser gives callback function

jab browser ko pata chala ki user ne event perform kia
jo hum listen kar rahe hai

browser 2

1. callBack function hai vo js engine ko dega ...
2. callBack function ke sath browser jo event hua hai uski information bhi dega

information obj madhe milnar aani tya object la aapn recive  karu shakto as argument
*/



const allButtons = document.querySelectorAll(".my-buttons")

// target => Kis element ne event ko trigger kiya
// current target => kis element pe event listener attach kiya tha

for (let btn of allButtons) {
    btn.addEventListener("click", (event) => {
        console.log(event.currentTarget) // where is attached
        console.log(event.target) // fired from click
    })
}