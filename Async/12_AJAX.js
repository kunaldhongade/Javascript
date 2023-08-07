/*

AJAX : Asynchronous javascript and XML

HTTP request to server
to CREATE, READ, UPDATE and DELETE

XML is Extensive Markup Language

Ajax is a set of "web development techniques" using many web technologies on the "client-side" to crate asynchronous web applications.

With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) behavior of the existing page

We don't use data in XML format anymore
we use JSON now. JavaScript Object Notation

//
    JSON madhe double quotes "" are necessary
    and no method's
    single array and then objects for each data
//
We have 3 most common ways to create and send request to server

    1. xmlHTTPRequest (old way of doing)
    2. fetch API (new way of doing)
    3. axios (this is third party library)

*/

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest() // creating obj

// http request on server
// on our api or any other 
// console.log(xhr)

console.log(xhr.readyState)

// step 1

xhr.open("GET", URL) // always in capital this is async work

// we can do any request GET, PUSH, POST, PATCH, PUT DELETE

// our request goes through multiple stages 0 to 4
// onreadystatechange and readystate
// we can use them as function

// browser call this function when its readystate changes

console.log(xhr.readyState)

xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
}

/*
Value	State	               Description

0       UNSENT                  Client has been created. open() not called yet.

1	    OPENED	                open() has been called.

2	    HEADERS_RECEIVED	    send() has been called, and headers and status are available.

3	    LOADING	                Downloading; responseText holds partial data.

4	    DONE	                The operation is complete.

*/

xhr.send()