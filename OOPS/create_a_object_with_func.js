// A function will return an object
function user(firstName,lastName,age,address){
    const obj={};
    obj.firstName=firstName;
    obj.lastName=lastName;
    obj.age=age;
    obj.address=address;
    obj.about=function(){
        return `${this.firstName} ${this.lastName} is ${this.age} year's old and lives in ${this.address}`;
    };
    obj.is18=function(){
        return this.age>=18;
    }
    return obj;
}
const user1=user("Kunal","Kharat",19,"Pune,Hadapsar");
const user2=user("Aaradhya","Kapoor",21,"Mumbai,Dadar");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log("");
console.log(user2);
console.log(user2.about());
console.log(user2.is18());