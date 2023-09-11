// Q1.) Find the max and min number in array
const arr=[21,34,56,78,1,90];
let max=arr.reduce((accumulator,currentValue)=>{
    if(accumulator<currentValue){
        return currentValue;
    }else{
        return accumulator;
    };
});
let min=arr.reduce((accumulator,currentValue)=>{
    if(accumulator<currentValue){
        return accumulator;
    }else{
        return currentValue;
    };
});
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);

// Q2.) Check whether all the numbers in our array is a multiple of 10 or not

const mul=[10,20,30,40,50,60];

let res=mul.every((el)=>{
    return el%10===0;
});
console.log(res);