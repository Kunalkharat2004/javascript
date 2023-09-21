const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
console.log(xhr);
console.log(xhr.readyState);
xhr.open("GET",URL);
console.log(xhr.readyState);

// xhr.onreadystatechange = function(){     //Whenever the readyState change this function will get invoke
//     if(xhr.readyState===4){
//         console.log(xhr.response);   //It will return the response in string (JSON) format
//         const response= xhr.response;
//         console.log(typeof response);
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }

// }
xhr.onload = function(){            //Whenever readyState becomes 4 then only this function will get invoked
    console.log(xhr.readyState);
}
xhr.send();