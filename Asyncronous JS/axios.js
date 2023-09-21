const url ="https://catfact.ninja/fact";
const btn= document.querySelector("button");
const para = document.querySelector("#para");
// btn.addEventListener("click",()=>{
//   const p = getImages();
//   p.then((res)=>{
//     para.textContent = res;
//   })
// })
//OR
btn.addEventListener("click",async()=>{
  const p = await getImages();
    para.textContent=p;
})

async function getImages(){
    const res = await axios.get(url);
    // console.log(res);
    // console.log(typeof res);
    return res.data.fact;
};