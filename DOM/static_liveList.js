// querySelector give us a static List
// getElementBySomething gives us a live List

//By querySelectorAll

const listItems = document.querySelectorAll(".to-do-list li");
const newLi = document.createElement("li");
newLi.textContent="Static list";
const ul = document.querySelector(".to-do-list");
ul.append(newLi);
console.log(listItems);

//By getElementBySomething

const ul2= document.querySelector(".to-do-list");
const listItems2= ul2.getElementsByTagName("li");
const newLi2= document.createElement("li");
newLi2.textContent = "Live List";
ul.append(newLi2);
console.log(listItems2);