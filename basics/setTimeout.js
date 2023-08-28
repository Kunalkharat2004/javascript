// setTimeout
//setTimeout is a in-built function that allows you to schedule the execution of a function after a specified delay (in milliseconds).

//It's commonly used for creating delayed actions, animations, or running code after a certain period of time.

// Syntax: setTimeout(function,time(in msec))
console.log("Hi there!");
setTimeout(()=>{
    console.log("Apna college");
},4000);

console.log("Welcome to");


// setInterval
//setInterval is a in-built function that allows you to repeatedly execute a function at a specified interval.

//It's often used for tasks that need to be performed at regular intervals, such as updating the time on a clock, checking for new messages, or creating animations that need to be updated periodically.

const add=(a,b)=>{
    console.log(`${a}+${b} is ${a+b}`);
}

//To stop the repeated execution, you can use the clearInterval function and provide it with the ID returned by the setInterval call:
let id1=setInterval(()=>{add(3,4)},2000);
clearInterval(id1);

const obj={
    p:this
};
console.log(obj.p);


