// setTimeout
//setTimeout is a in-built function that allows you to schedule the execution of a function after a specified delay (in milliseconds).

//It's commonly used for creating delayed actions, animations, or running code after a certain period of time.
//First all the javascript code which is not there in the setTimeOut() function will execute & then the setTimeOut func will get invoke

// the delay we are passing is minimum delay

// Syntax: setTimeout(function,time(in msec))

// console.log("Script start");
// setTimeout(()=>{
//     console.log("Inside setTimeOut");
// },0);
// for(let i=0;i<100;i++){
//     console.log("hi");
// }
// console.log("Script end");

console.log("Script start");
const id = setTimeout(()=>{
    console.log("Inside setTimeOut");
},0);
for(let i=0;i<100;i++){
    console.log("hi");
}
console.log("Script end");
console.log(id);
clearTimeout(id);           //It will tell that don't execute the setTimeOut func whose id is 1



// setInterval
//setInterval is a in-built function that allows you to repeatedly execute a function at a specified interval.

//It's often used for tasks that need to be performed at regular intervals, such as updating the time on a clock, checking for new messages, or creating animations that need to be updated periodically.

const add=(a,b)=>{
    console.log(`${a}+${b} is ${a+b}`);
}

//To stop the repeated execution, you can use the clearInterval function and provide it with the ID returned by the setInterval call:
let id1=setInterval(()=>{add(3,4)},2000);
clearInterval(id1);


