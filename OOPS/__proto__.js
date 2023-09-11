//__proto__ is a non-standard property that exists on objects. 
//It's used to establish a link between an object and its prototype, which is essentially a template object from which the current object inherits properties and methods.

const obj1={
    key1:"value1",
    key2:"value2",
}

//We can create an empty object in two ways:
// const obj2={}
const obj2=Object.create(obj1); //When we create an object in this way, we are passing __proto__ as obj1 for obj2 i.e(if we call a method inside obj2 and it's not present then javascript will go to the obj1 & check whether their exist that method if yes then use it)
console.log(obj2);
obj2.key3="value3";
console.log(obj2.key1); //key1 is not present in obj2 but it is in obj1 that's why "value1" is printing;