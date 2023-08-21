const music={
    singerName:"Arjit Singh",
    famousSong:"Kesariya",
    age:33
}
let {famousSong,singerName}=music;   //  now singerName and famousSong becomes seperate variables
console.log(singerName);
//To access Arijit Singh & Kesariya as Name & song variables use this :
const {singerName:Name,famousSong:song}=music;
console.log(song);
singerName="Ajay Atul";
console.log(singerName);
console.log(Name);