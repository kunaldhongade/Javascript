// dom traversing

/*

 /n , space = /n s
                            Document (Root Node)
                             
        (Child NOde of Document) HTML (Root element) (element node)

                    head                                 /ns                 body

 /n , space     title          /n s    script  /n s             /ns           div      /ns
          
(text node)   (Dom Traversing)                                         /ns     h1      /ns   p
                text node    
                                                                         (My heading)     (i)
*/


/*

html is root node of HTML
text node does not have child node
browser ignores new line space after html tag because he knows head is always after html
*/

const rootNode = document.getRootNode() // root node is Document
console.log(rootNode);
console.log(rootNode.childNodes);

const htmlElementNode = rootNode.childNodes[0]
console.log(htmlElementNode)

console.log(htmlElementNode.childNodes) //NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0]
const textNode1 = htmlElementNode.childNodes[1]
const bodyElementNode = htmlElementNode.childNodes[2]

console.log(bodyElementNode) // body


// parentNode 
console.log(htmlElementNode.parentNode) // #document
console.log(htmlElementNode.childNodes[0].parentNode)// html

// ****** sibling relationship ****
console.log(headElementNode.nextSibling) // #text
console.log(headElementNode.nextSibling.nextSibling) // body

// In html rendered by browser we do not see blank space because browser does not display to us
// but we can change this behavior using css property
// white-space: normal; to white-space: pre

// we can get next sibling excluding all text node(black)

console.log(headElementNode.nextElementSibling) // body
console.log(headElementNode.childNodes) // NodeList(5) [text, title, text, script, text]


