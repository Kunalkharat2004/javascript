const arr=[1,2,3,4,5,10];
const sum=arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
console.log(sum);

/*accumulator  currentValue    return
  1               2             3
  3               3             6
  6               4             10
  10              5             15
  15              10            25
*/
const amazon=[
    {productName:"Mobile", productId:1, price:20000},
    {productName:"Laptop", productId:2, price:30000},
    {productName:"PS5", productId:3, price:120000}
];
 const bill=amazon.reduce((acc,item)=>{return acc += item.price},0);
console.log(bill);

/*
totalPrice     currentProduct      return
  0             20000               20000
  20000         30000               50000
  50000         120000              170000
*/
