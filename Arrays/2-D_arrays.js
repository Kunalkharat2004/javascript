const arr1=[[1,2,6],[5,8],[9,4]];
console.log(arr1)
console.log(arr1[0]);   //[1,2,6]
console.log(arr1[0][1]);  //2
console.log(arr1[2][1]);  //4
console.log(arr1[1][1]);  //8
console.log(arr1[0][2]);  //6
// console.log(arr1[3][0]);  error
// console.log(arr1[2][2]);  error

//tic-tac-toe
const arr=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(arr);
arr[0][1]="O";
console.log(arr);
