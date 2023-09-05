const link= document.getElementsByClassName("list-items");     //HTML Collection
console.log(link);   

const link2= document.querySelectorAll(".list-items");        //Node List
console.log(link2);  

let link3= document.getElementsByTagName("a");           //HTML Collection
console.log(link3); 

//HTMLCollection & NodeList are array like object (array like objects means you can do index accessing & use length property)
// We can't iterate on HTML Collection using forEach loop

//By for loop
// for(let i=0;i<link3.length;i++){
//     link3[i].style.backgroundColor="green";
//     link3[i].style.color="white";
//     link[i].style.fontWeight= "bold";
// }

//By for of loop
// for(let link of link3){
//     link.style.backgroundColor="red";
//     link.style.color="white";
//     link.style.fontWeight="bold";
// }


//Using forEach loop

// link3.forEach((link)=>{
//         link.style.backgroundColor="red";
//         link.style.color="white";
//         link.style.fontWeight="bold";
// })

//But we can convert HTMLCollection into array :
link3=Array.from(link3);
console.log(Array.isArray(link3));
link3.forEach((link)=>{
    link.style.backgroundColor="yellow";
    link.style.color="black";
    link.style.fontWeight="bold";
})

//We can use all loops on NodeList
const link4= document.querySelectorAll("a");

for(let i=0;i<link4.length;i++){
    link4[i].style.backgroundColor="purple";
    link4[i].style.color="white";
    link4[i].style.fontWeigth="bold";
}

for(let link of link4){
    link.style.backgroundColor="orange";
    link.style.color="white";
    link.style.fontWeight="bold";
}

link4.forEach((link)=>{
    link.style.backgroundColor="red";
    link.style.color="white";
    link.style.fontWeight="bold";
});