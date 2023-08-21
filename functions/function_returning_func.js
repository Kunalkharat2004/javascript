const func1=()=>{

    function func2(){
        console.log("Hello Kunal");
    }
    console.log("Hello World");
    return func2;
}
let returnValue=func1();
console.log(returnValue);
returnValue();