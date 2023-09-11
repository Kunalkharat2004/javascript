//Whichever function you make inside this file will be added inside window object as a method  
"use strict";
function greet(){
    console.log(this);
}
window.greet(); //As window object is calling the function that's why this will refere to window object
