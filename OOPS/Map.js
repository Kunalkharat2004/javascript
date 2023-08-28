// In Map Key can be anything i.e(string,number,array,object)
const person=new Map();
person.set("firstName","Kunal");
person.set("age",19);
person.set(1,"Male");
person.set([1,2,3],"Value_array");
person.set({product:"Iphone",
            productPrice:120000},"Value_object");
console.log(person);

//Getting values using keys
console.log(person.get('firstName'));

//Getting size of Map
console.log(person.size);

//Checking if there exist a key in the Map
console.log(person.has('age'));

//Deleting a key-value pair from Map
person.delete('age');

// Iterating over entries
for(let [key,value] of person){
    console.log(key,":", value);
}
for(let p of person){
    console.log(p,typeof(p[0]));
}

//Iterating over keys
for(let p of person.keys()){
    console.log(p,typeof(p));
}

const product=new Map([['productName','Colgate'],['productPrice',120],['productId',1]]);
console.log(product);

const user1={
    id:1,
    name:"David"
};
const user2={
    id:2,
    name:"Shreya"
};
const Users=new Map();
Users.set(user1,{age:20,gender:"Male"});
Users.set(user2,{age:22,gender:"Female"});
for(u of Users){
    console.log(u);
}
// You can access value in this way:
console.log(Users.get(user1).gender); 
console.log(Users.get(user2).gender);