let fruits=["Apple","Mango","Grapes","Banana"];
// Push will add elements from ending
// Pop will remove elements from ending but it will also store the poped value
fruits.push("Orange");
console.log(fruits);
let popedFruit = fruits.pop();
console.log(popedFruit);

//Unshift will add elements from starting
// Shift will remove elements from starting but it will also store the shift value

let Cars =["BMW","Audi","Ferrai","Bently","Rolls-Royals"];
Cars.unshift("Lamborgini");
console.log(Cars);
let shiftCar=Cars.shift();
console.log(Cars);
console.log(shiftCar);