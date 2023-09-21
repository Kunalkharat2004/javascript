function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
    })
}
async function promise2(){
   await promise1();
   await promise12();
   await promise1();
    promise1();
}