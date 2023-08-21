// function sum(num1,num2){
//     return num1+num2;
// }
// console.log("Sum is:"+sum(12,10));

function array(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target===arr[i]){
            return i;
        }
    }
    return -1;
}
const a=[];
let size= +prompt("Enter array size");
for(let i=0;i<size;i++){
    a[i]=+prompt(`Enter ${i} elements`);
}

let target=+prompt("Enter target");
console.log(a);
console.log(array(a,target));