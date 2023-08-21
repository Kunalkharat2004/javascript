//function inside object is called as Method
// this keyword is consider as that object which is calling the function (object.function)
const person={
    name:"Kunal",
    age:18,
    gender:"Male",
    userInfo:function(){
        console.log(`${this.name} is ${this.age} years old and his gender is ${this.gender}`);
    }
}
// console.log(person.userInfo);
person.userInfo(); // 

function amazon(){
    console.log(`Customer name is ${this.userName} and Customer's ID is ${this.Id}`);
};
const user1={
    userName:"Mohit",
    Id:1,
    userInfo: amazon
};
const user2={
    userName:"Aaradhya",
    Id:2,
    userInfo: amazon
};
const user3={
    userName:"Zara",
    Id:3,
    userInfo: amazon
};

user1.userInfo();
user2.userInfo();
user3.userInfo();