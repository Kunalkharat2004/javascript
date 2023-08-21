// Function inside an object is known as a method 
const operation ={
    add: function (a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul:function (a,b){
        return a*b;
    }
}
//OR
// const operation ={
//     add (a,b){
//         return a+b;
//     },
//     sub (a,b){
//         return a-b;
//     },
//     mul (a,b){
//         return a*b;
//     }
// }
console.log(operation);
console.log(operation.add(2,4));  //object.method
console.log(operation.sub(12,5));
console.log(operation.mul(3,9));
//As String and Arrays are objects That's why we can use various methods on them 
//i.e arr.push(3)

