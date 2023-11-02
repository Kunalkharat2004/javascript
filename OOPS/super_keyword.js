//The `super` keyword is used in classes and subclasses to call methods or access properties from the parent class constructor function.
//If a particular method or property is not present in Child class then it will inherit that property or methods from it's Parent class
// extends keyword allows you to create a subclass (child class) that inherits properties and methods from a parent class

// class Parent{
//     constructor(name,age,gender){
//         this.Name=name;
//         this.Age=age;
//         this.Gender=gender;
//     }
//     about(){
//         return `${this.Name} is ${this.Age} year's old and he is ${this.Gender}`;
//     };
// }

// class Child extends Parent{
//     constructor(name,age,gender,email){    
//         super(name,age,gender);    //Whenever you use the super keyword the constructor function of Parent class will get called immediately & name,age,gender get pass as arguments to the constructor function 
//         this.Email=email;
//     }
//     marks(mark){
//         return `${this.Name} got ${mark} marks in 12th`;
//     }
// }
// const user1= new Child("Kunal",19,"Male","kunal@xyz.com");
// console.log(user1.Name);
// console.log(user1.Email);
// console.log(user1.about());
// console.log(user1.marks(98));


//Example - 02
class Box{
    constructor(name,l,b){
        console.log("You are inside Area's constructor function");
        this.name = name,
        this.l= l,
        this.b=b;
    }
    area(){
        console.log(`Area of Box is ${this.l * this.b}`);
    }
}

class Square extends Box{
    constructor(name,s){
        super(name,s,s);
    }
    area(){     //Now although the area method is present in the Box class but now it will be overridden for the instances of Square class.
        console.log(`Area of Square is ${this.l * this.b}`);
    }
}

const obj1 = new Square("Square",4,4);
console.log(obj1.area());