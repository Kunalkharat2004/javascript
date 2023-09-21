//Promises helps to handle asynchronous operations such as making network requests, reading files, or executing other time-consuming tasks, in a more organized and manageable manner. 


//A Promise represents a value that may not be available yet but will be resolved at some point in the future, either with a successful result or an error. 

const bucket = ["chips","fruits","vegetables","salt","rice"];

//Creating a promise 
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Promise resolved");  //We can pass anything(i.e array,string,object) as a value in resolve & reject
    }else{
        reject("Promise reject");
    }
});

setTimeout(()=>{
    console.log("Inside setTimeOut");
},0)                     
//consuming promise is the task of browser
//then method take first parameter as resolve value & second parameter as reject value
friedRicePromise
.then((resolveParameter)=>{console.log(resolveParameter)}, 
      (rejectParameter)=>{console.log(rejectParameter)}
     );

//We can pass the reject parameter in catch method as well

friedRicePromise
.then((resolveParameter)=>{console.log(resolveParameter)}
                     )
.catch((rejectParameter)=>{console.log(rejectParameter)}
                     )

