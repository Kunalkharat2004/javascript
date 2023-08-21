const person={
    name:"Kunal",
    age:19,
    college:"VIT Pune",
    hobbies:["coding","sleeping","listening music","watching movies"]
}
for(let key in person){
    console.log(key);
}
for(let key in person){
    console.log(person[key]);
}

console.log(Object.keys(person)); //It will give an array of keys in person
console.log(typeof Object.keys(person)); 
const val=(Array.isArray(Object.keys(person)));
console.log(val);
for(key in Object.keys(person)){
    console.log(key);
}
for(key of Object.keys(person)){
    console.log(key);
}
for(key of Object.keys(person)){
    console.log(person[key]);
}