// call function  allows you to invoke a function and explicitly specify the value of this inside that function. 

//This method is used to borrow a function from one object and call it on another object, effectively setting the value of this within the function.

const obj1={
    name:"Kunal",
    age:19,
    about:function(favMusic,movieName){
        console.log(`${this.name} is ${this.age} year's old and his favourite song is '${favMusic}' from '${movieName}' flim`);
    }
};

const obj2={
    name:"Riya",
    age:21
};
obj1.about("Kesariya","Brahmastra");
obj1.about.call(obj2,"Apna Banala Piya","Bhediya");

//We can also create a function globally and to invoke the function for setting a particular this just use make use of call
function carPrice(){
    console.log(`Ex-showroom price of ${this.carName} is $${this.carPrice} `);
}
const car1={
    carName:"Rolls-Royals",
    carPrice: "700k"
};
const car2={   
    carName:"Lamborgini",
    carPrice: "400k"
};
carPrice.call(car1);
carPrice.call(car2);

//Apply 
// It is similar to call() method. However, the primary difference between apply() and call() is in how they accept function arguments.

//The arguments are pass in an array

function country(nationalAnimal,countryName){
    console.log(`${nationalAnimal} is the national animal of ${countryName} and ${this.nationalBird} is the national bird of ${countryName}`);
}
const obj3={
    nationalBird:"Peacock"
}
country.apply(obj3,["Tiger","India"]);

//Bind
//It allows you to create a new function with a specified this value and, optionally, a set of predefined arguments.

//Unlike the call() and apply() methods, which immediately execute the function, the bind() method returns a new function that can be invoked later.

//Note that the original function is not modified by bind(). Instead, a new function is created based on the original function with the desired context and argument values.

const user1={
    userName:"Kunal",
    Id:12210272
};
const user2={
    userName:"Aaradhya",
    Id:32250269
};
const userFunc=userInfo.bind(user2);
userFunc();


function substract(x,y){
    return x-y;
};
const math=substract.bind(null,5);

console.log(math(3));

function userInfo(){
    console.log(`Hello ${this.userName} your ID is ${this.Id}`);
};

//Don't do this mistake
const Greet={
    name:"Kunal",
    greet:"Hello",
    hello(){
        console.log(this);
        console.log(`${this.greet},${this.name}!`);
    }
};

const Func=Greet.hello;  //When the function is called then the value of this is set, but here as we are not calling the hello function. We are just assigning the hello function in Func that's why the value of this is now "window" in this case
Func();
const Func1=Greet.hello.bind(Greet);
Func1();