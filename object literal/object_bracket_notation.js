const person={
    name:"Kunal",
    age:19,
    college:"VIT Pune",
    hobbies:["coding","sleeping","listening music","watching movies"]
}
//By default the key is of string datatype i.e "name","color","price"
console.log(typeof person.name);
console.log(person["name"]);
console.log(person["age"]);

//Adding a key to person
person["gender"]="Male";
console.log(person);

//Difference between dot & bracket notation
//By dot notation we can't name/access a key with space
const car={
    // car name="BMW"
    color:"white"
}
// console.log(car.car name);  is not possible
console.log(car.color);
const cars={
    "car name":"BMW",
    "car color":"black"
}
console.log(cars["car name"]);

//Adding a key to person 
const key="email";
person[key]="kunal@xyz.com"
console.log(person);