const sectionToDo= document.querySelector(".section-to-do");
//To know all the classes given to an element :
console.log(sectionToDo.classList);   //DOMTokenList(2)

//To add a class to an element :
sectionToDo.classList.add("xyz");
console.log(sectionToDo.classList);

//To delete a class of an element :
sectionToDo.classList.remove("xyz");
console.log(sectionToDo.classList);

// toggle will add the class if not exist and remove it if it exists
sectionToDo.classList.toggle("container");  // Now as container class is already present toggle will remove it 
console.log(sectionToDo.classList);

sectionToDo.classList.toggle("container");  // Now as container class is not present toggle will add it 
console.log(sectionToDo.classList);

const header= document.querySelector(".header");
