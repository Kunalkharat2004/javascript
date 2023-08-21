const arr=[300,100,4000,421,89];
const sortedArray=arr.sort((a,b)=>{
    return a-b;
});
console.log(sortedArray);

const arr1=["kunal","alok","bhuvan","garima","Pranjal"];
console.log(arr1.sort());

const amazon=[
    {productName:"p1", productId:1, price:500},
    {productName:"p2", productId:2, price:1000},
    {productName:"p3", productId:3, price:200},
    {productName:"p4", productId:4, price:40},
    {productName:"p5", productId:5, price:8000}
];
const lowToHigh=amazon.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(amazon);
console.log(lowToHigh);