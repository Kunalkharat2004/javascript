// function app(){
//     const hello= function(){
//         console.log("Hello World");
//     }
//     const Sum=(num1,num2)=>{return num1+num2;}

//     console.log("I am inside app");
//     hello();
//     console.log(Sum(9,4));
// }
// app();

function outter(){
   let z=32;
    function inner(a,b){
    let sum =a+b;
        console.log(sum);
        console.log(z);
    }
    let x=9;
    let y=4;
    console.log(x);
    console.log(y);
    // console.log(sum); becoz it is declare as let in the inner func block
    inner(3,2);
}
outter();

function Out(){
    function In(){
        console.log(x);
        console.log(y);
    }
    
    let x=1;
    let y=19;
    In();
}
Out();