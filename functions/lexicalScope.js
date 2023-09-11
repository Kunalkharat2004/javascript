let myVar="value1";

const myApp=function(){
    function myFunc1(){
        const myFunc2=()=>{
            console.log(person);
            console.log("Inside myFunc2",myVar);
        }
        let person="Kunal";
        myFunc2();
  
    }
    console.log("Inside myApp");
    myFunc1();
    
}
myApp();