//Converting anyDataType => Number

let salary = "25000";

let numberedSalary = Number(salary);
// console.log(numberedSalary);
// console.log(typeof(numberedSalary));

let number = "33abc";
let bool = true;
let NewNumber = Number(number)  
let NewBool = Number(bool)
// console.log(NewBool);        
// console.log(NewNumber);
// console.log(typeof(NewNumber));

//Conclusion : 

// "33" => 33
// "33abc" => NaN
// true/false => 1/0
// null => 0
// undefine => NaN

//Converting anyDataType => String

let Name = undefined;
let BoolString = String(Name)
// console.log(typeof BoolString);
// console.log(BoolString);

//Conclusion : 

// true => "true"
// null => "null"
// undefined => "undefined"
// 234 => "234"

//Converting anyDataType => Boolean

let isAdult = undefined;
console.log(Boolean(isAdult));

//Conclusion : 

// ""=> false
// "Kunal" => true
// null/undefined => false