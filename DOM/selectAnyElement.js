// Select elements by their Id - getElementById
const mainHeading=document.getElementById("main-heading");
console.log(mainHeading);

// Select any elements - querySelector
const list=document.querySelector(".list-items"); //But it will only select the first occurrence of the class
const list2=document.querySelectorAll(".list-items"); //It will select all the occurrence of that class
console.log(list);
console.log(list2);