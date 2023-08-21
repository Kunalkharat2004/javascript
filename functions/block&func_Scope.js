// var is a function scope 
// let & const are block scope

{
    let myVar="Kunal";
    console.log(myVar);
}
// console.log(myVar); // We can't access myVar outside block
{
    var myVar="Sneha";
    console.log(myVar);
}
console.log(myVar);
