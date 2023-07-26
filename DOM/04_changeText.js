// we want to change text from javascript on web page

const mainHeading = document.getElementById("main-heading")
console.log(mainHeading.textContent)

// mainHeading.textContent = 'This is something else'// changing text with textContent
console.log(mainHeading.textContent)
// textContent returns whole text content hidden also


// innerText

// innerText returns only text that written on web page

console.log(mainHeading.innerText)