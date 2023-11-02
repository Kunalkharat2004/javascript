const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;

//This is  Event bubbling

grandParent.addEventListener("click",()=>{
    console.log("bubble grandParent");
});

parent.addEventListener("click",()=>{
    console.log("bubble parent");
});

child.addEventListener("click",()=>{
    console.log("bubble child");
});

body.addEventListener("click",()=>{
    console.log("bubble body");
})

// This is called Event capturing means, first js will check whether we are capturing document.body, then grandParent,parent,child if yes then the function will invoked

// grandParent.addEventListener("click",()=>{
//     console.log("capture !!!! grandParent");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("capture !!!! parent");
// },true);

child.addEventListener("click",()=>{
    console.log("capture !!!! child");
},true);

body.addEventListener("click",()=>{
    console.log("capture !!!! body");
},true);