const allButton= document.querySelectorAll(".btn button");  //All the buttons are selected
const body = document.body;
const btnOne= document.querySelector("#one");
//Now we can add events by using for loops

// for(let i=0;i<allButton.length;i++){
//     allButton[i].addEventListener("click",function(){
//         console.log(this);   // this will refer to the calling object only i.e the button
//     });                     //But in case of arrow function this will refer to object parent object (i.e window object)
// };

for(let button of allButton){
    button.addEventListener("click",function(){
        console.log(button.textContent);
    });
};

body.addEventListener("keypress",(e)=>{
    console.log(e.key);
});

btnOne.addEventListener("mouseover",()=>{
    console.log("Mouse event occurred!");
});
btnOne.addEventListener("mouseleave",()=>{
    console.log("Mouse event leaved!");
});