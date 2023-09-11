//Math is a object and pow() is a method inside Math object that's why Math.pow() i.e(object.method)
console.log(Math);  
console.log(Math.pow(2,3));
console.log(Math.random);
const person={
    name:"kunal",
    age:19,
    gender:"male",
    method:user

};

function user(){
    console.log(`Hello ${this.name}`);
};
person.method();  // person is the object and user is a method inside person  object
console.log("Hello World");