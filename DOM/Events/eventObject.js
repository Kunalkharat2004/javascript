//When we add a event listener browser will keep a track on our inputs
// When a button presses  js will execute the function and at the same time it will return a event object in callback functions argument (in this case function(event){})

const allButton = document.querySelectorAll(".btn button");
for(let button of allButton){
    button.addEventListener("click",function(event){
        console.log(event);
    })
}
                 