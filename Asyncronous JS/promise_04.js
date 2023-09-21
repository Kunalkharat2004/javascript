const h1= document.querySelector(".heading1");
const h2= document.querySelector(".heading2");
const h3= document.querySelector(".heading3");
const h4= document.querySelector(".heading4");
const h5= document.querySelector(".heading5");
const h6= document.querySelector(".heading6");
const h7= document.querySelector(".heading7");

// function myPromise(element,text,color){
//     return new Promise((resolve,reject)=>{
//         if(element){
//             setTimeout(()=>{
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             },1000)
          
//         }else{
//             reject("Element doesn't exist");
//         }
     
//     })
// }
// myPromise(h1,"heading1","red")
// .then(()=>{
//    return myPromise(h2,"heading2","green")
// })
// .then(()=>{
//     return myPromise(h3,"heading3","blue")
// })
// .then(()=>{
//     return myPromise(h4,"heading4","yellow")
// })
// .then(()=>{
//     return myPromise(h5,"heading5","salmon")
// })
// .then(()=>{
//     return myPromise(h6,"heading6","crimson")
// })
// .then(()=>{
//    myPromise(h7,"heading7","orange")
// })
// .catch((error)=>{
//     console.log(error);
// })

//By async & await
function myPromise(element,text,color){
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.textContent= text;
                element.style.color=color;
                resolve();
            },1000)
        }else{
            reject("Element doesn't exist");
        }
      
    })
}

async function changeSomething(){
    try{
        await myPromise(h1,"heading1","red");
        await myPromise(h2,"heading2","green");
        await myPromise(h3,"heading3","blue");
        await myPromise(h4,"heading4","pink");
        await myPromise(h5,"heading5","yellow");
        await myPromise(h6,"heading6","salmon");
         myPromise(h7,"heading7","purple");
    }catch(error){
        console.log(error);
    }

    console.log("This code is after try catch block");
    console.log("And as we make use of try catch either if an element is not found then also this code will get executed");
  
}
changeSomething();