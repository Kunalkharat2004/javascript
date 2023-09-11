const button= document.querySelector(".btn-change");
const body = document.body;
const currentColor = document.querySelector(".currentColor");

function randomColor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const rndColor =`rgb(${red},${green},${blue})`;
    return rndColor;
}
button.addEventListener("click",()=>{
    const rndColor = randomColor();
   body.style.backgroundColor= rndColor;
   currentColor.textContent=rndColor;
});