// Array is a reference type
// All the reference type are objects 
let fruits=["Apple","Mango","Grapes","Banana"];
console.log(fruits);
fruits[1]="Strawberry";
console.log(fruits);
console.log(fruits[2]);
// In arrays we can store value of any datatype 
let mixed=[1,2,3.54,"Kunal",null,undefined];
console.log(mixed);

console.log(typeof mixed);  //But to check more specifically which object is this use
console.log(Array.isArray(mixed));

let obj={};   // object literal is also a reference type
console.log(typeof obj,Array.isArray(obj));
