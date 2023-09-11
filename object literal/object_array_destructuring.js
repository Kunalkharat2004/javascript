const array=[
    {name: "kunal",rollno:23,gender:"male"},
    {name: "janvi",rollno:22,gender:"female"},
    {name: "priya",rollno:21,gender:"female"},
]
let first=array[0];
console.log(first);
const [user1,user2,user3]=array;
console.log(user1);
var [{name}, ,{gender}]=array;
console.log(name);
console.log(gender);
var [,{name:user2_Name},{gender:user3_Gender}]=array;
console.log(user2_Name);
console.log(user3_Gender);