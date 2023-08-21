// for of loop gives the content of the index of an array
const fruits1=["apple","orange","grapes","banana"];
const fruits2=[];
for(let fruit of fruits1){
    console.log(fruit);
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);