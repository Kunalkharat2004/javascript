// const toDo= document.querySelector(".to-do-list");
// console.log(toDo.innerHTML);
// toDo.innerHTML="<li>new to do 1</li>";
// toDo.innerHTML +="<li>new to do 2</li>";  //But we don't use these method for adding elements because at every new element it will again render the html 

const newToDo= document.createElement("li");
newToDo.textContent="Eat pavbhaji";
const toDo= document.querySelector(".to-do-list");
toDo.append(newToDo);   //append will add the element at end
toDo.prepend(newToDo)   //prepend will add the element at start

//To remove an element use remove()
const removeToDo= document.querySelector(".to-do-list li");
removeToDo.remove();

//Insert an element before or after the selected element
const insertBefore=document.createElement("li");
insertBefore.textContent="Before to do";
toDo.before(insertBefore);

const insertAfter = document.createElement("li");
insertAfter.textContent="After to do";
toDo.after(insertAfter);