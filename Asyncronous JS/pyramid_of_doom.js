const h1= document.querySelector(".heading1");
const h2= document.querySelector(".heading2");
const h3= document.querySelector(".heading3");
const h4= document.querySelector(".heading4");
const h5= document.querySelector(".heading5");
const h6= document.querySelector(".heading6");
const h7= document.querySelector(".heading7");

function performAction(element,text,color,time,onSuccess,onFailure){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color=color;
            onSuccess();
        }
        else{
            if(onFailure){
               onFailure();
            }
          
        }
   
    },time)
}

performAction(h1,"Heading1","red",2000,
        ()=>{performAction(h2,"Heading2","green",1000,()=>{
            performAction(h3,"Heading3","pink",3000,()=>{
              performAction(h4,"Heading4","blue",1000,()=>{
                performAction(h5,"Heading5","voilet",2000,()=>{
                    performAction(h6,"Heading6","crimson",1000,()=>{
                        performAction(h7,"Heading7","yellow",3000,()=>{

                        },()=>{console.log("Heading7 doesn't exist")})
                    },()=>{console.log("Heading6 doesn't exist")})
                },()=>{console.log("Heading5 doesn't exist")})
              },()=>{console.log("Heading4 doesn't exist")})  
            },()=>{console.log("Heading3 doesn't exist")})
        },()=>{console.log("Heading2 doesn't exist");})},
        ()=>{console.log("Heading1 doesn't exist");});