//Syntax
// .splice(start,deleteCount,.."item1","item2");
let cars=["lamborgini","jaguar","audi","mercedez","bently"];
console.log(cars.splice(2)); // if only one parameter is pass it will treated same as slice
// But note that in case of slice the original array is not get affected
// & in splice it affect the original array
let cars2=["lamborgini","jaguar","audi","mercedez","bently"];
console.log(1,2); //delete jaguar & audi
console.log(cars2);
console.log(1,0,"volvo","maruti"); // add volvo & maruti at 1st index