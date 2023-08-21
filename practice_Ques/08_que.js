// Qs1. Write a JS program to delete all occurrences of element‘num’in a given array.Example:if arr=[1,2,3,4,5,6,2,3] & num=2
const arr=[1,2,3,4,5,6,2,3];
for(let i=0;i<arr.length;i++){
    if(arr[i]===2){
        arr.splice(i,1);
    }
}
console.log("Array without 2")
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr);

// Write a JS program to find the no of digits in a number.Example:if number = 287152,count= 6
let number=+prompt("Enter a number");
let numCopy=number;
let n=0;
while(number){
    let k=number%10;
    n++;
    number =Math.floor(number/10);
}
console.log(`${numCopy} is a ${n} digit number`);

// Qs3.Write a JS program to find the sum of digits in a number.Example:if number = 287152,sum = 25
let number2=+prompt("Enter a number to calculate it's sum");
let numCopy2=number2;
let sum=0;
while(number2)
{
    let rem=number2%10;
    sum +=rem;
    number2=Math.floor(number2/10);
}
console.log(`The sum of digits of ${numCopy2} is ${sum}`);

//Qs4.Print the factorial of a given number
let factNum=+prompt("Enter a number whose factorial you want");
let factorial=1;
for(let i=1;i<=factNum;i++){
    factorial *= i;
}
console.log(`Factorial of ${factNum} is ${factorial}`);

// Qs5.Find the largest number in an array with only positive numbers 
let array=[];
let arrSize=+prompt("Enter the size of array");
console.log("Enter the elements of array");
for(i=0;i<arrSize;i++){
    array.push(+prompt(`Enter element ${i+1}`));
}
console.log("Array is",array);
let largest=0;
for(i=0;i<array.length;i++){
    if(array[i]>largest){
        largest=array[i];
    }
}
console.log("Largest element is:",largest);
