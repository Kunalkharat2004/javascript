const min= +prompt("Enter the minimum range");
    const max= +prompt("Enter the maximum range");
    let random_no= Math.floor(Math.random()*(max-min+1)+min);
    let attempt=0;
    let guess=prompt(`Guess a number between ${min} to ${max}`);
   
while(true){
    if(guess==random_no){
        attempt++;
        console.log("Congratulation!Your guess is correct.");
        console.log(`You guess the number in ${attempt} attempts`);
        break;
    }
    else if(guess=="quit"){
        console.log("You quit!");
        break;
    }
    else if(guess<random_no){  
         attempt++;
        guess=+prompt("Your number is too small.Please try again.");
    }
    else if(guess>random_no){  
         attempt++;
        guess=+prompt("Your number is too large.Please try again.");
    }
}