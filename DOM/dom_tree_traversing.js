const rootNode= document.getRootNode();
console.log(rootNode);

const HTMLNode=(rootNode.childNodes[0]);
console.log(HTMLNode.childNodes);  //NodeList(3) [head, text, body]

//Now to accessing head, newLine , body 
const headNode= HTMLNode.childNodes[0];
const textNode= HTMLNode.childNodes[1];
const bodyNode= HTMLNode.childNodes[2];
console.log(headNode);
console.log(textNode);
console.log(bodyNode);

//To see the parent of head
console.log(headNode.parentElement);

//To see the sibling of head
console.log(headNode.nextSibling);  // #text
console.log(headNode.nextSibling.nextSibling);  // body

// But if the next Sibling is newLine then the nextSibling property will give the newLine
//If we want to show only the element node use newElementSibling

console.log(headNode.nextElementSibling);  //body

const h1= document.querySelector("h1");
const div1 = h1.parentElement;
div1.style.backgroundColor="red";
div1.style.color="yellow";

//To select only the Element Nodes use children
const div2=document.querySelector(".container");
console.log(div2.children);       //HTMLCollection(2) [h1, p]