const userMethod={
    about:function(){
        return `${this.firstName} ${this.lastName} is ${this.age} year's old and lives in ${this.address}`
    },
    is18:function(){
        return this.age>=18;
    }
}

function user(firstName,lastName,age,address){
    const obj={};
    obj.firstName=firstName;
    obj.lastName=lastName;
    obj.age=age;
    obj.address=address;
    obj.about=userMethod.about;  //We are not creating a new methods multiple times for new users rather we have created the methods only  once and accessing themm by their address
    obj.is18=userMethod.is18;
    return obj;
};
const user1=user("Kunal","Kharat",19,"Pune,Hadapsar");
const user2=user("Zara","Khan",24,"Delhi");
console.log(user1.about());
console.log(user2.about());