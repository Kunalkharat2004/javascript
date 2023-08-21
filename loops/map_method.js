//Map method will return an array which return function i.e(the function which is passed as an argument in map()) is returning
const arr=[1,2,3,4,5,6];

const square=(num)=>{
    return num**2;
}
const returnArray=arr.map(square);
console.log(returnArray);
console.log(typeof(returnArray));
//OR
const arr1=[10,11,12,13,14];
const returnArray1=arr1.map((num)=>{
    return num**2;
});
console.log(returnArray1);

const person=[
    {firstname:"Kunal",age:19},
    {firstname:"Anjali",age:23},
    {firstname:"Manish",age:21},
    {firstname:"David",age:28}
];
const personNames=person.map((obj)=>{
    return obj.firstname;
});
console.log(personNames);