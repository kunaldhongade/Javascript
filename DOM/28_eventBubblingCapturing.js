// event Bubbling (event Propagation)
// event Capturing

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
const body = document.body

child.addEventListener("click", () => {
    console.log("captured !!! child")
}, true)

parent.addEventListener("click", () => {
    console.log("captured !!! parent")
}, true)

grandparent.addEventListener("click", () => {
    console.log("captured !!! grandparent")
}, true)

body.addEventListener("click", () => {
    console.log("captured !!! body")
}, true)


// Capturing Events

/*
    1. browser runs capture then other events


    execution
        1. capture body
        2. capture grandparent
        3. capture parent
        4. capture child
        5. You clicked on child
        6. You clicked on parent
        7. you clicked on grandparent
        8. You clicked on body

        these events are triggered by just one click

*/


// Event Bubbling
child.addEventListener("click", () => {
    console.log("bubbled child")
})

parent.addEventListener("click", () => {
    console.log("bubbled parent")
})

grandparent.addEventListener("click", () => {
    console.log("bubbled grandparent")
})

body.addEventListener("click", () => {
    console.log("bubbled body")
})

/*
    In Event Bubbling
        If we click on child only our parent and grand parent also called

        child --> parent --> grandparent --> body
        - Event Bubbling is method of event propagation.
        - when an event is in an element inside another element, and both elements have registered a handle to that event
        - it is process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy


        * element var event asen ter tyachya parent aani parent chya parent up to document.body event call hoten
*/
