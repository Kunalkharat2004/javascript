// textContent - It will show all the text present.
// innerText - It will show the text which is not hidden

const mainHeading= document.getElementById("main-heading");
console.log(mainHeading.textContent);
console.log(mainHeading.innerText);
//You can also make changes in the text
mainHeading.textContent="This is something else." 
console.log(mainHeading.textContent);
