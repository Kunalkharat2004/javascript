const obj={
    name:"Kunal",
    gender:"Male"
};

function myobj({name,gender}){
    console.log(name);
    console.log(gender);
}
myobj(obj);