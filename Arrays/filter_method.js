//The function passed as an argument(callback function) will return a boolean value

//Filter function will return an array
// const arr=[1,2,3,4,5,6];
// const evenNumbers=arr.filter((number,index)=>{
//     return number%2===0;
// });
// console.log(evenNumbers);

// function odd(number){
//     return number%2!=0;
// }
// const oddNumbers=arr.filter(odd);
// console.log(oddNumbers);

const arr = [{
    name:"Kunal",
    marks:98,
    city:"Pune"
},
{
    name:"David",
    marks:75,
    city:"Mumbai"
},
{
    name:"Vinod",
    marks:54,
    city:"Luknow"
},
{
    name:"Rajat",
    marks:47,
    city:"Delhi"
},

];
const failed=arr.filter((student)=>{
    return student.marks<70;
}
);
failed.forEach((fail)=>{
    console.log(fail.name);
})