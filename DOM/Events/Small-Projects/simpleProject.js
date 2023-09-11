const turnRed = document.querySelector("#one");
const sectionBtn = document.querySelector(".btn");
flag1=0;
turnRed.addEventListener("click",function(){
    if(flag1===0){
        sectionBtn.style.backgroundColor ="red";
        turnRed.style.backgroundColor="cyan";
        turnRed.textContent="Reset";
        flag1=1;
    }else{
        sectionBtn.style.backgroundColor="transparent";
        turnRed.style.backgroundColor="transparent";
        turnRed.textContent="Turn Red";
        flag1=0;
    };
 
});

const yellow = document.querySelector("#two");
flag2=0;
yellow.addEventListener("click",function(){
    if(flag2===0){
        sectionBtn.style.backgroundColor="yellow";
        yellow.style.backgroundColor="cyan";
        yellow.textContent="Reset";
        flag2=1;
    }else{
        sectionBtn.style.backgroundColor="transparent";
        yellow.style.backgroundColor="transparent";
        yellow.textContent="Turn Yellow";
        flag2=0;
    }
})

const green = document.querySelector("#three");
flag3=0;
green.addEventListener("click",function(){
    if(flag3===0){
        sectionBtn.style.backgroundColor="green";
        green.style.backgroundColor="cyan";
        green.textContent="Reset";
        flag3=1;
    }else{
        sectionBtn.style.backgroundColor="transparent";
        green.style.backgroundColor="transparent";
        green.textContent="Turn Green";
        flag3=0;
    }
})