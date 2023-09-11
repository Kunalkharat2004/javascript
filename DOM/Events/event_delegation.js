//Event delegation is a design pattern in JavaScript where instead of attaching an event listener to each individual element, you attach a single event listener to a common ancestor element. 

// This single event listener then watches for events that bubble up from the child elements

// When the event is detected, the event handler can determine which child element triggered the event and take the appropriate action.

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click",function(e){
    console.log(`You clicked on ${e.target.innerText}`);
});