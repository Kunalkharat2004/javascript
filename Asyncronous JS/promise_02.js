function myPromise(){
const bucket = ["chips","fruits","vegetables","salt","rice"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Promise resolved");  //We can pass anything(i.e array,string,object) as a value in resolve & reject
        }else{
            reject("Promise reject");
        }
    });
};

myPromise().then((resolvedParameter)=>{
    console.log("Resolved");
}).catch(()=>{
    console.log("Rejected");
})