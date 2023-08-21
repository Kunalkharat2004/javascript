// length
var Name="Kunal Kharat";
console.log(Name);
console.log(Name.length);

//trim
let firstName="    Sachin     "  //trim will remove the spaces that has created in string
console.log(firstName);
console.log(firstName.length);
firstName=firstName.trim();
console.log(firstName);
console.log(firstName.length);

// slice
let lastName ="Kharat";
console.log(lastName.slice(-4,-1));
lastName=lastName.slice(0);
console.log(lastName);
lastName=lastName.slice(0,4);
console.log(lastName);
console.log(lastName.slice(-1));  // It wil substract  1 from the length of the string (i.e 6-1=5);

//replace
let rep="ILoveCoding";
console.log(rep.replace("Love","do"));
let w="ILoveCodingCodingCoding";
console.log(w.replace("Coding","Webdevelopment")); // in this case it will replace only the first occurrence of Coding

//repeat
let r="mango";
console.log(r.repeat(3));  // it will repeat 3 times i.e mangomangomango
//typeof

console.log(typeof lastName);
// To convert the string into an number
lastName=Number(lastName);
console.log(typeof lastName);
// or
let myStr= +"23";
console.log(typeof myStr);

// To convert the number into an string
let age=19;
console.log(typeof age);
age=String(age);
console.log(typeof age);
// or
age=age+"";
console.log(typeof age);

//String concatinate
let string1="Harsh"
let string2="Jagtap"
let fullName=string1+" "+string2;
console.log(fullName);
// or
let a="Kunal";
let b="Kharat";
console.log(a.concat(b));
let age1="19";
let age2="16";
let combine_age =age1+age2;
console.log(combine_age);   // 1916 will be printed  

combine_age= +age1 + +age2;
console.log(combine_age);

// templete string
let fname = "Kunal";
a=19;
let About=`my name is ${fname} and my age is ${a}.` ;
console.log(About);