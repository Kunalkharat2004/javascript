//Qs1.Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

const array=[1,2,3,4,5];
const arrayAverage=(arr)=>{
    let sum=0;
    for(let value of arr){
        sum +=value;
    }
    return sum/arr.length;
};
console.log(`Average of [${array}] is ${arrayAverage(array)}`);

//Qs2.Write an arrow function named isEven()that takes a single number as argument and returns if it is even or not.

let number=4;
const isEven=num=> num%2===0;
if(isEven){
    console.log(`${number} is an even number`);
}
isEven(number);

//Q.3)//Guess the output:

const obj={
    message:"Hello",
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(obj.logMessage.bind(obj),4000);   //When you pass object.logMessage as the callback to setTimeout, you're essentially passing a reference to the function without any context. 

// Ans: undefine


//Q.4) Guess the output

let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback);

//Ans : 4