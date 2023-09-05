const amazon=[
    {productName:"p1", productId:1, price:500},
    {productName:"p2", productId:2, price:1000},
    {productName:"p3", productId:3, price:200},
    {productName:"p4", productId:4, price:40},
    {productName:"p5", productId:5, price:8000}
];
//Checking that is there any product whose price is above 5000 
const ans=amazon.some((cartDetails)=>cartDetails.price>5000);
console.log(ans);