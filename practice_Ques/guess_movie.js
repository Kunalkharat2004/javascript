const movie="KGF2";
let guess=prompt("Guess my favourite movie");
while((guess!=movie)&& guess!="quit"){
    guess=prompt("Guess is wrong.Try again");
}
if(guess===movie){
    console.log("Congratulation!");
}
else{
    console.log("You quit!");
}
