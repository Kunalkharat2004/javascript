let winning_no= 23;
let guess= +prompt("Guess a number");
if(guess<23){
    console.log("Your guess is low");
}
else if(guess>23){
    console.log("Your guess is high");
}
else if(guess===winning_no){
    console.log("Congratulation your guess is correct!!");
}