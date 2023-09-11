const userMethod={
    about:function(){
        if(this.gender==="male"){
            return `${this.firstName} ${this.lastName} is ${this.age} year's old and he lives in ${this.address}. He has got ${this.marks} marks in 12th`;
        }
        else if(this.gender==="female"){
            return `${this.firstName} ${this.lastName} is ${this.age} year's old and she lives in ${this.address}. She has got ${this.marks} marks in 12th`;
        }
        
    },
    is18:function(){
        return this.age>=18;
    },
    is12Pass:function(){
        return this.marks>=35;
    },
}

function user(firstName,lastName,age,address,marks,gender){
    //We can create an object, either using literal notation or a constructor function
    // The Object.create() method allows you to explicitly create an object with a specified prototype.
    const obj=Object.create(userMethod); // Now as about,is18,is12Pass methods is'nt there in user so we have pass __proto__ as  userMethod from which user will take those methods
    obj.firstName=firstName;
    obj.lastName=lastName;
    obj.age=age;
    obj.address=address;
    obj.marks=marks;
    obj.gender=gender;
    return obj;
};
const user1=user("Kunal","Kharat",19,"Pune,Hadapsar",98,"male");
console.log(user1);
const user2=user("Zara","Khan",24,"Delhi",78,"female");
console.log(user1.about());
console.log(user2.about());