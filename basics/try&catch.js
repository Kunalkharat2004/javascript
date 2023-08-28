// try statement allows you to define a block of code to be tested for errors while it is being executed
// catch statement allows you to define a block of code to be executed, if an error occured in the try block

console.log("Hello World");
console.log("Hello World");
// console.log(a);     //Here a is not define i.e it will give error
console.log("Hello Kunal");
console.log("Hello Kunal");
console.log("");
//Using try and catch statements:
console.log("Hello World");
console.log("Hello World");
try{
    console.log(a); 
}catch(err){
    console.log("An error occured..a is not define");
    console.log(err);  //You can also print the error as the catch statement catches the error
};
console.log("Hello Kunal");
console.log("Hello Kunal");

