const url ="https://dog.ceo/api/breeds/image/random";
async function getJokes(){
    const res= await fetch(url)
      console.log(res);
    const response=  await res.json();
    console.log(response.message);

  }