// let array1=["item1","item2"];
// let array2=array1;
// console.log(array1);
// console.log(array2);
// But to make array2 as a independent array we need to use the following methods
// array2=array1.slice(0);
// array2=[].concat(array1);

// Spread operator
// array2= [...array1];
// array2.push("item3");
// console.log(array1);
// console.log(array2);



let array1=["item1","item2"];
let array2=array1;
console.log(array1);
console.log(array2);
// To add content to array2 
// array2=array1.slice(0).concat("item3","item4");
// array2=[].concat(array1,"item3","item4");

// Spread operator
// array2= [...array1,"item3","item4"];
let oneMoreArray=["item3","item4","item5"];
array2=[...array1,...oneMoreArray]
array2.push("item6");
console.log(array1);
console.log(array2);