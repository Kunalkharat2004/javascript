const ul = document.querySelector(".to-do-list");
const li = document.createElement("li");
 li.textContent="New todo";
 const li2= li.cloneNode(true); // true basically means that also clone all the textNode as well  
 ul.append(li);
 ul.prepend(li2);