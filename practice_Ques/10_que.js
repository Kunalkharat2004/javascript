const arr=[23,45,54,76,12,79,97];
let num=45;
const large=(arr,n)=>{
    const a=[];
    for(num of arr){
        if(num>n){
            a.push(num);
        }
    }
    return a;
}
console.log(large(arr,num));

//Qs2 Write a JavaScript function to extract unique characters froma string.Example: str=“abcdabcdefgggh” ans= “abcdefgh"

const str="aabcdddefghhhh";
function getUnique(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let currentChar=str[i];
        if(ans.indexOf(currentChar)=== -1){
            //If currentChar is not there add it

            //And if it is there then the index will not be -1 so it will not enter in the if block
            ans +=currentChar;
        }  
    }
    return ans;
}
console.log(getUnique(str));


//Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Example:country=["Australia","Germany","United States of America"]output:"United States of America"

const country=["India","Russia","Germany","Ukraine","Canada"];
function largestCountry(arr){
    let ansIndx=0;
    for(let i=0;i<arr.length;i++){

       let ansLen=arr[ansIndx].length;
        let currentCountry=arr[i].length;
        if(currentCountry>ansLen){
            ansIndx=i;
        }

    }
    return arr[ansIndx];
}


console.log(`${largestCountry(country)} is the longest country name`);

//Qs4.Write a JavaScript function to count the number of vowels in a String argument.
// const alpha=prompt("Enter a string");
// const NumberofVowels=(alpha)=>{
// let vowels=0;
// for(i=0;i<alpha.length;i++){
//     if(
//         alpha[i]==='a'||
//         alpha[i]==='e'||
//         alpha[i]==='i'||
//         alpha[i]==='o'||
//         alpha[i]==='u'
//     ){
//         vowels++;
//     }
// }
// return vowels;
// }
// console.log(`${NumberofVowels(alpha)} vowels are their in ${alpha}`);

//Qs5.Write a JavaScript function to generate a random number within a range (start,end)
let rand=Math.floor(Math.random()*101)+5;
console.log(rand);