// Default parameters 
const add=(a,b=1)=>a+b; // If any parameter is not passed in b then b will by default set as 1
console.log(add(4));

//Rest parameters
function number(a,b,...c){ //remaining parameters that are passed in function call will be stored in c as an array
    console.log(a);
    console.log(b);
    console.log(c);
}

number(1,2,3,4,5,6,7,8,9,10);
const sum=(...numbers)=>{
    let total=0;
 for(let number of numbers){
    total +=number;
 }
 return total;
}
console.log(sum(1,2,3,4,5));