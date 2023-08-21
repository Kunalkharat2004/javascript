const array1=["value1","value2","value3","value4"];
// To assign the values of arrays to a variable we make use of array destructuring
let [myVar1,,myVar3]= array1;
 let [Var1,Var2,...Var3]= array1;  // By ...Var3 we can create a array which include all the remaining elements in array1 
console.log(myVar1,myVar3);
console.log(Var1,Var2);
console.log(Var3);