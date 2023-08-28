function myFunc(a,b){
    console.log("I am inside myFunc");
    console.log(`a+b is : ${a+b}`);
}
function myFunc2(callback){
    console.log("I am inside myFunc2");
    callback(32,3)
}
myFunc2(myFunc);
console.log("");
//See the difference between both of them

function Func(a,b){
    console.log("I am inside Func");
    console.log(`a+b is : ${a+b}`);
}
function Func2(callback){
    console.log("I am inside Func2");
}
Func2(Func(3,4));