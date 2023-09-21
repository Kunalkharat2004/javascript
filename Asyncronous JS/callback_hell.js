const h1=document.querySelector(".heading1");
const h2=document.querySelector(".heading2");
const h3=document.querySelector(".heading3");
const h4=document.querySelector(".heading4");
const h5=document.querySelector(".heading5");
const h6=document.querySelector(".heading6");
const h7=document.querySelector(".heading7");

//Text    Delay    Color
// one     1000      Red
// two      3000     Voilet
// three    2000     Pink
// four     1000     Yellow
// five     2000     Green
// six      1000     Blue
// seven    3000     Gray


//callback hell 
setTimeout(()=>{
    h1.textContent ="One";
    h1.style.color="red";
    setTimeout(()=>{
        h2.textContent="Two";
        h2.style.color="voilet";
        setTimeout(()=>{
            h3.textContent="Three";
            h3.style.color="pink";
            setTimeout(()=>{
                h4.textContent="Four";
                h4.style.color="yellow";
                setTimeout(()=>{
                    h5.textContent="Five";
                    h5.style.color="green";
                    setTimeout(()=>{
                        h6.textContent="Six";
                        h6.style.color="blue";
                        setTimeout(()=>{
                            h7.textContent="Seven";
                            h7.style.color="gray";
                        },3000)
                    },1000)
                },2000)
            },1000)
        },2000)
    },3000)
},1000);