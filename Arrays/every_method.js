//Checks if all elements in the array satisfy a provided testing function.
const amazon=[
    {productName:"p1", productId:1, price:500},
    {productName:"p2", productId:2, price:1000},
    {productName:"p3", productId:3, price:200},
    {productName:"p4", productId:4, price:40},
    {productName:"p5", productId:5, price:8000}
];
const ans=amazon.every((cart)=>cart.price<10000);
console.log(ans);