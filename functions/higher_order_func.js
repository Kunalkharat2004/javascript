function higher(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

 const greet=function(){
    console.log("Namaste India");
 }
// higher(greet,5);
//OR
higher(function(){console.log("Namaste India")},5);

const Func=function(){
    const add=(a,b)=>{
        console.log(a+b);
    }
    function mul(a,b){
        console.log(a*b);
    }
    console.log("I am inside Func");
    add(9,3);
    mul(3,5);
}

Func();