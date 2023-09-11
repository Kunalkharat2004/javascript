//Every object in JavaScript has a prototype, which is itself an object, from which it inherits properties and methods
// function is ====> function as well as object (i.e an function is also having an empty object(prototype) in which we can store key:value pairs)

function user(firstName,lastName,age,address,marks,gender){
    const obj=Object.create(user.prototype);
    obj.firstName=firstName;
    obj.lastName=lastName;
    obj.age=age;
    obj.address=address;
    obj.marks=marks;
    obj.gender=gender;
    return obj;
};
// To access the prototype of a func type: function.prototype.key=value
//Ex: func.prototype.animal="lion";
//    func.prototype.house="Junggle";
//    func.prototype.type="carnivorous";
// Below object(prototype) will get created which will link func and its prototype
// {
//     animal:"lion",
//     house:"Junggle",
//     type:"carnivorous"
// }
user.prototype.about=function(){
    if(this.gender==="male"){
        return `${this.firstName} ${this.lastName} is ${this.age} year's old and he lives in ${this.address}. He has got ${this.marks} marks in 12th`;
    }
    else if(this.gender==="female"){
        return `${this.firstName} ${this.lastName} is ${this.age} year's old and she lives in ${this.address}. She has got ${this.marks} marks in 12th`;
    }
};
user.prototype.is18=function(){
    return this.age>=18;
};
user.prototype.is12Pass=function(){
    return this.marks>=35;
};

const user1=user("Kunal","Kharat",19,"Pune,Hadapsar",38,"male");
const user2=user("Zara","Khan",24,"Delhi",78,"female");

console.log(user1.about());
console.log(user1.is12Pass());