const arr=new Array(10).fill(1);
console.log(arr);

//Now to change some numbers in the array use fill method

const copyArr=arr.slice(0).fill(3,1,4);
console.log(copyArr);
