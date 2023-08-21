const classInfo={
     kunal:{
        branch: "CSAIML",
        age: 20,
        city:"Pune",
        prn: 12210272
     },
     omkar:{
        branch:"IT",
        age: 18,
        city: "Mumbai",
        prn: 12234980
     },
     janvi:{
        branch: "MECH",
        age: 21,
        city: "Delhi",
        prn: 12873432
     }  
};
console.log(classInfo);
console.log(classInfo['kunal']);
// To make changes
classInfo.kunal.city="Punjab";
console.log(classInfo.kunal.city);
console.log(classInfo['kunal']['city']);
//To delete any key value pair
delete classInfo.janvi;
console.log(classInfo);