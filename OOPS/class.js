//A class is a blueprint for creating objects with a certain structure and behavior

class User{
    // The constructor method is a special method that is automatically called when you create a new instance of the class. It initializes the object's properties
    constructor(firstName,lastName,age,address,marks,gender){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.address=address;
        this.marks=marks;
        this.gender=gender;
    }

    //You can define methods within the class body, just like regular functions. These methods are  shared by all instances of the class and are accessible through the prototype chain.
    about(){  
        if(this.gender==="male"){
            return `${this.firstName} ${this.lastName} is ${this.age} year's old and he lives in ${this.address}. He has got ${this.marks} marks in 12th`;
        }
        else if(this.gender==="female"){
            return `${this.firstName} ${this.lastName} is ${this.age} year's old and she lives in ${this.address}. She has got ${this.marks} marks in 12th`;
        };
    };

    is18(){
    return this.age>=18;
    };

    is12Pass(){
    return this.marks>=35;
    };
    func(a){
        console.log(a);
    };
};

const user1= new User("Kunal","Kharat",19,"Pune,Hadapsar",98,"male");
const user2= new User("Zara","Khan",24,"Delhi",78,"female");

console.log(user1.about())
console.log(user2.about());
user1.func("Hello,Kunal!");