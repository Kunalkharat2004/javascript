//The `super` keyword is used in classes and subclasses to call methods or access properties from the parent class.
//If a particular method or property is not present in Child class then it will inherit that property or methods from it's Parent class
// extends keyword allows you to create a subclass (child class) that inherits properties and methods from a parent class

class Parent{
    constructor(name,age,gender){
        this.Name=name;
        this.Age=age;
        this.Gender=gender;
    }
    about(){
        return `${this.Name} is ${this.Age} year's old and he is ${this.Gender}`;
    };
}

class Child extends Parent{
    constructor(name,age,gender,email){    //If you want to add some extra properties (in this case email) then you need to create a constructor. 
        super(name,age,gender);    //As name,age,gender are derived from Parent class only that's why we are passing them in super keyword 
        this.Email=email;
    }
    marks(mark){
        return `${this.Name} got ${mark} marks in 12th`;
    }
}
const user1= new Child("Kunal",19,"Male","kunal@xyz.com");
console.log(user1.Name);
console.log(user1.Email);
console.log(user1.about());
console.log(user1.marks(98));