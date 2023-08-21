// function declaration
function wishes(){
    console.log("Many Many Happy returns of the day");
}
function sum(num1,num2){
    return num1+num2;
}
wishes();
console.log(sum(2,5));

// function expression
const variable=function(){
    console.log("Twinkel Twinkel little star! How I wonder what you are....");
}
const table=function(number){
    for(let i=1;i<number;i++){
        console.log(number*i);
    }

}
table(9);

//arrow function
const myName=()=>{
    console.log("Hi my name is kunal and I am 19 yrs old. ");
}
myName();
const Sum=(number)=>number%2===0;
console.log(Sum(5));