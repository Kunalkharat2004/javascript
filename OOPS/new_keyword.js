// The new keyword is used to create a instance of an object that is constructed by a constructor function

//Constructor functions are special functions used to create and initialize objects with a common structure and behavior. 

//Whenever you use 'new' keyword followed by a constructor function the 'new' keyword will do these steps for you:

// 1.) It will create an empty object and 'this' will refere to that particular object 
// this => {}

//2.) If the constructor function does not have an explicit return statement, the new object that was created is returned automatically.
//return this      'this' is basically the object

//3.) The newly created object's __proto__ is set to the prototype  of the constructor function automatically
// Object.create()

// It is a convention to start the name of constructor function with Capital letter, so that to understand other devlopers that we have to use new keyword before the constructor function 
function User(firstName,lastName,age,address,marks,gender){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.address=address;
    this.marks=marks;
    this.gender=gender;
}
User.prototype.about=function(){
    if(this.gender==="male"){
        return `${this.firstName} ${this.lastName} is ${this.age} year's old and he lives in ${this.address}. He has got ${this.marks} marks in 12th`;
    }
    else if(this.gender==="female"){
        return `${this.firstName} ${this.lastName} is ${this.age} year's old and she lives in ${this.address}. She has got ${this.marks} marks in 12th`;
    };
};

User.prototype.is18=function(){
    return this.age>=18;
};

User.prototype.is12Pass=function(){
    return this.marks>=35;
};

const user1= new User("Kunal","Kharat",19,"Pune,Hadapsar",98,"male");
const user2=new User("Zara","Khan",24,"Delhi",78,"female");

console.log(user1);
console.log(user1.about());
console.log(user2.about());
console.log(user1.is18());

console.log("");
//Applying for in loop on user1
for(let key in user1){
    console.log(key); //This will print all the keys including the prototype methods as well
};
console.log("");
//But if for some reason you want that only print those keys which are actullay in object not the prototype one then do this:
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
