//Returns the first element in the array that satisfies a provided testing function.
const arr=[11,37,65,32,56,78,90,23];
const n=arr.find((num)=>{
    return num%2===0;
});
console.log(n); //It will only check for the first answer

const user=[
    {userId:1, userName:"Kunal"},
    {userId:2, userName:"Mohit"},
    {userId:3, userName:"Zara"},
    {userId:4, userName:"Omkar"}
];
const myUser= user.find((user)=>{
    return user.userId===3;
});
console.log(myUser);