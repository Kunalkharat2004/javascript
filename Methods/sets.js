//Set is iterable
//Index accessing is not possible in set
const arr=["Kunal","Sachin","Rahul"];
const numbers= new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(arr);
console.log(numbers);
let length =0;
for(let number of numbers){
    length++;
    console.log(number);
}
console.log(`Length of set is ${length}`);