//promise.resolve & promise chaining

function myPromise(){
    return new Promise((resolve,reject)=>{
        value=true;
        if(value){
            resolve("kunal");
        }else{
            reject();
        }
    })
}

myPromise()
.then((resolvedValue)=>{
    console.log(resolvedValue);
    resolvedValue +="sachin";
    return resolvedValue;     // Now this will return an promise not a string(i.e "kunalsachin");
})                            //If you don't return anything then by default undefine will return
.then((resolvedValue)=>{
    console.log(resolvedValue);
    resolvedValue  += "kharat";
    return resolvedValue;
})
.then((resolvedValue)=>{
    console.log(resolvedValue);
})