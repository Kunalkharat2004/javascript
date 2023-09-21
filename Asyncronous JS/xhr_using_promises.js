const URL = "https://jsonplaceholder.typicode.com/posts";

function myPromise(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject("Something went wrong!....");
            }
        }
        xhr.onerror=()=>{
            console.log("Network error!...");
        }
        xhr.send();
    })
}

myPromise("GET",URL)
.then((resolvedValue)=>{
    const data = JSON.parse(resolvedValue);
    console.log(data);
    return data;            //This will return a promise and resolve value will be data
})
.then((data)=>{
    const id = data[3].id;
    const url2 = `${URL}/${id}`;
   return myPromise("GET",url2);
})
.then((data2)=>{
    console.log(typeof data2);
    const parsedData = JSON.parse(data2);
    console.log(parsedData);
    console.log(typeof parsedData);
})
.catch((error)=>{
    console.log(error);
})