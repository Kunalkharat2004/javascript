const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


//When we click on child automatically parent & grandParent also get called this is called as event bubbling
grandParent.addEventListener("click",()=>{
    console.log("You click GrandParent");
});
parent.addEventListener("click",()=>{
    console.log("You click parent");
});
child.addEventListener("click",()=>{
    console.log("You click child");
});
