// this keyword will refer to that object that is calling the function

const student={
    name:"Kunal",
    age:19,
    myfunc(){
        console.log(`${this.name} is ${this.age} year's old`);
    },
    xyz:function(){
        console.log(this)
    },
    arr:()=>{
        console.log(this);
    }
};
student.myfunc();
student.xyz();
student.arr();
//Arrow function do not have their own this. They take the value of this from their lexical scope(i.e the parent this value)





