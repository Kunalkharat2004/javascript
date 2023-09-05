//The function passed as an argument(callback function) will return a boolean value

//Filter function will return an array
const arr=[1,2,3,4,5,6];
const evenNumbers=arr.filter((number,index)=>{
    return number%2===0;
});
console.log(evenNumbers);

function odd(number){
    return number%2!=0;
}
const oddNumbers=arr.filter(odd);
console.log(oddNumbers);