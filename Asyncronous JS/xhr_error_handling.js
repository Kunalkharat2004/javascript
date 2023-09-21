const URL = "https://jsonplaceholder.typicode.com/postss";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    }else{
        console.log("error occurred!....");
    }

}
xhr.onerror = ()=>{                 //If there is network problem then this func will invoked
    console.log("Network Error!....");
}
xhr.send();