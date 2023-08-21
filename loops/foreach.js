//It is used to know which number is at which index
console.log("This is by for loop");
const number=[21,56,89,64];
function Numbers(number,index){
    console.log(`${number} is at index ${index}`);
}
for(let i=0;i<number.length;i++){
    Numbers(number[i],i);
}
console.log("");
console.log("This is by forEach loop");

const arr=[4,2,5,7,9];
function myfunc(number,index){
console.log(`${number} is at index ${index}`);
}
arr.forEach(myfunc);
console.log("");
//OR
const arr1=[23,54,6,78,21,90];
arr1.forEach(function(number){ //Order matters while passing the parameters i.e(number,index)
    console.log(`${number}`);
});
console.log("");
const arr2=[
    {firstName:"Kunal",age:19},
    {firstName:"Omkar",age:20},
    {firstName:"Mohit",age:24},
    {firstName:"Suresh",age:32},
]
arr2.forEach(function(object,index){
    console.log(`${object.firstName} is ${object.age} years old`);
});