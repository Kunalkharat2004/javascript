// for in loop gives the indicies of the array
const fruits1=["apple","orange","strawberry","grapes"];
const fruits2=[];
for(let fruit in fruits1){
    console.log(fruit);
}
console.log("Now priting the content using for in loop");
for(let index in fruits1){
    console.log(fruits1[index]);
    fruits2.push(fruits1[index].toUpperCase());
}
console.log("fruits2 is",fruits2);