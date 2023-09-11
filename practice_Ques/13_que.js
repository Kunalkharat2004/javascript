//Qs1.Square and sum the array elements using the arrow function and then find the average of the array.

const arr=[1,2,3];

const square= arr.map((n)=>{
    return n**2;
});
const sum=square.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})
const avg=square.reduce((accumulator,currentValue)=>{
    return (accumulator+currentValue);
});
console.log(`Sum of elements in [${square}] is ${sum}`);
console.log(avg/arr.length);


//Qs2.Create a new array using the map function whose each element is equal to the original element plus 5

const arr1=[1,2,3,4,5];

const newArray=arr1.map((n)=>{
    return n+5;
});
console.log(newArray);

//Qs3.Create a new array whose elements are in uppercase of words present in the original array

const arr2=["kunal","siddhi","mohit","david"];
const uppercase=arr2.map(el=>el.toUpperCase())
console.log(uppercase);

// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.

const arr3=[3,5,6,7,9,12];
const doubleAndReturnArgs = (arr,...args)=>{ 
 return [ ...arr,...args.map((s)=>{return s**2})];
}
console.log(doubleAndReturnArgs(arr3,3,5,1,2,8));


// Q5.) Write a function called mergeObjects that accepts two objects and returns a new object that contanis all the key value pairs of first & second object

const student={
    name:"Kunal",
    roll_no:33,
    branch:"Computer Science"
};

const college={
    College_id:1,
    College_fees:190000,
    NIRF_ranking:170
};
const mergeObject=(obj1,obj2)=>{
    const newObject={...obj1,...obj2};
    return newObject;
}
console.log(mergeObject(student,college));