// object is a reference datatpe
// object doesn't have any index
const person={
    name:"Kunal",
    age:19,
    college:"VIT Pune",
    hobbies:["coding","sleeping","listening music","watching movies"]
}
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.college);
person.hobbies.push("Eating");
person.hobbies[1]="Dancing"
console.log(person.hobbies);
//How to add key value pair to object
person["gender"]="Male";
console.log(person);

console.log(person["age"]);


const key1="obj1";
const key2="obj2";

const value1="myvalue1";
const value2="myvalue2";

const Values={};
Values[key1]=value1;
Values[key2]=value2;
console.log(Values);
//OR
const Values1={
    [key1]:value1,
    [key2]:value2
}
console.log(Values1);
const d={
    1:'a',
    2:'b',
    3:'c',
    true:1
};
console.log(d[1]);
console.log(person[age]);