/* Q.1 Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
For example:for array[7,9,0,-2]and n=3 Print,[7,9,0] Also print last n positive number*/

const arr1=[7,9,0,-2];
let n=3;
console.log(arr1.slice(0,n));

const arr2=[7,9,0,-2,8,2,4,5];
let num=3;
console.log(arr2.slice(-num));

// Q.2 Write a JavaScript program to check whether a string is blank or not.
let str=prompt("Enter a string");
if(!str){
    console.log("String is empty");
}
else{
    console.log("Not empty");
}
// Q.3 Write a JavaScript program to test whether the character at the given(character)index is lowercase.
let char="KuNaL";
let indx=3;
if(char[indx]===char[indx].toLowerCase()){
    console.log("Lower case");
}
else{
    console.log("Upper case")
}
// Q.5 Write a JavaScript program to strip leading and trailing spaces froma string
let trim="    kunal    ";
console.log(trim.trim());

//Q.6 Write a JavaScript program to check if an element exists in an array or not.
const arr3=["kunal",2004,null,undefined];
let search=null;
let k=0;
for(let i=0;i<arr3.length;i++){
    if(search===arr3[i]){
       k=1;
    }
}
if(k===1){
    console.log("Found");
}