// When a function returns a function in that case whatever variables,functions, and other identifiers are their in the Outter function can be accessed by the returning function

//Example - 01
function Outter(){
    console.log("I am outter function");
    let name="Kunal";
    return function inner(){
        console.log("I am inner function");
        console.log(name);
    };
}

const out=Outter();
out();


//Example - 02
function myfuncOut(){
    let count=0;
    return function(){
        if(count<=0){
            console.log("Hey there!,I am myfuncOut");
            }
            else{
                console.log(`I am already declared.Count is: ${count}`);
            }
            count++;
    } 
};
    const ans= myfuncOut();
    ans()

//Example - 03

function outter(power){
    return function(number){
        return number ** power;
    };
};
const square=outter(2);
const num=square(4);
console.log(num);