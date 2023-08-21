const arr=[
    ["kunal",23],
    ["omkar",19],
    ["janvi",22],
    ["aditya",21],
    ["chetna",20]
];
// for(let i=0;i<arr.length;i++){
//     console.log(`Record of ${i} student`);
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

//By for of loop
let u=0;
for(let name of arr){
    console.log(`Record of ${u}`);
    u++;
    for(let i of name){
        console.log(i);
}
    
}