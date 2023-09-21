const URL ="https://jsonplaceholder.typicode.com/postss";
//If there is a syntax error in the url or the data is not get from the server then catch block will not invoked
// As the fetch will return an object and there is a property ok which will be true if we get the data from server or no any syntax error in url otherwise, ok value will be false

fetch(URL)
.then((response)=>{
    if(response.ok){
        console.log(response);
        console.log(typeof response);
        // console.log(response.json()); //This will parse the json (i.e convert it into object)           
        return response.json();
    }else{
        throw new Error("Something went wrong!....");
    }
   
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
    console.log("Error occurred!....");   //Catch block will only executed when there is network error
})